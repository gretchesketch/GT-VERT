const { Router } = require("express");

Router.delete("./:id", async (req,res) => {
    try {
        const tripData = await Trip.destroy({
            where: {
                
            }
        })
    }
})