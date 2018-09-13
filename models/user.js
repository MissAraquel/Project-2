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
    preference_money: DataTypes.STRING.BINARY
  });
  return User;
}; 

module.exports = function(sequelize, DataTypes) {
  var History = sequelize.define("History", {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    category: DataTypes.STRING,
    org_name: DataTypes.STRING,
    org_link: DataTypes.STRING,
  });
  return History;
};
