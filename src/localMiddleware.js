import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

const s3 = new aws.S3({
  credentials: {
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

const multerUploader = multerS3({
  s3: s3,
  bucket: "wetube-reloaded",
  acl: "public-read",
});

export const localMiddleware = (req, res, next) => {
  res.locals.isLoggin = Boolean(req.session.user);
  res.locals.logginUser = req.session.user;
  res.locals.siteName = "Wetube";
  next();
};

export const privateMiddleware = (req, res, next) => {
  if (req.session.user) {
    return next();
  } else {
    req.flash("error", "Login first.");
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

export const uploadAvatar = multer({
  dest: "uploads/avatar",
  storage: multerUploader,
});

export const uploadVideo = multer({
  dest: "uploads/video",
  storage: multerUploader,
});
