const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.disable('x-powered-by')
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

const gameRoutes = require('./src/routes/game-routes')
app.use('/games', gameRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || "sorry, something went wrong"
  res.status(status).json({error: {message: message}})
})

app.use((req, res, next) => {
  res.status(404).json({error: {message: "sorry, could not find that"}})
})

const listener = () => console.log(`Listening on port ${port}!`)
app.listen(port, listener)

module.exports = app
