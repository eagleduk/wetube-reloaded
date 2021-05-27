import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  const { username, email, password, password2 } = req.body;

  if (password2 !== password) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: "Do not correct passwords",
    });
  }

  try {
    await User.create({
      username,
      email,
      password,
    });
  } catch (error) {
    return res
      .status(400)
      .render("join", { pageTitle: "Join", errorMessage: error._message });
  }

  return res.redirect("/login");
};

export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};

export const postLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return res.render("login", {
      pageTitle: "Login",
      errorMessage: "ID is not exist.",
    });
  }

  const pwCorrect = await bcrypt.compare(password, user.password);
  if (!pwCorrect) {
    return res.render("login", {
      pageTitle: "Login",
      errorMessage: "Password is not correct",
    });
  }

  req.session.user = user;

  return res.redirect("/");
};

export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};

export const getEdit = (req, res) => {
  return res.render("user/edit", { pageTitle: "Edit" });
};

export const postEdit = async (req, res) => {
  const {
    session: {
      user: { _id, avatarUrl },
    },
    body: { username },
    file,
  } = req;

  const user = await User.findByIdAndUpdate(
    _id,
    {
      username,
      avatarUrl: file ? file.path : avatarUrl,
    },
    { new: true }
  );
  req.session.user = user;

  return res.redirect("edit");
};

export const getChange = (req, res) => {
  return res.render("user/change", { pageTitle: "Change Password" });
};

export const postChange = async (req, res) => {
  const {
    session: {
      user: { _id, password },
    },
    body: { oldPassword, newPassword, new1Password },
  } = req;

  const user = await User.findById(_id);
  if (password) {
    const pwCorrect = await bcrypt.compare(oldPassword, user.password);
    if (!pwCorrect) {
      return res.status(400).render("user/change", {
        pageTitle: "Change Password",
        errorMessage: "Current Password are not correct.",
      });
    }
  }
  if (newPassword !== new1Password) {
    return res.status(400).render("user/change", {
      pageTitle: "Change Password",
      errorMessage: "New Passwords are not correct.",
    });
  }

  user.password = newPassword;
  await user.save();

  req.session.user = user;

  return res.redirect("change");
};
