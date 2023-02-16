import React from 'react'
import { Field, Formik, Form, ErrorMessage, touched } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom'
import '../App.css'

function Login() {

    const Navigate = useNavigate()


    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required().max(8).min(6),
    });

    return (

        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Login page</h2>
                    </div>
                    <Formik 
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => {
                            localStorage.setItem('admin', JSON.stringify(values))
                            alert(JSON.stringify(values, null, 2));
                            Navigate("/")
                        }}
                        validationSchema={schema}
                    >
                        {({ touched, errors }) => (
                            <Form className="php-email-form">
                                <div className="row">
                                    <div className=" mx-auto col-md-4 form-group mt-3 mt-md-0">
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            className={`form-control border  ${touched.email && errors.email ? 'error' : ''}`}
                                        />
                                        {""}
                                        <ErrorMessage name="email" component="div" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className=" mx-auto col-md-4 form-group mt-3 mt-md-0">
                                        <Field
                                            type="password"
                                            className={`form-control border  ${touched.password && errors.password ? 'error' : ''}`}
                                            name="password"
                                            placeholder="Your Password"
                                        />
                                        {""}
                                        <ErrorMessage name="password" component="div" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your Login has been successfully.</div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" >Login</button>
                                    <h2 className='mt-3'>Don't have account? <Link to="/register">Create Account</Link></h2>
                                </div>
                            </Form>
                        )}
                    </Formik >
                </div>
            </section >
        </div >
    )
}

export default Login