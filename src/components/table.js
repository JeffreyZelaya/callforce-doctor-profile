import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

const FullTable =(props)=> {   
    // const [availabilityTable, setAvailabilityTable] = useState([
    //     {time:'9 AM', Doctor: '', Assistant: '', Hygienist: ''},
    //     {time:'10 AM', Doctor: '', Assistant: '', Hygienist: ''},
    //     {time:'11 AM', Doctor: '', Assistant: '', Hygienist: ''},
    //     {time:'12 PM', Doctor: '', Assistant: '', Hygienist: ''},
    //     {time:'1 PM' , Doctor: '', Assistant: '', Hygienist: ''},
    //     {time:'2 PM' ,Doctor: '', Assistant: '', Hygienist: ''},
    //     {time:'3 PM' ,Doctor: '', Assistant: '', Hygienist: ''},
    //     {time:'4 PM' ,Doctor: '', Assistant: '', Hygienist: ''},
    //     {time:'5 PM' ,Doctor: '', Assistant: '', Hygienist: ''},
    // ])

    // const [Doctor9, setDoctor9] = useState('')
    


    // const renderAvailabilityTable = (availabilityTable, time) => {
    //     return (
    //         <tr key={time}>
    //             <td>{availabilityTable.time}</td>
    //             <td>{availabilityTable.Doctor}</td>
    //             <td>{availabilityTable.Assistant}</td>
    //             <td>{availabilityTable.Hygienist}</td>
    //         </tr>
    //     )
    // }
    
    return (

        <Table bordered hover>

                <thead>
                    <tr>
                        <th></th>
                        <th>Doctor</th>
                        <th>Assistant</th>
                        <th>Hygienist</th>
                    </tr>
                </thead>
                
                <tbody>
                
                {/* {availabilityTable.map(renderAvailabilityTable)} */}
                    <tr>
                        <td>9:00 AM </td>
                        <td>{props.Doctor9AM}</td>
                        <td>{props.Assistant9AM}</td>
                        <td>{props.Hygienist9AM}</td>
                
                    </tr>
                
                    <tr>
                        <td>10:00 AM</td>
                        <td>{props.Doctor10AM}</td>
                        <td>{props.Assistant10AM}</td>
                        <td>{props.Hygienist10AM}</td>
                
                    </tr>
                
                    <tr>
                        <td>11:00 AM</td>
                        <td>{props.Doctor11AM}</td>
                        <td>{props.Assistant11AM}</td>
                        <td>{props.Hygienist11AM}</td>
                
                    </tr>
                
                    <tr>
                        <td>12:00 PM</td>
                        <td>{props.Doctor12PM}</td>
                        <td>{props.Assistant12PM}</td>
                        <td>{props.Hygienist12PM}</td>
                    </tr>
                
                    <tr>
                        <td>1:00 PM</td>
                        <td>{props.Doctor1PM}</td>
                        <td>{props.Assistant1PM}</td>
                        <td>{props.Hygienist1PM}</td>
                
                    </tr>
                
                    <tr>
                        <td>2:00 PM</td>
                        <td>{props.Doctor2PM}</td>
                        <td>{props.Assistant2PM}</td>
                        <td>{props.Hygienist2PM}</td>
                
                    </tr>
                
                    <tr>
                        <td>3:00 PM</td>
                        <td>{props.Doctor3PM}</td>
                        <td>{props.Assistant3PM}</td>
                        <td>{props.Hygienist3PM}</td>
                
                    </tr>
                
                    <tr>
                        <td>4:00 PM</td>
                        <td>{props.Doctor4PM}</td>
                        <td>{props.Assistant4PM}</td>
                        <td>{props.Hygienist4PM}</td>
                
                    </tr>
                
                    <tr>
                        <td>5:00 PM</td>
                        <td>{props.Doctor5PM}</td>
                        <td>{props.Assistant5PM}</td>
                        <td>{props.Hygienist5PM}</td>
                
                    </tr>
                
                </tbody>
                </Table>
    )
}

export default FullTable;
