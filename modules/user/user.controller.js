const { successResponse } = require("../../helper/respone_handle/success_handle");
const userModel = require("./user.model");
const { statusUser } = require('../../helper/respone_handle/status_code');
const { ErrorHandler } = require("../../helper/respone_handle/error_handle");
const {messageSuccessResponse} = require("../../helper/respone_handle/success_handle")
exports.insert = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const results = await userModel.insert(email, password);
        res.json(new successResponse(results));
    } catch (error) {
        next(error)
    }

}
exports.update = async (req, res, next) => {
    const { email, password } = req.body;
    const { id } = req.params;
    try {
        const results = await userModel.update(id, email, password);
        res.json(new successResponse(results));
    } catch (error) {
        next(error)
    }
}
exports.delete = async (req, res, next) => {
    const { id } = req.params;
    try {
        const results = await userModel.delete(id);
        if (!results) {
            res.json(new ErrorHandler(statusUser.IdIsNotValid))
        }
        res.json(new messageSuccessResponse(statusUser.DeleteSuccess));
    } catch (error) {
        next(error)
    }
}


exports.getUser = async (req, res, next) => {
    try {
        const results = await userModel.getUser();
        
        res.json(new successResponse(results));
    } catch (error) {
        next(error)
    }
}