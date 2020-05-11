import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'



const AddAvailabilityModal =(props) => {
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
                    <Form onSubmit={props.handleSubmit}>

                        <Form.Group controlId="Position">
                            <Form.Label>Select a Column</Form.Label>
                            <Form.Control as="select" >
                                <option>Doctor</option>
                                <option>Assistant</option>
                                <option>Hygienist</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="StartTime">
                            <Form.Label>Select a start time</Form.Label>
                            <Form.Control as="select">
                                <option>9AM</option>
                                <option>10AM</option>
                                <option>11AM</option>
                                <option>12PM</option>
                                <option>1PM</option>
                                <option>2PM</option>
                                <option>3PM</option>
                                <option>4PM</option>
                                <option>5PM</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="EndTime">
                            <Form.Label>Select an end time</Form.Label>
                            <Form.Control as="select">
                                <option>9AM</option>
                                <option>10AM</option>
                                <option>11AM</option>
                                <option>12PM</option>
                                <option>1PM</option>
                                <option>2PM</option>
                                <option>3PM</option>
                                <option>4PM</option>
                                <option>5PM</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group >
                            <Button type="Submit">
                                Add Availability
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>

        )
    }

export default AddAvailabilityModal