// Toujours charger les vars d'environnement en premier
require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const cors = require('cors');

// Création de notre application express
const app = express();

// Nos middlewares
app.use(express.urlencoded({extended: true}));

// ROUTER
app.use(router);

// J'autorise n'importe quel site à se connecter à mon API
// ce n'est pas safe ! Ce sera à changer dès que ma partie front sera en ligne
app.use(cors({
    origin: '*',
    methods: ('Allow', 'GET,POST,PATCH,DELETE,OPTIONS'),
    allowedHeaders: ('Access-Control-Allow-Origin', '*')
}));

// Port d'écoute
const PORT = process.env.PORT || 3000;

// Lancement de l'appli
app.listen(PORT, () => {
    console.log(`API Listening on ${PORT}`);
});