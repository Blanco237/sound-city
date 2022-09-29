
module.exports = (sequelize, DataTypes) => {

    const Songs = sequelize.define("Songs", {
        id : {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4, 
            primaryKey: true,
        },
        audio : {
            type: DataTypes.STRING,
            allowNull: false
        },
        image : {
            type: DataTypes.STRING,
            allowNull: false
        },
        album : {
            type: DataTypes.STRING,
            allowNull: true
        },
        track : {
            type: DataTypes.STRING,
            allowNull: false
        },
        privacy : {
            type: DataTypes.STRING, 
            defaultValue: "public"
        }
    },
    {
        tableName: "Songs",
        timestamps: true,
        paranoid: true
    }
    )
}