const express = require("express");
const router = express.Router();

//import controller
const {createPost, getAllPosts} = require("../controllers/postController")
const {likePost, unlikePost} = require("../controllers/likeController");
const {createComment, deleteComment} = require("../controllers/commentController");

//mapping 
router.post("/posts/create", createPost)
router.get("/posts",getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
router.post("/comments/create", createComment);
router.post("/comments/delete", deleteComment);

//export
module.exports = router;