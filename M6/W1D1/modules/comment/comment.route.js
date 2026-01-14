const express = require("express")
const commentController = require("./comment.controller")
const router = express.Router()

router.get("/blogPosts/:id/comments", commentController.findBlogPostComments)
router.get("/blogPosts/:id/comments/:commentId", commentController.findBlogPostCommentById)

router.post("/blogPosts/:id", commentController.createComment)

router.patch("/blogPosts/:id/comments/:commentId", commentController.updateComment)

router.delete("/blogPosts/:id/comments/:commentId", commentController.deleteComment)

module.exports = router