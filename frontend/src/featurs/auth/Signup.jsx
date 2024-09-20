import React from 'react'
import { userValidationSchema } from '../schemas';
import { signupApi } from './authApi';
import { useNavigate } from 'react-router-dom';
import { userFormik } from 'formik'

const Signup = () => {
    const navigate = useNavigate()

    const formik = userFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          dob: '',
          number: 0,
        },
        validationSchema: userValidationSchema,
        onSubmit: async (values, action) => {
            try {
                signupApi(values);
                navigate('/home');
          } catch (err) {
            err;
          } finally {
          }
        },
      });

  return (
    <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up to Celebration</h2>
        <p className="mt-2 text-base text-gray-600">
            Already have an account?{' '}
            <a
            href="#"
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
            >
            Login
            </a>
        </p>

        <form action={formik.handleSubmit}  className="mt-8">
            <div className="space-y-5">
            <div>
                <label htmlFor="firstName" className="text-base font-medium text-gray-900">
                First Name
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your full name"
                    {...formik.getFieldProps('firstName')}
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                />
                </div>
                {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
              )}
            </div>

            <div>
                <label htmlFor="lastName" className="text-base font-medium text-gray-900">
                Last Name
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter your full name"
                    {...formik.getFieldProps('lastName')}
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                />
                </div>
                {formik.touched.lastName && formik.errors.lastName && (
                <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
              )}
            </div>

            <div>
                <label htmlFor="email" className="text-base font-medium text-gray-900">
                Email address
                </label>
                <div className="mt-2.5">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email to get started"
                    {...formik.getFieldProps('email')}
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                />
                </div>
                {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              )}
            </div>

            <div>
                <label htmlFor="number" className="text-base font-medium text-gray-900">
                Phone number
                </label>
                <div className="mt-2.5">
                <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Enter email to get started"
                    {...formik.getFieldProps('number')}
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                />
                </div>
                {formik.touched.number && formik.errors.number && (
                <div className="text-red-500 text-sm">{formik.errors.number}</div>
              )}
            </div>

            <div>
                <label className="block mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  id='dob'
                  {...formik.getFieldProps('dob')}
                  className="w-full p-2 border rounded"
                />
                {formik.errors.dob && formik.touched.dob && (
                  <div className="text-red-500 text-sm">{formik.errors.dob}</div>
                )}
            </div>

            <div>
                <label htmlFor="password" className="text-base font-medium text-gray-900">
                Password
                </label>
                <div className="mt-2.5">
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    {...formik.getFieldProps('password')}
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                />
                </div>
                {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              )}
            </div>

            <div>
                <label htmlFor="confirmPassword" className="text-base font-medium text-gray-900">
                Confirm Password
                </label>
                <div className="mt-2.5">
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    {...formik.getFieldProps('confirmPassword')}
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                />
                </div>
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
              )}
            </div>

            <div className="flex items-center">
                <input
                type="checkbox"
                name="agree"
                id="agree"
                className="w-5 h-5 text-blue-600 bg-white border-gray-200 rounded"
                />
                <label htmlFor="agree" className="ml-3 text-sm font-medium text-gray-500">
                I agree to Postcraft’s{' '}
                <a href="#" title="" className="text-blue-600 hover:text-blue-700 hover:underline">
                    Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" title="" className="text-blue-600 hover:text-blue-700 hover:underline">
                    Privacy Policy
                </a>
                </label>
            </div>

            <div>
                <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                >
                Create free account
                </button>
            </div>
            </div>
        </form>

        <div className="mt-3 space-y-3">
            <button
            type="button"
            className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
            >
            <div className="absolute inset-y-0 left-0 p-4">
                <svg
                className="w-6 h-6 text-rose-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                >
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
            </div>
            Sign up with Google
            </button>

            <button
            type="button"
            className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
            >
            <div className="absolute inset-y-0 left-0 p-4">
                <svg
                className="w-6 h-6 text-[#2563EB]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                >
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
            </div>
            Sign up with Facebook
            </button>
        </div>
        </div>
    </div>
  )
}

export default Signup