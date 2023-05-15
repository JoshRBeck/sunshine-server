const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const Wine = require("../models/Wine.model")

// GET /api/wines - Retrieves all of the wines
router.get("/wines", (req, res) => {
    Wine.find()
      .then(allWines => res.json(allWines))
      .catch(err => res.json(err))
  })

  // GET /api/wines/:wineId - Retrieves a specific wine by id
router.get("/wines/:wineId", (req, res) => {
    const { wineId } = req.params
  
    if(!mongoose.Types.ObjectId.isValid(wineId)) {
      res.status(400).json({ message: "Specified id is not valid" })
      return
    }
  
    Wine.findById(wineId)
      .then(wine => res.status(200).json(wine))
      .catch(err => res.json(err))
  })

  module.exports = router