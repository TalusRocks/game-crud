const fs = require('fs')
const games = JSON.parse(fs.readFileSync('./db/games.json', 'utf-8'))
const uuid = require('uuid-v4')

function getAllGames() {
  return games
}

function getOneGame(id) {
  const thisGame = games.find(el => el.id === id)
  let response
  if (!thisGame) {
    response = {error: {message: "Could not find that game"}}
  } else {
    response = thisGame
  }
  return response
}

function createGame(body) {
  let response
  if (!body) {
    response = {error: {message: "Please complete all fields"}}
  } else {
    body.id = uuid()
    games.push(body)
    const result = JSON.stringify(games)
    fs.writeFileSync('./db/games.json', result, 'utf-8')
    response = body
  }
  return response
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
    console.log(thisGame, "thisGame");
    console.log(body, "body");
    //better way to do this?
    thisGame.title = body.title
    thisGame.image = body.image
    thisGame.description = body.description
    thisGame.designers = body.designers
    thisGame.artists = body.artists
    thisGame.publishers = body.publishers
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
