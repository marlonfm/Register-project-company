const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express(); 

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

require('../app/controllers/index')(app);




app.listen(3333, ()=>{
    console.log("rodando server");
});
