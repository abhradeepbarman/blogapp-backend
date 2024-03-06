const Like = require("../models/likeModel")
const Post = require("../models/postModel")

exports.likePost = async(req, res) => {
    const {post, user} = req.body;
    
    try {
        const like = await Like.create({post, user});

        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: like._id}}, {new: true})
        .populate("likes")
        .exec();

        res.json({
            updatedPost,
        })
    } 
    catch (error) {
        return res.status(500).json({
            error: "Error while liking"
        })
    }
}

exports.unlikePost = async(req, res) => {
    const {post, like} = req.body;

    try {
        const deletedPost = await Like.findOneAndDelete({post:post, _id:like});

        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: like}}, {new: true})

        res.json({
            updatedPost,
        })
    } 
    catch (error) {
        return res.status(500).json({
            error: "Error while unliking"
        })
    }
}