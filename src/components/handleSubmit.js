// import React from 'react'
// import {setDoctor9AM, setDoctor10AM} from "./DrProfile"


// const handleSubmit=(event, props)=>{
//     const [Doctor9AM, setDoctor9AM] = useState('')
//     const [Doctor10AM, setDoctor10AM] = useState('')
//     const [Doctor11AM, setDoctor11AM] = useState('')
//     const [Doctor12PM, setDoctor12PM] = useState('')
//     const [Doctor1PM, setDoctor1PM] = useState('')
//     const [Doctor2PM, setDoctor2PM] = useState('')
//     const [Doctor3PM, setDoctor3PM] = useState('')
//     const [Doctor4PM, setDoctor4PM] = useState('')
//     const [Doctor5PM, setDoctor5PM] = useState('')

//     const [Assistant9AM, setAssistant9AM] = useState('')
//     const [Assistant10AM, setAssistant10AM] = useState('')
//     const [Assistant11AM, setAssistant11AM] = useState('')
//     const [Assistant12PM, setAssistant12PM] = useState('')
//     const [Assistant1PM, setAssistant1PM] = useState('')
//     const [Assistant2PM, setAssistant2PM] = useState('')
//     const [Assistant3PM, setAssistant3PM] = useState('')
//     const [Assistant4PM, setAssistant4PM] = useState('')
//     const [Assistant5PM, setAssistant5PM] = useState('')

//     const [Hygienist9AM, setHygienist9AM] = useState('')
//     const [Hygienist10AM, setHygienist10AM] = useState('')
//     const [Hygienist11AM, setHygienist11AM] = useState('')
//     const [Hygienist12PM, setHygienist12PM] = useState('')
//     const [Hygienist1PM, setHygienist1PM] = useState('')
//     const [Hygienist2PM, setHygienist2PM] = useState('')
//     const [Hygienist3PM, setHygienist3PM] = useState('')
//     const [Hygienist4PM, setHygienist4PM] = useState('')
//     const [Hygienist5PM, setHygienist5PM] = useState('')


//     event.preventDefault()
//     alert([
//         event.target.Position.value, 
//         event.target.StartTime.value, 
//         event.target.EndTime.value,
//     ])
//     // Doctors if statements
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor9AM"    
//     ){
//         props.setDoctor9AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor10AM"    
//     ){
//         props.setDoctor10AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor11AM"    
//     ){
//         props.setDoctor11AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor12PM"    
//     ){
//         props.setDoctor12PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor12PM"    
//     ){
//         props.setDoctor12PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor1PM"    
//     ){
//        props.setDoctor1PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor2PM"    
//     ){
//        props.setDoctor2PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor3PM"    
//     ){
//        props.setDoctor3PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor4PM"    
//     ){
//        props.setDoctor4PM("Available")
//     }

//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setDoctor5PM"    
//     ){
//        props.setDoctor5PM("Available")
//     }

//     // Assistants if statements
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant9AM"    
//     ){
//        props. setAssistant9AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant10AM"    
//     ){
//         props.setAssistant10AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant11AM"    
//     ){
//         props.setAssistant11AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant12PM"    
//     ){
//         props.setAssistant12PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant12PM"    
//     ){
//         props.setAssistant12PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant1PM"    
//     ){
//        props. setAssistant1PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant2PM"    
//     ){
//        props. setAssistant2PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant3PM"    
//     ){
//        props. setAssistant3PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant4PM"    
//     ){
//        props. setAssistant4PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setAssistant5PM"    
//     ){
//        props. setAssistant5PM("Available")
//     }


//     // Hygienist if statements
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist9AM"    
//     ){
//        props. setHygienist9AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist10AM"    
//     ){
//         props.setHygienist10AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist11AM"    
//     ){
//         props.setHygienist11AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist12PM"    
//     ){
//         props.setHygienist12PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist12PM"    
//     ){
//         props.setHygienist12PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist1PM"    
//     ){
//        props. setHygienist1PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist2PM"    
//     ){
//        props. setHygienist2PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist3PM"    
//     ){
//        props. setHygienist3PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist4PM"    
//     ){
//        props. setHygienist4PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.StartTime.value}`=="setHygienist5PM"    
//     ){
//        props. setHygienist5PM("Available")
//     }


    
//     // Doctors if statements
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor9AM"    
//     ){
//     props.    setDoctor9AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor10AM"    
//     ){
//      props.   setDoctor10AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor11AM"    
//     ){
//      props.   setDoctor11AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor12PM"    
//     ){
//      props.   setDoctor12PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor12PM"    
//     ){
//      props.   setDoctor12PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor1PM"    
//     ){
//     props.    setDoctor1PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor2PM"    
//     ){
//     props.    setDoctor2PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor3PM"    
//     ){
//     props.    setDoctor3PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor4PM"    
//     ){
//     props.    setDoctor4PM("Available")
//     }

//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setDoctor5PM"    
//     ){
//     props.    setDoctor5PM("Available")
//     }

//     // Assistants if statements
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant9AM"    
//     ){
//        props. setAssistant9AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant10AM"    
//     ){
//         props.setAssistant10AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant11AM"    
//     ){
//         props.setAssistant11AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant12PM"    
//     ){
//         props.setAssistant12PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant12PM"    
//     ){
//         props.setAssistant12PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant1PM"    
//     ){
//        props. setAssistant1PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant2PM"    
//     ){
//        props. setAssistant2PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant3PM"    
//     ){
//        props. setAssistant3PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant4PM"    
//     ){
//        props. setAssistant4PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setAssistant5PM"    
//     ){
//        props. setAssistant5PM("Available")
//     }


//     // Hygienist if statements
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist9AM"    
//     ){
//        props. setHygienist9AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist10AM"    
//     ){
//         props.setHygienist10AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist11AM"    
//     ){
//         props.setHygienist11AM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist12PM"    
//     ){
//         props.setHygienist12PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist12PM"    
//     ){
//         props.setHygienist12PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist1PM"    
//     ){
//        props. setHygienist1PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist2PM"    
//     ){
//        props. setHygienist2PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist3PM"    
//     ){
//        props. setHygienist3PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist4PM"    
//     ){
//        props. setHygienist4PM("Available")
//     }
    
    
//     if (
//         `set${event.target.Position.value}${event.target.EndTime.value}`=="setHygienist5PM"    
//     ){
//        props. setHygienist5PM("Available")
//     }
    
    
// }

// export default handleSubmit