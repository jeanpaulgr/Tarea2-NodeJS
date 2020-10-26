const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const relationsSchema = new mongoose.Schema(
    {
        userId: {
            type: ObjectId,
            require: true,
            ref: "Users"
        },

        userRelationID: {
            type: ObjectId,
            require: true,
            ref: "Users"
        },
        
    },
    {timestamps=true}
    );
    
module.exports = mongoose.model("relations", relationsSchema);
