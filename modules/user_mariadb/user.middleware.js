const joi = require('joi')
const validate = require('../../helper/validate_joi/validate_joi');

const validateInsert = (req, res, next) => {
    try {
        const insert = joi.object({
            email: joi.string().email().required(),
            password: joi.string().trim().required().min(6).max(255),
        })
        const validates = insert.validate(req.body)
        validate(validates);
        next()
    } catch (err) {
        next(err)
    }
}
const validateUpdate = (req, res, next) => {
    try {
        const update = joi.object({
            email: joi.string().email().required(),
            password: joi.string().trim().required().min(6).max(255),
        })
        const validates = update.validate(req.body)
        validate(validates);
        next()
    } catch (err) {
        next(err)
    }
}
module.exports = {
   validateInsert,
   validateUpdate
    
}