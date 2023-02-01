import React from 'react'

const doctors = () => {

    const doctor =
        [
            { img: "../assets/img/doctors/doctors-1.jpg", name: "Atha Smith", des: "Chief Medical Officer", par: "Duis sagittis rutrum neque, quis tincidunt arcu pretium ac." },
            { img: "../assets/img/doctors/doctors-2.jpg", name: "John White", des: "Anesthesiologist", par: "Aenean ac turpis ante. Mauris velit sapien." },
            { img: "../assets/img/doctors/doctors-3.jpg", name: "Umika Loha", des: "Cardiology", par: "Curabitur luctus eleifend odio. Phasellus placerat mi." },
            { img: "../assets/img/doctors/doctors-4.jpg", name: "Daimy Smith", des: "Neurosurgeon", par: "Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus." }
        ]
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
                    {doctor.map((i) => {
                        return (
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="member d-flex align-items-start">
                                        <div className="pic"><img src={i.img} className="img-doctor" alt /></div>
                                        <div className="member-info">
                                            <h4>{i.name}</h4>
                                            <span>{i.des}</span>
                                            <p>{i.par}</p>
                                            <div className="social">
                                                <a href><i className="ri-twitter-fill" /></a>
                                                <a href><i className="ri-facebook-fill" /></a>
                                                <a href><i className="ri-instagram-fill" /></a>
                                                <a href><i className="ri-linkedin-box-fill" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default doctors