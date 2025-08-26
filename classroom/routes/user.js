const express = require("express");
const router = express.Router();

//Users
//Index -users
router.get("/", (req, res) => {
    res.send("GET for users");
})

//Show -users
router.get("/:id", (req, res) => {
    res.send("GET for show users");
})

//POST -users
router.get("/", (req, res) => {
    res.send("POST for users");
})

//DELETE -users
router.delete("/:id", (req, res) => {
    res.send("DELETE for user ID");
})


module.exports=router;