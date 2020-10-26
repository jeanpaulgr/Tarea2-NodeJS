const User = require("../models/users");


exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found"
            });
        }
        req.profile = user;
        next();
    });
};


// middlewares rest
exports.getUserList = (req, res) => {
   
};

exports.getUserProfiles = (req, res) => {
   
};
exports.update = (req, res, next, id) => {
   
};