module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    first_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    preference_time: DataTypes.STRING.BINARY,
    preference_money: DataTypes.STRING.BINARY,
    hist_id: DataTypes.INTEGER
  });

  User.associate = function (models) {
    User.belongsToMany(models.History, {
      through: {
        model: models.userHistory
      }
    }, 
    {
      foreignKey: "user_id",
    });
  };

  // Class methods for use in passport
  User.authenticate = function (email, password, done) {
    console.log('hi from authenticate');
    console.log(email, password);

    User.findOne({
      where: {
        email: email
      }
    }).then(function (user) {
      if (!user) {
        return done(null, false);
      }
      if (user.password !== password) {
        return done(null, false);
      }
      console.log('we found a user, ', user);
      return done(null, user);
    }).catch(function (err) {
      return done(err);
    });
  };

  
  User.serializeUser = function (user, done) {
    console.log('hi from serializeUser');
    done(null, user.id);
  };

  User.deserializeUser = function (id, done) {
    console.log('hi from deserializeUser');
    User.findOne({
      where: {
        id: id
      }
    }).then(function (user) {
      console.log('found user in deserializeUser');
      done(null, user);
    }).catch(function (err) {
      done(err);
    });
  };

  return User;
};