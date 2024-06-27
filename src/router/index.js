const express = require("express");

const router = express.Router();

router.use("/api/hello", (req, res) =>{
	res.status(200).json({message: "Hello World"});
});

module.exports = router;
