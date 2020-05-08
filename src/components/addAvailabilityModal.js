import React, { Component } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'


class AddAvailabilityModal extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                  Add Availability
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Position</Form.Label>
                        <Form.Control as="select">
                        <option>Doctor</option>
                        <option>Assistant</option>
                        <option>Hygienest</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
              </div>
        
              
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>

        )
    }
}

export default AddAvailabilityModal