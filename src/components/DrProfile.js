import React, {useState} from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'

import FullTable from './table';
import AddAvailabilityModal from "./AddAvailabilityModal"



const DrProfile = () => {
        const [addModalShow, setAddModalShow] = useState(false)
        const onModalClose = () => setAddModalShow(false)
        
        return(
            <div>
                <h1>CALLFORCE Dr. Profile</h1>
                <ButtonToolbar>
                    <Button
                    onClick={() => setAddModalShow(true)}
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