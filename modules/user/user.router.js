const express = require('express');
const router = express.Router();

const controller = require("./user.controller");

router.post("/insert",
controller.insert
)
router.post("/update/:id",
controller.update)
router.post("/delete/:id",
controller.delete)
router.get("/get-user",
controller.getUser
)


module.exports = router;