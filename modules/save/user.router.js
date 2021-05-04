const express = require('express');
const router = express.Router();

const controller = require("./user.controller");

router.post("/save",
controller.save
)
router.post("/get-user",
controller.getUser
)


module.exports = router;