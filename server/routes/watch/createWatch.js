const { Watch } = require('../../db/database')
const { ValidationError, UniqueConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.post('/watches', (req, res) => {
    Watch.create(req.body)
      .then(watch => {
        const message = `La montre ${req.body.nom} a bien été crée.`
        res.json({ message, data: watch })
      })
      .catch(error => {
        if(error instanceof UniqueConstraintError){
          res.status(400).json({message: error.message, data: error})
        }
        if(error instanceof ValidationError){
          res.status(400).json({message: error.message, data: error})
        }

        const message = 'La montre n\'a pas pu être ajoutée. Rééssayez dans quelques instants'
        res.status(500).json({message, data: error})
    }) 
  })
}