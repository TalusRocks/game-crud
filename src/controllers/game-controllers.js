const model = require('../models/game-models')
const fields = ['title', 'image', 'designers', 'year', 'rating']

function getAllGames(req, res, next) {
  // res.status(200).json(model.getAllGames())
  model.getAllGames().then(games => {
    res.json(games)
  })
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

function complete(req, res, next) {
  const errors = fields.filter(field => !req.body[field])
    .map(key => `${key}`)

  if (errors.length) {
    const status = 400
    const message = `Please complete fields: ${errors.join(', ')}`
    return next({ status, message })
  }

  return next()
}

module.exports = { getAllGames, getOneGame, createGame, editGame, destroyGame, complete }
