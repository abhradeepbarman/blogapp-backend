const mongoose = require("mongoose");

//router handler
const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //this is the reference to post model
    },
    user: {
        type: String,
        required: true,
    },  
})

module.exports = mongoose.model("Like", likeSchema);