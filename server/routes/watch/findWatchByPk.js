const {Watch} = require('../../db/database')

module.exports = (app) => {
    app.get('/watches/:id', (req, res) => { 
        Watch.findByPk(req.params.id)
        .then(watch => {
            if(watch === null){
                const message = 'La montre demandée n\'existe pas. Réessayez avec un autre identifiant'
                return res.status(404).json({message, data: error})
            }
            const message = 'La liste de montres a bien été retournée'
            res.json({message, data: watch})
        })
        .catch(error => {
            const message = 'La montre n\'a pas pu être trouvée. Réessayez dans quelques instants'
            res.status(500).json({message, data:error})
        }) 
    
    })
}