import Joi from 'joi';

const itemSchema = Joi.object({
  shortDescription: Joi.string().trim().required(),
  price: Joi.string().pattern(/^\d+(\.\d{1,2})?$/).required(),
});

const purchaseSchema = Joi.object({
  retailer: Joi.string().trim().required(),
  purchaseDate: Joi.string().isoDate().required(),
  purchaseTime: Joi.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).required(),
  items: Joi.array().items(itemSchema).required(),
  total: Joi.string().pattern(/^\d+(\.\d{1,2})?$/).required(),
});

export const validatePurchase = (req, res, next) => {
  const validationResult = purchaseSchema.validate(req.body);

  if (validationResult.error) {
    return res.status(400).json({ "message": "Invalid request. Please check your request."});
  }
  next();
};

const idSchema = Joi.string().uuid({ version: 'uuidv4' }).required();

export const validateId = (req, res, next) => {
  const idValidationResult = idSchema.validate(req.params.id);

  if (idValidationResult.error) {
    return res.status(400).json({ "message": 'Invalid request. Please check your request.' });
  }
  next();
};