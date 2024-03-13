require("dotenv").config()
const { Sequelize, DataTypes } = require("sequelize")
const UserModel = require("../models/user")
const WatchModel = require("../models/watch")
const watches = require('./mock-watches')
const bcrypt = require('bcrypt')



const sequelize = new Sequelize("buildleaguedb", "lucas", "5962", {
  host: "localhost",
  dialect: "postgres",
  dialectOptions: {
    timezone: 'Etc/GMT-2'
  },
  logging: false
})

// Authentification à la base de données 
sequelize.authenticate()
  .then(() => console.log("La connexion à la BDD a été effectuée avec succès"))
  .catch(error => console.error("La connexion à la BDD a échoué:", error))


// Création des tables à partir des modèles sequelize
const User = UserModel(sequelize, DataTypes)
const Watch = WatchModel(sequelize, DataTypes)


// Synchronisation des Modèles sequelize avec les tables de la BDD 
const initDb = () => {
  return sequelize.sync({force:true})
  .then(() => {
    
    watches.map(watch => {
      Watch.create({
        nom: watch.nom,
        description: watch.description,
        prix: watch.prix,
        stock: watch.stock,
        image_url: watch.image_url,
        categories:watch.categories,
        marque:watch.marque
      }).then(watch => console.log(watch.toJSON()))
    })

    bcrypt.hash('azerty', 10)
      .then(hash => { User.create({ pseudo: 'ler', motdepasse: hash})
      .then(user => console.log(user.toJSON()))
      })


    console.log("La base de données  a bien été synchronisée")
  })
  .catch(error => console.error(`Impossible de synchroniser la base de données : ${error}`))

  
}

module.exports = {sequelize, initDb, Watch, User}
