const express = require("express")
const router = express.Router()
const blogPostController = require("./blogPost.controller")
const { cloudUpload } = require('../../middlewares/uploads/index')

router.get("/blogPosts", blogPostController.findAll)
router.get("/search/blogPosts", blogPostController.findByTitle)
router.get("/blogPosts/:blogPostId", blogPostController.findOne)

router.post("/blogPosts/cover", cloudUpload.single('cover'), blogPostController.uploadFileOnCloud)
router.post("/blogPosts", blogPostController.create)

router.patch("/blogPosts/:blogPostId/cover", cloudUpload.single('cover'), blogPostController.uploadFileOnCloud)
router.patch("/blogPosts/:blogPostId", blogPostController.update)
// router.patch("/blogPostsAdmin", blogPostController.updateMany)

router.delete("/blogPosts/:blogPostId", blogPostController.deleteOne)

module.exports = router