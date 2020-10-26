const express = require("express");
const router = express.Router();

const {
    getUserList,
    getUserProfiles,
    update,
    userById
} = require("../controllers/users");

router.get("/user/list", getUserList);
router.get("/user/profile", getUserProfiles);
router.put("/user/:userId", update);

// parametros
router.param("userId", userById);

module.exports = router;