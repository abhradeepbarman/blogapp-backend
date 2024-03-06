const Post = require("../models/postModel");

exports.createPost = async(req,res) => {
    try {
        const {title, body} = req.body;
        const post = new Post({
            title, body
        })    

        const savedPost = await post.save();

        res.json({
            post: savedPost,
        })
    } 
    catch (error) {
        res.status(500).json({
            error: "Error while creating post"
        })
    }
}

//more testing
exports.getAllPosts = async(req, res) => {
    try {
        const allPost = await Post.find()  
        
        res.json({
            allPost
        })
    } 
    catch (error) {
        res.status(500).json({
            error: "Error while fetching posts"
        })
    }
}