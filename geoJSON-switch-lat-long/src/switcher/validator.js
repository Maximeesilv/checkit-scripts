import Joi from 'joi';
export const geoSwitchValidator = Joi.array().length(2).max(2).min(2);