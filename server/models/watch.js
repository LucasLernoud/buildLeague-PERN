const validCategories = [
  "Luxe",
  "Hommes",
  "Femmes",
  "Unisexe",
  "Haut de gamme",
  "Milieu de gamme",
  "Entrée de gamme"
];

module.exports = (sequelize, DataTypes) => {

// à utiliser : 
// isEmpty pour vérifier si l'utilisateur n'a pas entré une chaine de caractère vide ''
//isUrl pour vérifier si c'est bien un lien


return sequelize.define('Watch', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: {
        msg: 'Le nom est déjà pris'
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    prix: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: {msg:'Utilisez uniquement une valeur décimale pour exprimer le prix'},
        notNull: {msg: 'Le prix est une propriété requise '}
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      min: {
        args: [0],
        msg: 'Le stock ne peut pas être inférieur à 0'
      }
    },
    categories: {
      type: DataTypes.STRING,
      allowNull: false,
      get(){
        return this.getDataValue('categories').split(',')
      },
      set(categories){
        this.setDataValue('categories', categories.join())
      },
      validate: {
        isCategoriesValid(value){
          if (!value){
              throw new Error('L\'élement doit posséder au moins une catégorie')
          }
          if(value.split(',').length > 9){
            throw new Error('L\'élement doit posséder au maximum neuf catégorie')
          }
          value.split(',').forEach(categorie => {
            if(!validCategories.includes(categorie)){
              throw new Error(`Les catégories doivent appartenir à la liste suivante : ${validCategories} `)
            }
            
          });
        }
      }

    },
    marque: {
      type: DataTypes.STRING,
      allowNull: false
    },

    // categories: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'categories',
    //     key: 'id'
    //   }
    // },
    // marque_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'marques',
    //     key: 'id'
    //   }
    // },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },

  },
  {
    timeStamps: true,
    createdAt: 'created',
    updatedAt: false
  }
  );
  
}