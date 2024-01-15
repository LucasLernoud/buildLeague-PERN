CREATE TYPE category_type AS ENUM ('A', 'B', 'C');

CREATE TABLE PRODUCT (
id BIGSERIAL NOT NULL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
description VARCHAR(500),
price NUMERIC(10, 2),
category category_type,
image_url VARCHAR(255)
);

CREATE TABLE CUSTOMER (
    id SERIAL PRIMARY KEY,
    last_name VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    address VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- INSERT INTO PRODUCT (name, description, price, category, image_url)
-- VALUES 
--   ('Produit A', 'Description du Produit A', 19.99, 'A', 'https://exemple.com/produitA.jpg'),
--   ('Produit B', 'Description du Produit B', 29.99, 'B', 'https://exemple.com/produitB.jpg'),
--   ('Produit C', 'Description du Produit C', 39.99, 'C', 'https://exemple.com/produitC.jpg');





CREATE TABLE Panier (
    id SERIAL PRIMARY KEY,
    utilisateur_id INT REFERENCES Utilisateurs(id),
    produit_id INT REFERENCES Produits(id),
    quantite INT,
    prix_unitaire NUMERIC(10, 2),
    total_produit NUMERIC(10, 2),
    date_ajout TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
/* 
    UNIQUE (utilisateur_id, produit_id) -- Assure l'unicité des combinaisons utilisateur/produit
*/


CREATE USER lucas WITH PASSWORD '5962' SUPERUSER;
