module.exports = function (sequelize, DataTypes) {
    var History = sequelize.define("History", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        },
        category: DataTypes.STRING,
        org_name: DataTypes.STRING,
        org_link: DataTypes.STRING,
    });

    History.associate = function (models) {
        History.belongsToMany(models.User, {
            through: {
                model: models.userHistory
              }
            },
            {
            foreignKey: "hist_id"
        });
    };
    return History;
};