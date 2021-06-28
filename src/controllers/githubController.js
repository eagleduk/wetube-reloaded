import fetch from "node-fetch";
import User from "../models/User";

export const githubAuth = (req, res) => {
  const baseUrl = "https://github.com/login/oauth/authorize";
  const config = {
    client_id: process.env.GH_CLIENT_ID,
    allow_signup: false,
    scope: "read:user user:email",
  };
  const params = new URLSearchParams(config).toString();

  const url = `${baseUrl}?${params}`;
  return res.redirect(url);
};

export const githubCallback = async (req, res) => {
  const { code } = req.query;
  const tokenUrl = "https://github.com/login/oauth/access_token";
  const tokenConfig = {
    client_id: process.env.GH_CLIENT_ID,
    client_secret: process.env.GH_CLIENT_SECRET,
    code,
  };
  const tokenParams = new URLSearchParams(tokenConfig).toString();
  const token = await (
    await fetch(`${tokenUrl}?${tokenParams}`, {
      method: "POST",
      headers: { Accept: "application/json" },
    })
  ).json();

  if (token?.access_token) {
    const gitUser = await (
      await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `token ${token.access_token}`,
        },
      })
    ).json();

    const { login, avatar_url } = gitUser;
    let email = gitUser.email;
    if (email) {
      const emails = await (
        await fetch("https://api.github.com/user/emails", {
          headers: {
            Authorization: `token ${token.access_token}`,
          },
        })
      ).json();
      email = emails.find((email) => email.primary && email.verified).email;
    }

    let user = await User.findOne({ email: email });
    if (!user) {
      user = await User.create({
        avatarUrl: avatar_url,
        username: login,
        email: email,
      });
    }
    req.session.loggedIn = true;
    req.session.user = user;
    req.flash("info", "Log in Success with Github");
    return res.redirect("/");
  } else {
    return res.redirect("/login");
  }
};
