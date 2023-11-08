const express = require("express");
const router = express.Router();
const {
  createScratcher,
  getAllScratchers,
  getScratcher,
  updateScratcher,
  deleteScratcher,
  replaceScratcherData,
} = require("../controllers/scratcherController");

router.post("/scratchers", createScratcher);
router.get("/scratchers", getAllScratchers);
router.get("/scratchers/:scratcherID", getScratcher);
router.put("/scratchers/:scratcherID", updateScratcher);
router.delete("/scratchers/:scratcherID", deleteScratcher);

//route for replacing scratcher data
router.post("/scratchers/replace", replaceScratcherData);

module.exports = router;
