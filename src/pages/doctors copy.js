import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Data from './Data.json'


const Doctors = () => {

    const navigate = useNavigate()
    // const data = Data

    const doctor =
        [
            { id: 1, img: "../assets/img/doctors/doctors-1.jpg", link: '/', name: "Atha Smith", des: "Chief Medical Officer", par: "Duis sagittis rutrum neque, quis tincidunt arcu pretium ac." },
            { id: 2, img: "../assets/img/doctors/doctors-2.jpg", link: '', name: "John White", des: "Anesthesiologist", par: "Aenean ac turpis ante. Mauris velit sapien." },
            { id: 3, img: "../assets/img/doctors/doctors-3.jpg", link: '', name: "Umika Loha", des: "Cardiology", par: "Curabitur luctus eleifend odio. Phasellus placerat mi." },
            { id: 4, img: "../assets/img/doctors/doctors-4.jpg", link: '', name: "Daimy Smith", des: "Neurosurgeon", par: "Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus." }
        ]

    const onclickRead = (data) => {
        navigate(`/maindoctors/${data}`)
    }

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
                    <div className="row">
                        {doctor.map((i, index) => {
                            return (
                                <div className="col-lg-6">
                                    {/* <Link to={i.link}> */}
                                        <div className="member d-flex align-items-start">
                                            <span className='d-none'>{i.id}</span>
                                            <div className="pic">
                                                <img src={i.img} className="img-doctor" alt />
                                            </div>
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
                                                <button onClick={()=>onclickRead(i.id)} className='mt-3 btn btn-primary'>Read More</button>
                                            </div>
                                        </div>
                                    {/* </Link> */}
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