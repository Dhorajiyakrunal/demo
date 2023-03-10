import React from 'react'
import { useParams } from 'react-router-dom'
import Data from './Data.json'
import '../Doctor.css'
import '../App.css'

const Doctormain = () => {



    const { id } = useParams()
    const [Doctor, setDoctor] = React.useState()

    React.useEffect(() => {
        setDoctor(Data?.find((i) => i.id == id))
    }, [])

    console.log("DOCTOR", Doctor);

    return (
        <div>
            {/* <div className="main">
                <div className="a text-center">
                    <h2>{Doctor?.title}</h2>
                    <form className="myForm" method="get" >
                        <h2></h2>
                        <br />
                        <h3><br />{Doctor?.title}</h3>
                        <p>
                            <label>First Name:
                                <input type="text" name="first_name" placeholder="Enter first name" required />
                            </label>
                            <label>Middle Name:
                                <input type="text" name="middle_name" placeholder="Enter middle name" />
                            </label>
                            <label>Last Name:
                                <input type="text" name="Last_name" placeholder="Enter last name" required />
                            </label>
                        </p>
                        <p>
                            <label>Date of Birth:
                                <input type="datetime-local" name="doc_dob" required />
                            </label>
                        </p><fieldset>
                            <legend>Gender:</legend>
                            <p><label className="choice"> <input type="radio" name="gender" required defaultValue="male" />Male</label></p>
                            <p><label className="choice"> <input type="radio" name="gender" required defaultValue="female" />Female</label></p>
                            <p><label className="choice"> <input type="radio" name="gender" required defaultValue="others" />Others</label></p>
                        </fieldset>
                        <label>Date of appointment:
                            <input type="datetime-local" name="appointment_time" required />
                        </label>
                        <p />
                        <br />


                    </form>
                </div>
            </div> */}
            <div className="member text-center" >
                <div className="pic">
                    <img src={Doctor?.images} className="img-doctor" alt />
                </div>
                <h1 className='d-block'>{Doctor?.title}</h1>
                <div className="member-info">
                    <h4 className='fs-6 mt-3'>{Doctor?.age}</h4>
                    <span>{Doctor?.des}</span>
                    <p className='paregraph'>{Doctor?.description}</p>
                    <h4 >{Doctor?.awards}</h4>
                    <h4 className='fs-5 mb-5'>{Doctor?.experience}</h4>

                </div>
            </div>
        </div>

    )
}

export default Doctormain
