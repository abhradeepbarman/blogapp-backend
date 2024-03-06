//import model
const Comment = require("../models/commentModel")
const Post = require("../models/postModel");

//business logic
exports.createComment = async(req,res) => {
    try {
        //fetch data from req body
        const {post, user, body} = req.body;
        //create comment obj
        const comment = new Comment({post, user, body});

        //save the new comment into db
        const saveComment = await comment.save();

        //find the post by ID, add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: saveComment._id}}, {new: true})
        .populate("comments")
        .exec()
        //new:true --> means that it'll return the updated post, otherwise it'll return olf post
        //populate the comment array with comment documents

        res.json({
            post: updatedPost
        })
    } 
    catch (error) {
        return res.status(500).json({
            error: "Error while creating comment"
        })
    }
}

exports.deleteComment = async(req,res) => {
    try {
        //fetch data from req body
        const {post, comment} = req.body;

        const deletedComment = await Comment.findOneAndDelete({post:post, _id:comment});

        //find the post by ID, add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {comments: comment}}, {new: true})
        .populate("comments")
        .exec()
        //new:true --> means that it'll return the updated post, otherwise it'll return olf post
        //populate the comment array with comment documents

        res.json({
            post: updatedPost
        })
    } 
    catch (error) {
        return res.status(500).json({
            error: "Error while deleting comment"
        })
    }
}
