const { Model, DataTypes } = require("sequelize");
const sequelize = require('../database');

class List extends Model {

};

List.init({
    name: DataTypes.TEXT,
}, {
    // le nom de la table
    tableName: "list",
    // l'instance de connexion
    sequelize
});

module.exports = List;