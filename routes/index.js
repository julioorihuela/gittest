const express = require("express");
const app = express();

const personas = [ {
    nombre: "Pepe",
    edad: 21,
},
    {
        nombre: "Pepa",
        edad: 45
    }];


router.get("/personas", (req, res) => {
        res.send(personas);
});

module.exports = router;


