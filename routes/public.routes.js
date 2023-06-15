const express = require("express")
const router = express.Router()
const Wine = require("../models/Wine.model")

// GET /api/wines - Retrieves all of the wines
router.get("/wines", (req, res) => {
  Wine.find()
    .then(allWines => res.json(allWines))
    .catch(err => res.json(err))
})

module.exports = router;