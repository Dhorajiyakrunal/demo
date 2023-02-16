import React from 'react'
import { Form, Formik, Field, ErrorMessage, touched } from 'formik';
import * as yup from 'yup';
import '../App.css'

const DoctorsForm = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  let schema = yup.object().shape({
    mname: yup.string('Name must be Filled in Alphabet').required('Medicin Name Is Required'),
    quantity: yup.number().positive('Quantity must be a positive number').required('Quantity is required'),
    price: yup.number().positive('Price must be a positive number').required('Price is required'),
    phone: yup.string().required("required").matches(phoneRegExp, 'Phone number is not valid').min(10, "too short").max(10, "too long"),
    address: yup.string().min(10, 'Address must be at least 10 characters long').required('Address Is Required'),
    pincode: yup.string().required('Pincode is required').matches(/^[0-9]{6}$/, 'Pincode must be 6 digits'),

  });

  return (
    <div>
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            <h2>Doctors Application</h2>
          </div>
          <Formik initialValues={{ mname: '', quantity: '', price: '', phone: '', address: '', pincode: '', }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2))
            }}
            validationSchema={schema}
          >
            {({ errors, touched, values }) => (
              <Form className="php-email-form">
                <div className="row">
                  <div className="col-md-4 form-group">
                    <Field type="text"
                      name="mname"
                      className={`form-control  ${touched.mname && errors.mname ? 'error' : ''}`}
                      placeholder="Enter Medicin Name"
                    />
                    {""}
                    <ErrorMessage name="mname" component="div" />
                  </div>
                  <div className="col-md-4 form-group mt-3 mt-md-0">
                    <Field type="number"
                      className={`form-control  ${touched.quantity && errors.quantity ? 'error' : ''}`}
                      name="quantity"
                      placeholder="Enter quantity"
                    />
                    {""}
                    <ErrorMessage name="quantity" component="div" />
                  </div>
                  <div className="col-md-4 form-group mt-3 mt-md-0">
                    <Field type="number"
                      className={`form-control  ${touched.price && errors.price ? 'error' : ''}`}
                      name="price"
                      placeholder="Enter Price"
                    />
                    {""}
                    <ErrorMessage name="price" component="div" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 form-group mt-3 mt-md-0">
                    <Field type="tel"
                      className={`form-control  ${touched.phone && errors.phone ? 'error' : ''}`}
                      name="phone"
                      placeholder="Your Phone"
                    />
                    {""}
                    <ErrorMessage name="phone" component="div" />
                  </div>
                  <div className="col-md-4 form-group">
                    <Field type="textarea"
                      className={`form-control  ${touched.address && errors.address ? 'error' : ''}`}
                      name="address"
                      placeholder="Your address"
                    />
                    {""}
                    <ErrorMessage name="address" component="div" />
                  </div>
                  <div className="col-md-4 form-group">
                    <Field type="text"
                      name="pincode"
                      className={`form-control  ${touched.pincode && errors.pincode ? 'error' : ''}`}
                      placeholder="Enter Your Pincode"
                    />
                    {""}
                    <ErrorMessage name="pincode" component="div" />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Order</button></div>
              </Form>
            )}
          </Formik>
        </div>
      </section>

    </div>
  )
}

export default DoctorsForm
