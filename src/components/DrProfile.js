import React, {useState} from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'
import handleSubmit from "./handleSubmit"

import './images/logo.png'

import FullTable from './table';
import AddAvailabilityModal from './AddAvailabilityModal'



const DrProfile = () => {
    const [addModalShow, setAddModalShow] = useState(false)
    const onModalClose = () => setAddModalShow(false)

    const [Doctor9AM, setDoctor9AM] = useState('')
    const [Doctor10AM, setDoctor10AM] = useState('')
    const [Doctor11AM, setDoctor11AM] = useState('')
    const [Doctor12PM, setDoctor12PM] = useState('')
    const [Doctor1PM, setDoctor1PM] = useState('')
    const [Doctor2PM, setDoctor2PM] = useState('')
    const [Doctor3PM, setDoctor3PM] = useState('')
    const [Doctor4PM, setDoctor4PM] = useState('')
    const [Doctor5PM, setDoctor5PM] = useState('')

    const [Assistant9AM, setAssistant9AM] = useState('')
    const [Assistant10AM, setAssistant10AM] = useState('')
    const [Assistant11AM, setAssistant11AM] = useState('')
    const [Assistant12PM, setAssistant12PM] = useState('')
    const [Assistant1PM, setAssistant1PM] = useState('')
    const [Assistant2PM, setAssistant2PM] = useState('')
    const [Assistant3PM, setAssistant3PM] = useState('')
    const [Assistant4PM, setAssistant4PM] = useState('')
    const [Assistant5PM, setAssistant5PM] = useState('')

    const [Hygienist9AM, setHygienist9AM] = useState('')
    const [Hygienist10AM, setHygienist10AM] = useState('')
    const [Hygienist11AM, setHygienist11AM] = useState('')
    const [Hygienist12PM, setHygienist12PM] = useState('')
    const [Hygienist1PM, setHygienist1PM] = useState('')
    const [Hygienist2PM, setHygienist2PM] = useState('')
    const [Hygienist3PM, setHygienist3PM] = useState('')
    const [Hygienist4PM, setHygienist4PM] = useState('')
    const [Hygienist5PM, setHygienist5PM] = useState('')

        const handleSubmit=(event)=>{
            event.preventDefault()
            alert( 
                `Availability was added successfully for ${event.target.Position.value} from ${event.target.StartTime.value} to ${event.target.EndTime.value}`
            )
            // Doctors if statements
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor9AM"    
            ){
                setDoctor9AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor10AM"    
            ){
                setDoctor10AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor11AM"    
            ){
                setDoctor11AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor12PM"    
            ){
                setDoctor12PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor12PM"    
            ){
                setDoctor12PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor1PM"    
            ){
                setDoctor1PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor2PM"    
            ){
                setDoctor2PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor3PM"    
            ){
                setDoctor3PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor4PM"    
            ){
                setDoctor4PM("Available")
            }

            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor5PM"    
            ){
                setDoctor5PM("Available")
            }

            // Assistants if statements
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant9AM"    
            ){
                setAssistant9AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant10AM"    
            ){
                setAssistant10AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant11AM"    
            ){
                setAssistant11AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant12PM"    
            ){
                setAssistant12PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant12PM"    
            ){
                setAssistant12PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant1PM"    
            ){
                setAssistant1PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant2PM"    
            ){
                setAssistant2PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant3PM"    
            ){
                setAssistant3PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant4PM"    
            ){
                setAssistant4PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant5PM"    
            ){
                setAssistant5PM("Available")
            }


            // Hygienist if statements
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist9AM"    
            ){
                setHygienist9AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist10AM"    
            ){
                setHygienist10AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist11AM"    
            ){
                setHygienist11AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist12PM"    
            ){
                setHygienist12PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist12PM"    
            ){
                setHygienist12PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist1PM"    
            ){
                setHygienist1PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist2PM"    
            ){
                setHygienist2PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist3PM"    
            ){
                setHygienist3PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist4PM"    
            ){
                setHygienist4PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist5PM"    
            ){
                setHygienist5PM("Available")
            }


            
            // Doctors if statements
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor9AM"    
            ){
                setDoctor9AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor10AM"    
            ){
                setDoctor10AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor11AM"    
            ){
                setDoctor11AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor12PM"    
            ){
                setDoctor12PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor12PM"    
            ){
                setDoctor12PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor1PM"    
            ){
                setDoctor1PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor2PM"    
            ){
                setDoctor2PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor3PM"    
            ){
                setDoctor3PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor4PM"    
            ){
                setDoctor4PM("Available")
            }

            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor5PM"    
            ){
                setDoctor5PM("Available")
            }

            // Assistants if statements
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant9AM"    
            ){
                setAssistant9AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant10AM"    
            ){
                setAssistant10AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant11AM"    
            ){
                setAssistant11AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant12PM"    
            ){
                setAssistant12PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant12PM"    
            ){
                setAssistant12PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant1PM"    
            ){
                setAssistant1PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant2PM"    
            ){
                setAssistant2PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant3PM"    
            ){
                setAssistant3PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant4PM"    
            ){
                setAssistant4PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant5PM"    
            ){
                setAssistant5PM("Available")
            }


            // Hygienist if statements
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist9AM"    
            ){
                setHygienist9AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist10AM"    
            ){
                setHygienist10AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist11AM"    
            ){
                setHygienist11AM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist12PM"    
            ){
                setHygienist12PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist12PM"    
            ){
                setHygienist12PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist1PM"    
            ){
                setHygienist1PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist2PM"    
            ){
                setHygienist2PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist3PM"    
            ){
                setHygienist3PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist4PM"    
            ){
                setHygienist4PM("Available")
            }
            
            
            if (
                `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist5PM"    
            ){
                setHygienist5PM("Available")
            }
            
            
        }

        
        return(
            <div>
                <h1 className="logo" />

                <h1>CALLFORCE Dr. Profile</h1>
                <ButtonToolbar>
                    <Button
                    onClick={() => setAddModalShow(true)}
                    >ADD AVAILABILITY
                    </Button>

                    <AddAvailabilityModal 
                    show={addModalShow}
                    onHide = {onModalClose}
                    handleSubmit={handleSubmit} 
                    />
                </ButtonToolbar>
                <FullTable 
                    Doctor9AM={Doctor9AM} 
                    Doctor10AM={Doctor10AM} 
                    Doctor11AM={Doctor11AM} 
                    Doctor12PM={Doctor12PM} 
                    Doctor1PM={Doctor1PM} 
                    Doctor2PM={Doctor2PM} 
                    Doctor3PM={Doctor3PM} 
                    Doctor4PM={Doctor4PM} 
                    Doctor5PM={Doctor5PM}

                    Assistant9AM={Assistant9AM} 
                    Assistant10AM={Assistant10AM} 
                    Assistant11AM={Assistant11AM} 
                    Assistant12PM={Assistant12PM} 
                    Assistant1PM={Assistant1PM} 
                    Assistant2PM={Assistant2PM} 
                    Assistant3PM={Assistant3PM} 
                    Assistant4PM={Assistant4PM} 
                    Assistant5PM={Assistant5PM} 

                    Hygienist9AM={Hygienist9AM} 
                    Hygienist10AM={Hygienist10AM} 
                    Hygienist11AM={Hygienist11AM} 
                    Hygienist12PM={Hygienist12PM} 
                    Hygienist1PM={Hygienist1PM} 
                    Hygienist2PM={Hygienist2PM} 
                    Hygienist3PM={Hygienist3PM} 
                    Hygienist4PM={Hygienist4PM} 
                    Hygienist5PM={Hygienist5PM} 

                    
                    // setDoctor9AM={setDoctor9AM} 
                    // setDoctor10AM={setDoctor10AM} 
                    // setDoctor11AM={setDoctor11AM} 
                    // setDoctor12PM={setDoctor12PM} 
                    // setDoctor1PM={setDoctor1PM} 
                    // setDoctor2PM={setDoctor2PM} 
                    // setDoctor3PM={setDoctor3PM} 
                    // setDoctor4PM={setDoctor4PM} 
                    // setDoctor5PM={setDoctor5PM}

                    // setAssistant9AM={setAssistant9AM} 
                    // setAssistant10AM={setAssistant10AM} 
                    // setAssistant11AM={setAssistant11AM} 
                    // setAssistant12PM={setAssistant12PM} 
                    // setAssistant1PM={setAssistant1PM} 
                    // setAssistant2PM={setAssistant2PM} 
                    // setAssistant3PM={setAssistant3PM} 
                    // setAssistant4PM={setAssistant4PM} 
                    // setAssistant5PM={setAssistant5PM} 

                    // setHygienist9AM={setHygienist9AM} 
                    // setHygienist10AM={setHygienist10AM} 
                    // setHygienist11AM={setHygienist11AM} 
                    // setHygienist12PM={setHygienist12PM} 
                    // setHygienist1PM={setHygienist1PM} 
                    // setHygienist2PM={setHygienist2PM} 
                    // setHygienist3PM={setHygienist3PM} 
                    // setHygienist4PM={setHygienist4PM} 
                    // setHygienist5PM={setHygienist5PM}
                    
                />

            </div>
        )
    }

export default DrProfile