const PORT = process.env.PORT ?? 8000
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { success, getUniqueId } = require("./helper.js")
const sequelize = require("./db/db")
let watches = require("./db/mock-watches")
var bodyParser = require('body-parser')

const app = express()

app
  .use(cors())
  .use(morgan("dev"))
  .use(bodyParser.json())
  

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  app.get("/", async (req, res) => {
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully.")
    res.send("coucou")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
  }
})


app.get("/watches", (req, res) => {
  const message = "la liste des montres a été envoyée avec succès"
  res.json(success(message, watches))
})

app.get("/watches/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const watch = watches.find((watch) => watch.id === id)
  const msg = "Une montre a bien été trouvée"
  res.send(success(msg, watch))
})

app.post('/watches', (req, res) => {

  const id = getUniqueId(watches);
  const newWatch = {...req.body, ...{id: id, created: new Date()}}
  watches.push(newWatch)
  const msg = `la montre ${newWatch.nom} a bien été ajoutée`
  res.json(success(msg, newWatch))
})

app.put('/watches/:id', (req,res) => {
  const id = parseInt(req.params.id)
  const watchUpdated = {...req.body, id: id}
  watches = watches.map((watch) => {
    return watch.id === id ? watchUpdated : watch
  })
  const msg = `La montre ${watchUpdated.nom} a été mise à jour`
  res.json(success(msg, watchUpdated))
})

app.delete('/watches/:id', (req,res) => {
  const id = parseInt(req.params.id)
  const watchDeleted = watches.find(watch => watch.id === id)
  watches = watches.filter(watch => watch.id !== id)
  const msg = `la montre ${watchDeleted.nom} a bien été supprimée`
  res.json(success(msg, watchDeleted))
})