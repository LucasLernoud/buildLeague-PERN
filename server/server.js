const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const database = require("./db/database")
let watches = require("./db/mock-watches")
var bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT ?? 8000

app
  .use(cors())
  .use(morgan("dev"))
  .use(bodyParser.json())

//Endpoints
require('./routes/watch/findAllWatches')(app)
require('./routes/watch/createWatch')(app)
require('./routes/watch/findWatchByPk')(app)
require('./routes/watch/updateWatch')(app)
require('./routes/watch/deleteWatch')(app)

//Erreur 404
app.use(({res}) => {
  const message = 'Erreur 404, impossible de trouver la page demandée'
  res.status(404).json({message})
})

  

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

database.initDb()