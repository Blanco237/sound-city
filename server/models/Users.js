// const { DataTypes } = require("sequelize");

const Songs = require("./Songs");

module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users" , {
        uid : {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        email : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        displayName : {
            type: DataTypes.STRING,
            allowNull: true,
        },
        photoURL : {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        tableName: "Users",
        timestamps: true,
        paranoid: true
    }
    )

    Users.hasMany(Songs);
    Songs.belongsTo(Users);

    return Users;
}