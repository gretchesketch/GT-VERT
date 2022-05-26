const { model, DataTypes } = require("./traveller");
const sequelize = require("../config/connection");

class Trip extends Model {}

Trip.init(
    id: {
        type: DataTypes.INT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    trip_budget: {
        type: DataTypes.INT,
        allowNull: false,
    },
    traveller_amount: {
        type: DataTypes.INT,
        allowNull: false,
    },
    traveller_id: {
        type: DataTypes.INT,
        allowNull: false,
        references: {
            model: "traveller",
            key: "id",

        },
    },
    location_id: {
        type: DataTypes.INT,
        allowNull: false,
        references: {
            model: "location",
            key: "id",
        },
    },
);
{
    sequelize,
}