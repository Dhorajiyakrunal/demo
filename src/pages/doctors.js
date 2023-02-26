import React from 'react'
import Data from './Data.json'

const Doctors = () => {

    const data = Data




    return (
        <div>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>Doctors</h2>
                        <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                    </div>
                    <div className="row d-flex">
                        {data.map((i) => {
                            return (
                                <div className="col-6 ">
                                    <div className="member ">
                                        {/* <div className="pic"> */}
                                            <img src={i.thumbnail} width='100px' height='100px' />
                                        {/* </div> */}
                                        <div className="member-info">
                                            <h4>{i.title}</h4>
                                            <span>{i.description}</span>
                                            <p>{i.category}</p>
                                            <div className="social">
                                                <a href><i className="ri-twitter-fill" /></a>
                                                <a href><i className="ri-facebook-fill" /></a>
                                                <a href><i className="ri-instagram-fill" /></a>
                                                <a href><i className="ri-linkedin-box-fill" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Doctors