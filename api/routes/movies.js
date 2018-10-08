const express = require("express");
const router = express.Router();
const sample = require("../../sample.json");

var movies=[];
for(var i=0;i<100;i++){
    if(sample["entries"][i]["programType"] == "movie")
    movies.push(sample["entries"][i]);
}
router.get("/",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(200).json(movies);
});

module.exports=router;