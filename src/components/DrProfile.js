import React, {Component} from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'

import FullTable from './table';
import AddAvailabilityModal from "./addAvailabilityModal"



class DrProfile extends Component{
    constructor(props) {
        super(props)
        this.state = {addModalShow: false}
    }
    render() {
        const onModalClose = () => this.setState({addModalShow:false})
        return(
            <div>
                <h1>CALLFORCE DR. Profile</h1>
                <ButtonToolbar>
                    <Button
                    onClick={() => this.setState({addModalShow:true})}
                    >ADD AVAILABILITY
                    </Button>

                    <AddAvailabilityModal 
                    show={this.state.addModalShow}
                    onHide = {onModalClose}
                    />
                </ButtonToolbar>
                <FullTable />

            </div>
        )
    }
}

export default DrProfile