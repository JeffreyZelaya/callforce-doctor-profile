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
                Add Avaialability
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                  Add form fields for Avaialability
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