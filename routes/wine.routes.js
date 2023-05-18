const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Wine = require("../models/Wine.model")

// POST /api/wines - Creates a new wine
router.post("/wines", (req, res) => {
  const { name, type, attributes, variety, region } = req.body

  Wine.create({ name, type, attributes, variety, region })
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

// GET /api/wines - Retrieves all of the wines
router.get("/wines", (req, res) => {
  Wine.find()
    .then(allWines => res.json(allWines))
    .catch(err => res.json(err))
})

// GET /api/wines/:wineId - Retrieves a specific wine by id
router.get("/wines/:wineId", (req, res) => {
  const { wineId } = req.params

  // PUT /api/wines/:wineId - Updates a specific wine by id
  router.put("/wines/:wineId", (req, res) => {
    const { wineId } = req.params

    if (!mongoose.Types.ObjectId.isValid(wineId)) {
      res.status(400).json({ message: "Specified id is not valid" })
      return
    }

    Wine.findByIdAndUpdate(wineId, req.body, { new: true })
      .then(updatedWine => res.json(updatedWine))
      .catch(err => res.json(err))
  })

  // DELETE /api/wines/:wineId - Delete a specific wine by id
  router.delete("/wines/:wineId", (req, res) => {
    const { wineId } = req.params

    if (!mongoose.Types.ObjectId.isValid(wineId)) {
      res.status(400).json({ message: "Specified id is not valid" })
      return
    }

    // We should normally also delete the tasks for the project

    Wine.findByIdAndDelete(wineId)
      .then(() => {
        res.json({ message: `Project with ${wineId} removed successfully` })
      })
      .catch(err => res.json(err))
  })
})

module.exports = router
