import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const formikForm = () => {
  // Validation schema
  const validationSchema = Yup.object({
    username: Yup.string().required
      .required('Username is required'),
    email: Yup.string().required
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  })

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        alert('Registration Successful 🎉')
        console.log(values)
        resetForm()
      }}
    >
      <Form>
        <h2>Registration Form (Formik + Field)</h2>

        <div>
          <label htmlFor="username">Username</label> <br />
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component="p" style={{ color: 'red' }} />
        </div>

        <div>
          <label htmlFor="email">Email</label> <br />
          <Field type="email" name="email" placeholder="Enter email" />
          <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
        </div>

        <div>
          <label htmlFor="password">Password</label> <br />
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="p" style={{ color: 'red' }} />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  )
}

export default FormikForm
