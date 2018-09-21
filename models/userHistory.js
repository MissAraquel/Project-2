module.exports = function(sequelize, DataTypes){ 
    var UserHistory = sequelize.define('userHistory', {
    status: DataTypes.STRING
    });
    return UserHistory;
}; 
