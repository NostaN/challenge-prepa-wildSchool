// on charge les variables d'environnements
require('dotenv').config();

const { List } = require('./app/models');

List.findByPk(1,{
    include: {all: true, nested: true}
    // signifie = va me chercher "tout" ainsi que toutes relations inclues (nested)
    // Trés pratique ! Mais sale ... en tout cas, pas performant !
    // on aurait pu faire plus propre :
    // include: [
    //     {association: "cards", include: [
    //         {association: "tags"}
    //     ]}
    // ]

}).then((list) => {
    console.log(`---- ${list.name} ----`);
    console.log('----------------------');
    console.log('----------------------')
    for (const card of list.cards) {
        console.log(`  -- ${card.title} --  `);
        for (const tag of card.tags) {
            console.log(`   - ${tag.name} -   `);
        }
        console.log('----------------------')
    }
});