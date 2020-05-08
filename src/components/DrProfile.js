import React, {Component, useState} from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'

import FullTable from './table';
import AddAvailabilityModal from "./AddAvailabilityModal"



const DrProfile = () => {
        const [addModalShow, setAddModalShow] = useState(false)
        // this.state = {addModalShow: false}
        // const onModalClose = () => this.setState({addModalShow:false})
        const onModalClose = () => setAddModalShow(false)
        
        return(
            <div>
                <h1>CALLFORCE Dr. Profile</h1>
                <ButtonToolbar>
                    <Button
                    onClick={() => setAddModalShow(true)}
                    // onClick={() => this.setState({addModalShow:true})}
                    >ADD AVAILABILITY
                    </Button>

                    <AddAvailabilityModal 
                    show={addModalShow}
                    onHide = {onModalClose}
                    />
                </ButtonToolbar>
                <FullTable />

            </div>
        )
    }



export default DrProfile