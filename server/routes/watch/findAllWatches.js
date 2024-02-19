const {Watch} = require('../../db/database')

module.exports = (app) => {
    app.get('/watches', (req, res) => { 
        Watch.findAll()
        .then(watches => {
            const message = 'La liste de montres a bien été retournée'
            res.json({message, data: watches})
        })     
    })
}