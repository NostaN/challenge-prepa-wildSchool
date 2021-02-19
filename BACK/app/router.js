const express = require('express');
const listController = require('./controllers/listController');
const router = express.Router();

/** CRUD List */
router.get('/list', listController.getAll);
router.get('/list/:id', listController.getOne);
router.post('/list', listController.create);

/** MW 404, toujours en dernier */
router.use((req, res) => {
    res.status(404).json({error: "not found"});
});

module.exports = router;