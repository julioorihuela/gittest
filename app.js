const express = require("express");
const app= express();
const routes = require("./routes");

app.use("/api", routes);


app.get("/", (req,res) => { 
    res.send("Hola mundo");
});

app.listen(3000);

