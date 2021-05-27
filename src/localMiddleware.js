import multer from "multer";

export const localMiddleware = (req, res, next) => {
  res.locals.isLoggin = Boolean(req.session.user);
  res.locals.logginUser = req.session.user;
  res.locals.siteName = "Wetube";
  console.log(req.session.user);
  next();
};

export const privateMiddleware = (req, res, next) => {
  if (req.session.user) {
    return next();
  } else {
    return res.redirect("/");
  }
};

export const publicMiddleware = (req, res, next) => {
  if (req.session.user) {
    return res.redirect("/");
  } else {
    return next();
  }
};

export const uploadAvatar = multer({ dest: "uploads/" });
