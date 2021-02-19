// je vais chercher le fichier index de mes models pour récupérer les associations
const List = require('../models/list');

const listController = {

    getAll: async (req, res, next) => {
        try {
            const argonautesList = await List.findAll();
            res.json(argonautesList);
            // ici je définie ce que je renvoie au front
        } catch (error) {
            console.error(error);
            res.status(500).json({
                "error": error.message,
                "hint": error.original.hint
            });
            // dans un try catch, error aura toujours une propriété message
        }
    },

    getOne: async (req, res, next) => {
        try {
            // Récupérer l'id d'un membre
            const argonauteId = parseInt(req.params.id, 10);

            // Récupérer l'argonaute ciblé
            const argonaute = await List.findByPk(argonauteId);

            // renvoyer, soit l'argonaute soit une erreur 404
            if (argonaute) { // si mon argonaute existe, je la renvoie
                res.json(argonaute);
            } else { // sinon on passe au MW suivant (le "404" not found)
                next();
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                "error": error.message,
                "hint": error.original.hint
            });
        }
    },

    create: async (req, res, next) => {
        try {
            const newArgonaute = await List.create(req.body);
            res.json(newArgonaute);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                "error": error.message,
            });
        }
    },

    deleteOne: async (req, res, next) => {
        try {
            // nbDestroyed = l'id de l'argonaute qui est delete
            const nbDestroyed = await List.destroy({
                where: {
                    id: req.params.id
                }
            });

            if (nbDestroyed === 0) {
                // si on a rien supprimé, c'est qu'on a pas trouvé l'argonaute correspondant => 404
                next();
            } else {
                // si au moins un argonaute a été supprimé, on renvoie un petit message de vaidation
                res.json({message: "l'argonaute a bien été supprimé"});
            }

        } catch (error) {
            console.error(error);
            res.status(500).json( {
                "error": error.message
            });
        }
    },
}

module.exports = listController;