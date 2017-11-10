const uuid = require('uuid-v4')
const knex = require('../../db/connection')

function getAllGames() {
  // return games
  return knex('games')
}

function getOneGame(id) {
  const thisGame = games.find(el => el.id === id)
  // return knex('games')
  //   .where({id: id})
  //   .first()
  //   .then( thisGame => thisGame)
  let response
  if (!thisGame) {
    response = {error: {message: "Could not find that game"}}
  } else {
    response = thisGame
  }
  return response
}

function createGame(body) {
  console.log(body, "body before knex");
  return knex('games')
    .insert(body)
    .returning('*')
    .then((game) => {
      console.log(game, "inside then");
      return game
    })
}

function editGame(id, body) {
  const thisGame = games.find(el => el.id === id)
  let response
  if (!thisGame) {
    response = {error: {message: "Could not find that game"}}
  }
  else if (!body) {
    response = {error: {message: "Please complete all fields"}}
  } else {
    thisGame.title = body.title
    thisGame.image = body.image
    thisGame.description = body.description
    thisGame.designers = body.designers
    thisGame.year = body.year
    thisGame.rating = body.rating

    const result = JSON.stringify(games)
    fs.writeFileSync('./db/games.json', result, 'utf-8')
    response = body
  }
  return response
}

function destroyGame(id) {
  const thisGame = games.find(el => el.id === id)
  let response
  if (!thisGame) {
    response = {error: {message: "Could not find that game"}}
  } else {
    const index = games.indexOf(thisGame)
    games.splice(index, 1)
    const result = JSON.stringify(games)
    fs.writeFileSync('./db/games.json', result, 'utf-8')
    response = thisGame
  }
  return response
}

module.exports = { getAllGames, getOneGame, createGame, editGame, destroyGame }
