const { Watch } = require('../../db/database')
const { ValidationError, UniqueConstraintError } = require('sequelize')



module.exports = (app) => {
    app.put('/watches/:id', (req,res) => {
        const id = req.params.id
        Watch.update(req.body, {
            where: { id: id }
        })
        .then(() => {
            /* MEMO Pourquoi return ? : ça permet de transmettre l'erreur éventuelle dans le bloc plus bas. On économise donc le code du catch et on évite une duplication de code*/
            return Watch.findByPk(id).then(watch => {
                if(watch === null){
                    const message = 'La montre demandée n\'existe pas. Réessayez avec un autre identifiant'
                    return res.status(404).json({message, data: error})
                }
                const message = `La montre ${watch.nom} a bien été modifiée` 
                res.json({message, data: watch})
            })
            // .catch(error => {
            //     const message = 'La montre n\'a pas pu être modifiée. Réessayez dans quelques instants'
            //     res.status(500).json({message, data:error})
            // }) 
        })
        .catch(error => {
            if(error instanceof ValidationError){
                res.status(400).json({message: error.message, data: error})
              }
            if(error instanceof UniqueConstraintError){
                res.status(400).json({message: error.message, data: error})
              }
            const message = 'La montre n\'a pas pu être modifiée. Réessayez dans quelques instants'
            res.status(500).json({message, data:error})
        }) 
    })
 }
