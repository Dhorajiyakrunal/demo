import React from 'react'

function login() {
  return (
    <div>
        <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Login page</h2>
                    </div>
                    <form    className="php-email-form">
                        <div className="row">
                            <div className=" mx-auto col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="row">
                        <div className=" mx-auto col-md-4 form-group mt-3 mt-md-0">
                                <input type="password" className="form-control" name="password" id="password" placeholder="Your Password" data-rule="password" data-msg="Please enter a valid password" />
                                <div className="validate" />
                            </div>
                        </div>
                       
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your Login has been successfully.</div>
                        </div>
                        <div className="text-center"><button type="submit" >Login</button></div>
                    </form>
                </div>
            </section>
    </div>
  )
}

export default login