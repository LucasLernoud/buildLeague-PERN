CREATE TYPE category_type AS ENUM ('A', 'B', 'C');

/***** Utilisateurs *****/
CREATE TABLE utilisateurs (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    adresse VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


/***** Produits *****/

CREATE TABLE montres (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255),
    description TEXT,
    prix DECIMAL(10, 2),
    stock INTEGER,
    categorie_id INTEGER REFERENCES categories(id),
    marque_id INTEGER REFERENCES marques(id),
    image_url VARCHAR(255)
);


CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255)
);

CREATE TABLE marques (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255)
);


/***** Commandes *****/

CREATE TABLE commandes (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    date_commande TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    etat_commande VARCHAR(50)
);

CREATE TABLE details_commande (
    id SERIAL PRIMARY KEY,
    commande_id INTEGER REFERENCES commandes(id),
    montre_id INTEGER REFERENCES montres(id),
    quantite INTEGER,
    prix_unitaire DECIMAL(10, 2)
);

/***** Commandes *****/
CREATE TABLE commandes (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    date_commande TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    etat_commande VARCHAR(50)
);

CREATE TABLE details_commande (
    id SERIAL PRIMARY KEY,
    commande_id INTEGER REFERENCES commandes(id),
    montre_id INTEGER REFERENCES montres(id),
    quantite INTEGER,
    prix_unitaire DECIMAL(10, 2)
);



/***** Panier *****/
CREATE TABLE paniers (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    montre_id INTEGER REFERENCES montres(id),
    quantite INTEGER
);


/***** Avis et Évaluations: *****/
CREATE TABLE avis (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    montre_id INTEGER REFERENCES montres(id),
    commentaire TEXT,
    note INTEGER,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


/***** Codes Promotionnels *****/
CREATE TABLE codes_promo (
    id SERIAL PRIMARY KEY,
    code VARCHAR(50),
    pourcentage_reduction INTEGER,
    date_expiration DATE
);

/***** Newsletter *****/
CREATE TABLE abonnements_newsletter (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    email VARCHAR(255),
    date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/***** Historique des connexions *****/
CREATE TABLE historique_connexions (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    date_connexion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    adresse_ip VARCHAR(50)
);

/***** logs de transactions  *****/
CREATE TABLE logs_transactions (
    id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(id),
    montant DECIMAL(10, 2),
    date_transaction TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/***** Roles et Autorisations *****/

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(50) UNIQUE
);

CREATE TABLE permissions (
    id SERIAL PRIMARY KEY,
    role_id INTEGER REFERENCES roles(id),
    autorisation VARCHAR(255)
);





INSERT INTO marques (nom) VALUES
    ('Rolex'),
    ('Cartier'),
    ('Richard Mille');

    INSERT INTO montres (nom, description, prix, stock, categorie_id, marque_id) VALUES
    ('Santos', 'Super montre', 7500.00, 10, 1, 3),
    ('Submariner', 'Cool montre', 40000.00, 15, 1, 1),
    ('Tourbillon raphael nadal', 'montre chère', 500000.00, 5, 3, 3);