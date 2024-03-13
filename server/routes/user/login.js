/* Authentification : Créer un modèle User avec Sequelize */
const { User } = require('../../db/database')
const bcrypt = require('bcrypt')
  
module.exports = (app) => {
  app.post('/login', (req, res) => {
  
    User.findOne({ where: { username: req.body.username } }).then(user => {
        if(!user){
            message = `L'utilisateur ${req.body.username} n'existe pas`
            return res.status(404).json({message, data: req.body.user})
        }
      bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
        if(!isPasswordValid) {
          const message = `Le mot de passe entré est incorrect`;
          return res.status(401).json({ message })
        }
        const message = `L'utilisateur a été connecté avec succès`;
        return res.json({ message, data: user })

      })
    })
    .catch(error => {
        message = 'L\'utilisateur n\'a pas pu être connecté. Réessayez dans quelques instants'
        return res.status(500).json({message, data: error})
    })

  })
}