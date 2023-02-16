import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



const Addmedicin = ({display1,setdisplay1}) => {
    const handleClose = () => setdisplay1(false);

    const onSubmithandler = (event) => {

        event.preventDefault()
        const medicin = {
            id : new Date().getTime(),
            name: event.target.name.value,
            quantity: event.target.quantity.value,
            price: event.target.price.value,
        }        
        if(localStorage.getItem('Medicinedata')){
            const data = JSON.parse(localStorage.getItem('Medicinedata'))
            data.push(medicin)
            localStorage.setItem('Medicinedata',JSON.stringify(data))
        }
        else  {
            const Medicinearray = JSON.stringify([medicin])
            localStorage.setItem('Medicinedata',Medicinearray)

        }
        setdisplay1(false)
    }


    return (
        <Modal show={display1} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={onSubmithandler} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Medicine Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter Medicine Name"
                        autoFocus
                        name='name'
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Entre Medicine Quantity</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Medicine Quantity"
                        name='quantity'
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Entre Medicine Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Medicine Price"
                        name='price'
                    />
                </Form.Group>
        
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <button type="submit" className='btn btn-primary'>
                    SUBMIT
                </button>
            </Modal.Footer>
            </Form>
        </Modal.Body>
    </Modal>
    )
}

export default Addmedicin