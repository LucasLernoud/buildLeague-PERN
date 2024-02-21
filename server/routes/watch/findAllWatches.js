const {Watch} = require('../../db/database')

module.exports = (app) => {
    app.get('/watches', (req, res) => { 
        Watch.findAll()
        .then(watches => {
            const message = 'La liste de montres a bien été retournée'
            res.json({message, data: watches})
        })
        .catch(error => {
            const message = `La liste des montres n'a pas pu être récupérée. Rééssayez dans quelques instants`
            res.status(500).json({message, data: error})
        })     
    })
}