// Toujours charger les vars d'environnement en premier
require('dotenv').config();
const express = require('express');
const router = require('./app/router');

// Création de notre application express
const app = express();

// Nos middlewares
app.use(express.urlencoded({extended: true}));

// ROUTER
app.use(router);

// Port d'écoute
const PORT = process.env.PORT || 3000;

// Lancement de l'appli
app.listen(PORT, () => {
    console.log(`API Listening on ${PORT}`);
});