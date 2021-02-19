const { Model, DataTypes } = require("sequelize");
const sequelize = require('../database');

class List extends Model {

};

List.init({
    name: {
        type: DataTypes.TEXT,
        // Ici, je définie une propriété validate donnée par Sequelize
        // Pour empêcher un utilisateur de saisir un nom vide
        allowNull: false,
        validate: {
            // Sequelize nous permet de créer notre propre message d'erreur avec la propriété "msg"
            notEmpty: {
                msg : "le nom ne peut pas être vide"
            }
        } 
    }
}, {
    // le nom de la table
    tableName: "list",
    // l'instance de connexion
    sequelize
});

module.exports = List;