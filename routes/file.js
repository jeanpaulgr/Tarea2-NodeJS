
const express = require("express");
const router = express.Router();

// endPoints?
const {
    avatarUpload,
    bannerUpload,
    fileAvatar,
    fileBanner,
} = require("../controllers/files");

// routes
router.post("/file/avatar/upload", avatarUpload);
router.post("/file/banner/upload", bannerUpload);
router.get("/file/avatar", fileAvatar);
router.get("/file/banner", fileBanner);

module.exports = router;

