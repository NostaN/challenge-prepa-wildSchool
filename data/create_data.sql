/* On crée une transaction
* une transaction, c'est un bloc d'instructions, qui commence par BEGIN
* et qui finit soit par COMMIT (pour valider) soit par ROLLBACK (pour annuler)
* Si une erreur se produit (ou qu'on appelle ROLLBACK), alors c'est tout le bloc qui est annulé. 
* Les instructions ne sont validées QUE si on arrive au COMMIT sans aucune erreur.
*/
BEGIN TRANSACTION;

/* commencer par supprimer toutes les tables si elles existent */
DROP TABLE IF EXISTS "list";

/* Table list */
CREATE TABLE IF NOT EXISTS "list" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
    /* petit débat ici, doit on donner une valeur par défaut à updated_at?
    on va faire en fonction de la doc Sequelize et dire que oui */
);

/* On remplie notre table list */
INSERT INTO "list" ("name") VALUES
('Eleftheria'),
('Gennadios'),
('Lysimachos');

COMMIT TRANSACTION;