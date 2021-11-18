const express = require("express");
const ImgBox = require("../models/imgbox");
const multer = require("multer");
const path = require("path");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_Id,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: process.env.S3_BUCKET_NAME,
    key(req, file, cb) {
      cb(
        null,
        `${
          process.env.S3_STORAGE_FOLDER_NAME
        }/original/${Date.now()}_${path.basename(file.originalname)}`
      );
    },
  }),
  limits: { fileSize: 3 * 1024 * 1024 },
});

const router = express.Router();

router.post("/image", upload.single("img"), (req, res, next) => {
  return res.status(200).send(req.file.location);
});

router.get("/list", async (req, res, next) => {
  try {
    const imgs = await ImgBox.findAll();

    return res.status(200).json(imgs);
  } catch (error) {
    console.error(error);
    return res.status(400).send("이미지 정보를 가져올 수 있습니다.");
  }
});

router.post("/create", async (req, res, next) => {
  const { title, filename, fileURL } = req.body;

  try {
    await ImgBox.create({
      title,
      filename,
      fileURL,
    });

    return res.status(201).json({ result: true });
  } catch (error) {
    console.error(error);
    return res.status(400).send("이미지 정보를 추가할 수 없습니다.");
  }
});

module.exports = router;
