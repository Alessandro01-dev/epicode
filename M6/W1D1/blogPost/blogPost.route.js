const express = require("express")

const router = express.Router()

const blogPostController = require("./blogPost.controller")

router.get("/blogPosts", blogPostController.findAll)
router.get("/search/blogPosts", blogPostController.findByTitle)
router.get("/blogPosts/:blogPostId", blogPostController.findOne)

router.post("/blogPosts", blogPostController.create)

router.patch("/blogPosts/:blogPostId", blogPostController.update)

router.delete("/blogPosts/:blogPostId", blogPostController.deleteOne)

module.exports = router