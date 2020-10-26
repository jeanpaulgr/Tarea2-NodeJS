const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },

        surname: {
            type: String,
            trim: true,
            required: true
        },

        password:{
            type: String,
            trim: true,
            require:true
        },

        birthdate: {
            type: Date,
            default: new Date()

        },

        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },

        avatar: {
            type: String,
            trim: true,
            default: ""
        },

        banner: {
            type: String,
            trim: true,
            default: ""
        },

        biography: {
            type: String,
            trim: true,
            default: ""
        },

        location: {
            type: String,
            trim: true,
            default: ""
        },

        website: {
            type: String,
            trim: true,
            default: ""
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("Users", usersSchema);