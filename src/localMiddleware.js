export const localMiddelware = (req, res, next) => {
  res.locals.isLoggin = Boolean(req.session.user);
  res.locals.logginUser = req.session.user;
  res.locals.siteName = "Wetube";
  next();
};
