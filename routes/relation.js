
const express = require("express");
const router = express.Router();

// endPoints?
const {
    getRelation,
    createRelation,
    deleteRelation
} = require("../controllers/relations");

const { 
    userById 
} = require("../controllers/users");

// routes
router.get("/relation",getRelation);
router.post("/relation/create/:userRelationID", createRelation);
router.delete("/relation/:userRelationID",deleteRelation);
//?--> Router.param que reciba un Middlewares
router.param("UserRelationID", userById);

module.exports = router;

