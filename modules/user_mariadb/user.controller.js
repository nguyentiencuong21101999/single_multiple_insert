const { ErrorHandler } = require("../../helper/respone_handle/error_handle");
const { statusUser } = require("../../helper/respone_handle/status_code");
const {
  successResponse,
  messageSuccessResponse,
} = require("../../helper/respone_handle/success_handle");
const userModel = require("./user.model");

const checkEmailExisted

exports.insert = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const statusCheck = await
    
    const results = await userModel.insert(email, password);
    if (results) {
      res.json(new messageSuccessResponse(statusUser.InsertSuccess));
    }
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const { email, password } = req.body;
  const { id } = req.params;
  try {
    const results = await userModel.update(id, email, password);
    if (!results) {
      res.json(new ErrorHandler(statusUser.IdIsNotValid));
    } else {
      res.json(new messageSuccessResponse(statusUser.UpdateSuccess));
    }
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await userModel.delete(id);

    if (!results) {
      res.json(new ErrorHandler(statusUser.IdIsNotValid));
    } else {
      res.json(new messageSuccessResponse(statusUser.DeleteSuccess));
    }
  } catch (error) {
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const results = await userModel.getUser();
    res.json(new successResponse(results));
  } catch (error) {
    next(error);
  }
};
