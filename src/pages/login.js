import React from 'react'
import { Field, Formik, Form,ErrorMessage,touched  } from 'formik';
import * as yup from 'yup';
import '../App.css'



function login() {

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
    });
    return (

        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Login page</h2>
                    </div>
                    <Formik initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => {
                            alert(JSON.stringify(values, null, 2));
                        }}
                        validationSchema={schema}
                    >
                        {({touched,errors}) => (
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
                                        className="form-control" 
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
                                <div className="text-center"><button type="submit" >Login</button></div>
                            </Form>
                        )}
                    </Formik >
                </div>
            </section>
        </div>
    )
}

export default login