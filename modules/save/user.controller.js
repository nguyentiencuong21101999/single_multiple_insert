const { successResponse } = require("../../helper/respone_handle/success_handle");
const userModel = require("./user.model");

exports.save = async(req,res,next) =>{
   const {email ,password} = req.body;
   
    try {
        const results = await userModel.save(email,password); 
        res.json(new successResponse(results));
    } catch (error) {
        next(error)
    }

}

exports.getUser = async(req,res,next) =>{
    try {
        const results = await userModel.getUser(); 
        res.json(new successResponse(results));
    } catch (error) {
        next(error)
    }
}