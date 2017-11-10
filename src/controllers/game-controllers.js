const model = require('../models/game-models')
const fields = ['title', 'image', 'designers', 'year', 'rating']
const pruneFields = ['title', 'image', 'designers', 'description', 'year', 'rating']

function getAllGames(req, res, next) {
  model.getAllGames().then(games => {
    res.json(games)
  })
}

function getOneGame(req, res, next) {
  model.getOneGame(req.params.gameId).then(game => {
    res.json(game)
  })
}

function createGame(req, res, next) {
  model.createGame(req.body).then(game => {
    res.status(201).json(game)
  })
}

function editGame(req, res, next) {
  model.editGame(req.params.gameId, req.body).then(game => {
    res.status(200).json(game)
  })
}

function destroyGame(req, res, next) {
  model.destroyGame(req.params.gameId).then(game => {
    res.json(game)
  })
}

// function prune(req, res, next) {
//  Object.keys(req.body).forEach(key => {
//    if (!pruneFields.includes(key)) delete req.body[key]
//  })
//  return next()
// }

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

module.exports = { getAllGames, getOneGame, createGame, editGame, destroyGame, complete}
