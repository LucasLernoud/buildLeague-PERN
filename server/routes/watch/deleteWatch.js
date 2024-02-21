const { Watch } = require('../../db/database')


module.exports = (app) => {
    app.delete('/watches/:id', (req,res) => {
        Watch.findByPk(req.params.id).then(watch => {
            if(watch === null){
                const message = 'La montre demandée n\'existe pas. Réessayez avec un autre identifiant'
                return res.status(404).json({message, data: error})
            }
            const watchDeleted = watch
            return Watch.destroy({
                    where: {id: watch.id}
            })
            .then(() => {
                const message = `La montre ${watchDeleted.id} (${watchDeleted.nom}) a bien été suprimée`
                res.json({message, data: watchDeleted})
            })
        })
        .catch(error => {
            const message = `La montre n'a pas pu être supprimée .Rééssayez dans quelques instants`
            res.status(500).json({message, data: error})
        })     
    })}

