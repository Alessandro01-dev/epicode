const express = require("express")
const router = express.Router()
const authorController = require("./author.controller")
const { cloudUpload } = require("../../middlewares/uploads")

router.get("/authors", authorController.findAll)
router.get("/authors/:userId", authorController.findOne)

router.post("/authors/avatar", cloudUpload.single('avatar'), authorController.uploadFileOnCloud)
router.post("/authors", authorController.create)

router.patch("/authors/:userId/avatar", cloudUpload.single('avatar'), authorController.uploadFileOnCloud)
router.patch("/authors/:userId", authorController.update)
// router.patch("/authorAdmin", authorController.updateMany)

router.delete("/authors/:userId", authorController.deleteOne)

module.exports = router