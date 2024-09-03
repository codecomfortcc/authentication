import  joi from 'joi'
const schema = joi.object({
  email: joi.string().email().required(),
  password: joi.string()
  .min(8)
  .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=[\\]{};:"\\|,.<>/?]).*$'))
  .required()
  .messages({
    'string.empty': 'Password is required',
    'string.min': 'Password should have a minimum length of 8 characters',
    'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
  }),
})
const validateLogin = (req,res,next) => {
  const formData= req.body;
  const {error} = schema.validate(formData);
  if(error){
    return res.status(400).json({error:error.message});
  }
  next();
}
export default validateLogin;
