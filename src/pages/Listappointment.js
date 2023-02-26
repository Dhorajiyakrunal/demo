import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';


const Listappointment = () => {

    // const [Ptdata, setPtdata] = React.useState([])

    const data = useSelector((data) => data.AppoinmentReducer.Appdata)

    console.log('data',data);

    // React.useEffect(() => {
    //     setPtdata(JSON.parse(localStorage.getItem('PatientData')) || [])
    // }, [])



    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((i) => {
                        return (
                            <tr>
                                <td>{i.name}</td>
                                <td>{i.email}</td>
                                <td>{i.phone}</td>
                                <td>{i.message}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default Listappointment
