const router = require("express").Router();
const travellerRoutes = require("../models/traveller");


// Traveller.hasMany(Trips, {
//     foreignKey: "traveller_id",
//     onDelete: "CASCADE",
// });

// Trips.belongsTo(Traveller, {
//     foreignKey: "traveller_id"
// });

// Location.belongsTo(Trip, {
//     foreignKey: "Trips_id",
//     unique: false,
// });

Location.belongsToMany(Traveller, {
    through: Trips
});