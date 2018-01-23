// comment.js

var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

// export mongoose model "Comment", using schema defined in commentSchema
module.exports = mongoose.model("Comment", commentSchema);