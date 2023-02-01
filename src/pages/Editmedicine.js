import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const Editmedicine = ({display, setdisplay, SelectedData}) => {

    const handleClose = () => setdisplay(false);

    const onSubmithandler = (event) => {

        event.preventDefault()
        const medicin = {
            id: SelectedData.id,
            name: event.target.name.value,
            quantity: event.target.quantity.value,
            price: event.target.price.value,
        }
        console.info("data", medicin    )

        const data = JSON.parse(localStorage.getItem('Medicinedata'))
    
        const update = data.map((i)=>{
            if(i.id == SelectedData.id ){
                i = medicin;
            }
            return i;
        })

        localStorage.setItem('Medicinedata',JSON.stringify(update))
        setdisplay(false)
    }
    

    return (
        <Modal show={display} onHide={handleClose}>
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
                            defaultValue={SelectedData.name}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Entre Medicine Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Medicine Quantity"
                            autoFocus
                            name='quantity'
                            defaultValue={SelectedData.quantity}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Entre Medicine Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Medicine Price"
                            autoFocus
                            name='price'
                            defaultValue={SelectedData.price}
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

export default Editmedicine