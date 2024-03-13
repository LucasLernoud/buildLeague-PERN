module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    pseudo: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Le nom est déjà pris.'
      }
    },
    motdepasse: {
      type: DataTypes.STRING
    }
  })
}