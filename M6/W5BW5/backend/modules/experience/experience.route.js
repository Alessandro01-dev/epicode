const express = require("express");
const router = express.Router();
const experienceController = require("./experience.controller");
const experienceBodyValidation = require("../../middleware/experience/experienceBodyValidation");

router.get("/me/experiences", experienceController.getExperienceByLogged);

router.get("/:userId/experiences", experienceController.getUserExperiences);

router.post("/experiences", experienceBodyValidation, experienceController.createExperienceLogged);

router.patch("/:expId", experienceController.updateExperienceLogged);

router.delete("/:expId", experienceController.deleteExperienceLogged);

module.exports = router;