const express = require('express')
const router = express.Router()
const gameCtrl = require('../controllers/game-controllers')

router.get('/', gameCtrl.getAllGames)
router.get('/:gameId', gameCtrl.getOneGame)
router.post('/', gameCtrl.prune, gameCtrl.complete, gameCtrl.createGame)
router.put('/:gameId', gameCtrl.prune, gameCtrl.complete, gameCtrl.editGame)
router.delete('/:gameId', gameCtrl.destroyGame)

module.exports = router
