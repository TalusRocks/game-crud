const model = require('../models/game-models')

function getAllGames(req, res, next) {
  res.status(200).json(model.getAllGames())
}

function getOneGame(req, res, next) {
  const id = req.params.gameId
  res.status(200).json(model.getOneGame(id))
}

function createGame(req, res, next) {
  const body = req.body
  res.status(201).json(model.createGame(body))
}

function editGame(req, res, next) {
  const id = req.params.gameId
  const body = req.body
  res.status(200).json(model.editGame(id, body))
}

function destroyGame(req, res, next) {
  const id = req.params.gameId
  res.status(200).json(model.destroyGame(id))
}

module.exports = { getAllGames, getOneGame, createGame, editGame, destroyGame }
