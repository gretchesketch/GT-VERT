const router = require("express").Router();
const { Traveller, Location, Trip } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const travellerData = await Traveller.findAll();
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", (req,res) => {
    try {
        const travellerData = await Traveller.create(req.body);
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("./:id", async (req, res) => {
    const travellerData = await Traveller
    })
});