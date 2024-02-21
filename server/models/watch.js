module.exports = (sequelize, DataTypes) => {

return sequelize.define('Watch', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    prix: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categories: {
      type: DataTypes.STRING,
      allowNull: false,
      get(){
        return this.getDataValue('categories').split(',')
      },
      set(categories){
        this.setDataValue('categories', categories.join())
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