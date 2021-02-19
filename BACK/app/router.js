const express = require('express');
const listController = require('./controllers/listController');
const router = express.Router();

/** CRUD List */
router.get('/list', listController.getAll);
router.get('/list/:id', listController.getOne);
router.post('/list', listController.create);
// pour l'instant je n'implante pas l'update, ce n'est pas demandé dans le challenge
router.delete('/list/:id', listController.deleteOne);

/** Syntaxe alternative */
// router.route('/list')
//     .get( listController.getAll )
//     .post( listController.create );
// router.route('/list/:id')
//     .get( listController.getOne )
//     .delete( listController.deleteOne );

/** MW 404, toujours en dernier */
router.use((req, res) => {
    res.status(404).json({error: "not found"});
});

module.exports = router;