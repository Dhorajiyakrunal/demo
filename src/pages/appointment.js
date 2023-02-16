import React from 'react'
import { Form, Formik, Field, ErrorMessage, touched } from 'formik';
import * as yup from 'yup';
import '../App.css'


const Appointment = () => {


    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    let schema = yup.object().shape({
        name: yup.string('Name must be Filled in Alphabet').required(),
        email: yup.string().email().required(),
        phone: yup.string().required("required").matches(phoneRegExp, 'Phone number is not valid').min(10, "too short").max(10, "too long"),
        date: yup.date().min(new Date('2022-01-01'), 'Date must be after 2021').max(new Date('2023-02-01'), 'Appointment Not Avilable').required('Date is required'),
        department: yup.string().required(),
        doctors: yup.string().required(),
        gender: yup.string().required(),
    });

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2 >Make an Appointment</h2>
                    </div>
                    <Formik initialValues={{ name: '', email: '', phone: '', date: '', department: '', message: '', doctors: '' }}
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
                                            name="name"
                                            className={`form-control  ${touched.name && errors.name ? 'error' : ''}`}
                                            placeholder="Your Name"
                                        />
                                        {""}
                                        <ErrorMessage name="name" component="div" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <Field type="email"
                                            className={`form-control  ${touched.email && errors.email ? 'error' : ''}`}
                                            name="email"
                                            placeholder="Your Email"
                                        />
                                        {""}
                                        <ErrorMessage name="email" component="div" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <Field type="tel"
                                            className={`form-control  ${touched.phone && errors.phone ? 'error' : ''}`}
                                            name="phone"
                                            placeholder="Your Phone"
                                        />
                                        {""}
                                        <ErrorMessage name="phone" component="div" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3">
                                        <Field type="date"
                                            name="date"
                                            className={`form-control  ${touched.date && errors.date ? 'error' : ''}`}
                                            placeholder="Appointment Date "
                                        />
                                        {""}
                                        <ErrorMessage name="date" component="div" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <Field as="select" name="department" id="department" className={`form-select ${touched.department && errors.department ? 'error' : ''}`} >
                                            <option value="">Select Department</option>
                                            <option value="Cardiology ">Cardiology </option>
                                            <option value="Dental ">Dental </option>
                                            <option value="Neurologist ">Neurologist </option>
                                        </Field>
                                        {errors.department && touched.department && <div>{errors.department}</div>}
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <Field as="select" name="doctors" id="doctors" className={`form-select ${touched.doctors && errors.doctors ? 'error' : ''}`} >
                                            <option value="">Select Doctors</option>
                                            <option value="Cardiology ">Atha Smith </option>
                                            <option value="Dental ">John White </option>
                                            <option value="Neurologist ">Umika Loha </option>
                                        </Field>
                                        {errors.department && touched.department && <div>{errors.department}</div>}
                                    </div>

                                    <div className="d-flex align-items-center col-md-4 form-group mt-3">
                                        <Field type="radio" className="me-2" value="male" name="gender" id="gender" />Male
                                        <Field type="radio" className="mx-2" value="female" name="gender" id="gender" />Female
                                    </div>
                                    {errors.gender && <div>{errors.gender}</div>}
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" />
                                    {""}
                                    <div className="validate" />
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Make an Appointment</button></div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>

        </div>
    )
}

export default Appointment