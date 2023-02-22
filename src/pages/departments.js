import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Addmedicin from '../pages/Addmedicin';
import Editmedicine from './Editmedicine';

const Departments = () => {

    const [display, setdisplay] = useState(false)
    const [MedicineList, setMedicineList] = useState([])
    const [EditModal, setEditModal] = useState(false)
    const [SelectedData, setSelectedData] = useState([])
    const [Sorting, setSorting] = useState([])

    const onClickHandler = () => {
        setdisplay(true)
    }

    useEffect(() => {
        setMedicineList(JSON.parse(localStorage.getItem('Medicinedata')) || [])
    }, [display, EditModal,Sorting])

    const onclikdelete = (event) => {
        // console.log(event);
        const filter = MedicineList.filter((i) => {
            return i.id !== event
        })
        setMedicineList(filter);
        localStorage.setItem('Medicinedata', JSON.stringify(filter));
    }

    const onclickEdit = (data) => {
        console.info('edite', data)
        setSelectedData(data)
        setEditModal(true)

    }

    const OnClicksearch = (event) =>{
        const data = JSON.parse(localStorage.getItem('Medicinedata'))
        const filter = data.filter((i) => i.name === event.target.value )
        setMedicineList(filter)
    }

    const onSorting =()=>{
        const sort = MedicineList.sort((a,b)=>a.price - b.price)
        localStorage.setItem('Medicinedata', JSON.stringify(sort));
        setSorting(sort)
    }

    const onquantity =()=>{
        const sort = MedicineList.sort((a,b)=>a.quantity - b.quantity)
        localStorage.setItem('Medicinedata', JSON.stringify(sort));
        setSorting(sort)
    }

    const onName =()=>{
        const sort = MedicineList.sort((a,b)=>a.name.localeCompare(b.name))
        localStorage.setItem('Medicinedata', JSON.stringify(sort));
        setSorting(sort)
    }

    return (
        <div>
            <Addmedicin display1={display} setdisplay1={setdisplay} />
            <Editmedicine display={EditModal} setdisplay={setEditModal} SelectedData={SelectedData} />
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>Department</h2>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button onClick={onClickHandler} className="my-5" variant="primary">Add Medicine</Button>{''}
                    </div>
                    <input onClick={OnClicksearch} type='text'/> 
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th onClick={onName}>Name</th>
                                <th onClick={onSorting}>Price</th>
                                <th onClick={onquantity}>Quantity</th>
                                <th>Buttons</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MedicineList?.map((i) => {
                                return (
                                    <tr>
                                        <td>{i.id}</td>
                                        <td>{i.name}</td>
                                        <td>{i.price}</td>
                                        <td>{i.quantity}</td>
                                        <td>
                                            <button className='btn btn-success me-3' onClick={() => onclickEdit(i)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => onclikdelete(i.id)}>Delete</button>                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </section>
        </div>
    )
}
export default Departments;
