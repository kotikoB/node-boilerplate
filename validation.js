const Joi = require('@hapi/joi');

// register validation
const registerValidation = data => {
    const validationSchema = Joi.object().keys({
        name: Joi.string()
            .min(6)
            .required(),
        email: Joi.string()
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });
    return validationSchema.validate(data);
};

const loginValidation = data => {
    const validationSchema = Joi.object().keys({
        email: Joi.string()
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });
    return validationSchema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
