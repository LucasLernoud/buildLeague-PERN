const {Watch} = require('../../db/database')

module.exports = (app) => {
    app.get('/watches/:id', (req, res) => { 
        Watch.findByPk(req.params.id)
        .then(watch => {
            const message = 'La liste de montres a bien été retournée'
            res.json({message, data: watch})
        })     
    })
}