module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    password: 
    {
      type: DataTypes.STRING,
      allowNull: false
    },

    first_name: 
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: 
    {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: 
    {
      type: DataTypes.STRING,
      allowNull: true
    },
    preference_time: DataTypes.STRING.BINARY, 
    preference_money: DataTypes.STRING.BINARY,
    hist_id: DataTypes.INTEGER
  });

  User.associate = function(models){
    User.belongsToMany(History, {
      through: {
        model: models.History,
      }
    },
    {
      foreignKey: "user_id",
    });
  };
  
  return User;
}; 

