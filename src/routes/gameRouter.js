import express from "express"
import * as gameServices from "../services/gameServices"

const router = express.Router()

// Listen to POST /games
router.post("/", function (req, res) {
  if (!req.body.name) {
    return res.status(400).send("Missing name parameter")
  }
  const newGame = gameServices.createGame(req.body.name)
  res.status(201).json(newGame)
})

export default router
