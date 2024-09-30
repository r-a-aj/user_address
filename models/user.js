module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true
  });

  User.associate = (models) => {
    User.hasMany(models.Address, {
      foreignKey: 'userId',
      as: 'addresses'
    });
  };

  return User;
};

