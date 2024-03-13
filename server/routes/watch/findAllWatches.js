const {Watch} = require('../../db/database')
const {Op} = require ('sequelize')

module.exports = (app) => {
    app.get('/watches', (req, res) => { 
        if(req.query.name){
            const nom = req.query.name
            const limit = parseInt(req.query.limit) || 1

            if (nom.length < 2){
                message = 'Le nom doit contenir au moins 2 caractères'
                return res.status(400).json({message})
            }

            Watch.findAndCountAll({
                where: {
                    nom: { // 'nom' est la propriété du modèle
                        [Op.like]: `%${nom}%` // 'nom' est le critère de la recherche
                    } 
                },
                order: ['nom'],
                limit: limit
            })
            .then(({count, rows}) => {
                const message = `Il y a ${count} éléments correspondant`
                res.json({message, data: rows})

            })
        }
        else{
        Watch.findAll({order: ['nom']})
        .then(watches => {
            const message = 'La liste de montres a bien été retournée'
            res.json({message, data: watches})
        })
        .catch(error => {
            const message = `La liste des montres n'a pas pu être récupérée. Rééssayez dans quelques instants`
            res.status(500).json({message, data: error})
        })  
       }      
    })
}