const express = require('express');
const router = express.Router();
const authUser = require("./user.middleware");
const controller = require("./user.controller");
router.post("/insert",
authUser.validateInsert,
controller.insert
)
router.post("/update/:id",
authUser.validateUpdate,
controller.update
)
router.post("/delete/:id",
controller.delete)
router.get('/get-user',
controller.getUser
)


module.exports = router;