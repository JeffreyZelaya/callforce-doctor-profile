import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

import FullTable from './table.js'



const AddAvailabilityModal =(props) => {
    
    const handleSubmit=(event)=>{
        event.preventDefault()
        alert([
            event.target.Position.value, 
            event.target.StartTime.value, 
            event.target.EndTime.value,
            
        ])
    }
        return (
            <div>

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="Title">
                    Add Availability
                </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <div className="formContainer">
                    <Form onSubmit={handleSubmit}>

                        <Form.Group controlId="Position">
                            <Form.Label>Select a Column</Form.Label>
                            <Form.Control as="select" placeholder="">
                                <option>Doctor</option>
                                <option>Assistant</option>
                                <option>Hygienest</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="StartTime">
                            <Form.Label>Select a start time</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="EndTime">
                            <Form.Label>Select an end time</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group >
                            <Button type="Submit">
                                Add Availability
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
                </Modal.Body>

                <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>

        )
    }

export default AddAvailabilityModal