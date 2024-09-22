import * as Yup from 'yup';

const trimmedString = Yup.string().trim();

export const userValidationSchema = Yup.object({
  firstName: trimmedString.required("First Name is required"),
  lastName: trimmedString.required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
  number: Yup.number()
    .positive("Number must be a positive value")
    .min(10, "Invalid Number")
    .required("Number is required"),
  dob: Yup.date()
    .required("Date of Birth is required")
    .max(new Date(), "Enter correct Date of Birth"),
});

export const loginSchema = Yup.object({
  credential: trimmedString
    .required("Email or Phone number is required")
    .min(10, "complete the field"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number"),
});
