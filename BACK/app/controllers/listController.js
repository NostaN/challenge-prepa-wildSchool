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
}

module.exports = listController;