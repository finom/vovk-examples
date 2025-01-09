import * as yup from 'yup';

export const userSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'Name cannot exceed 20 characters')
    .required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
});
