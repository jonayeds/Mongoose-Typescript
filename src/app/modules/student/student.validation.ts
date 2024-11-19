import Joi from "joi"
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Z][a-z]+$/)
    .messages({
      'string.pattern.base': 'First name must start with an uppercase letter followed by lowercase letters.',
      'string.empty': 'First name is required.'
    }),
  middleName: Joi.string().trim().optional(),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[a-zA-Z]+$/)
    .messages({
      'string.pattern.base': 'Last name must only contain alphabetic characters.',
      'string.empty': 'Last name is required.'
    }),
});

// Guardian Schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().optional(),
  fatherOccupation: Joi.string().trim().optional(),
  fatherContactNo: Joi.string()
    .trim()
    .optional()
    .pattern(/^\d{10}$/)
    .messages({
      'string.pattern.base': 'Father contact number must be a 10-digit number.'
    }),
  motherName: Joi.string().trim().optional(),
  motherContactNo: Joi.string()
    .trim()
    .optional()
    .pattern(/^\d{10}$/)
    .messages({
      'string.pattern.base': 'Mother contact number must be a 10-digit number.'
    }),
  motherOccupation: Joi.string().trim().optional(),
});

// Local Guardian Schema
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().optional(),
  address: Joi.string().trim().optional(),
  occupation: Joi.string().trim().optional(),
  contactNo: Joi.string()
    .trim()
    .optional()
    .pattern(/^\d{10}$/)
    .messages({
      'string.pattern.base': 'Local guardian contact number must be a 10-digit number.'
    }),
});

// Student Schema
export const studentValidationSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    'string.empty': 'ID is required.'
  }),
  name: userNameValidationSchema.required(),
  gender: Joi.string()
    .valid('Male', 'Female')
    .required()
    .messages({
      'any.only': '{#value} is not a valid gender.',
      'string.empty': 'Gender is required.'
    }),
  dateOfBirth: Joi.date().iso().optional().messages({
    'date.format': 'Date of Birth must be in ISO 8601 format.'
  }),
  email: Joi.string()
    .email()
    .trim()
    .required()
    .messages({
      'string.email': 'Email must be a valid email address.',
      'string.empty': 'Email is required.'
    }),
  contactNumber: Joi.string()
    .trim()
    .required()
    .pattern(/^\d{10}$/)
    .messages({
      'string.pattern.base': 'Contact number must be a 10-digit number.',
      'string.empty': 'Contact number is required.'
    }),
  emergencyContact: Joi.string()
    .trim()
    .required()
    .pattern(/^\d{10}$/)
    .messages({
      'string.pattern.base': 'Emergency contact number must be a 10-digit number.',
      'string.empty': 'Emergency contact number is required.'
    }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-')
    .optional()
    .messages({
      'any.only': '{#value} is not a valid blood group.'
    }),
  presentAddress: Joi.string().trim().required().messages({
    'string.empty': 'Present address is required.'
  }),
  permanentAddress: Joi.string().trim().required().messages({
    'string.empty': 'Permanent address is required.'
  }),
  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian information is required.'
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'any.required': 'Local guardian information is required.'
  }),
  profileImage: Joi.string().uri().optional().messages({
    'string.uri': 'Profile image must be a valid URI.'
  }),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .messages({
      'any.only': '{#value} is not a valid status.'
    }),
});