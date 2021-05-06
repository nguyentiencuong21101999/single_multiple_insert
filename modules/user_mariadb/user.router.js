const express = require('express');
const router = express.Router();
const authUser = require("./user.middleware");
const controller = require("./user.controller");
const { request } = require('express');
router.post("/insert",
authUser.validateInsert,
controller.insert
)
router.post("/update/:id",
authUser.validateUpdate,
// authen.setHeader, => {token: "abc"}
// authen.requireToken, token cos hay khong => khong thi bye
// authen.verifyToken, token verify jwt (nha minh cap khong) con han su dung ko
// // /authen.isAdminOrIs || isRoot || isMaker check role
// Payload.set,
// controller.getProfile, => token => userId => user => request.recoird = user
// controller.checkEnail, 
// controller.update request.record =>
)
router.post("/delete/:id",
controller.delete)
router.get('/get-user',
controller.getUser
)


module.exports = router;