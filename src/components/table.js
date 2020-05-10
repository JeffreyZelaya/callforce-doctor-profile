import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

const FullTable =(props)=> {   
    // const [availabilityTable, setAvailabilityTable] = useState([
    //     {time:'9 AM', Doctor: '', Assistant: '', Hygienest: ''},
    //     {time:'10 AM', Doctor: '', Assistant: '', Hygienest: ''},
    //     {time:'11 AM', Doctor: '', Assistant: '', Hygienest: ''},
    //     {time:'12 PM', Doctor: '', Assistant: '', Hygienest: ''},
    //     {time:'1 PM' , Doctor: '', Assistant: '', Hygienest: ''},
    //     {time:'2 PM' ,Doctor: '', Assistant: '', Hygienest: ''},
    //     {time:'3 PM' ,Doctor: '', Assistant: '', Hygienest: ''},
    //     {time:'4 PM' ,Doctor: '', Assistant: '', Hygienest: ''},
    //     {time:'5 PM' ,Doctor: '', Assistant: '', Hygienest: ''},
    // ])

    const [Dr9, setDr9] = useState('ABX')
    const [Dr10, setDr10] = useState('')
    const [Dr11, setDr11] = useState('')
    const [Dr12, setDr12] = useState('')
    const [Dr1, setDr1] = useState('')
    const [Dr2, setDr2] = useState('')
    const [Dr3, setDr3] = useState('')
    const [Dr4, setDr4] = useState('')
    const [Dr5, setDr5] = useState('')



    // const renderAvailabilityTable = (availabilityTable, time) => {
    //     return (
    //         <tr key={time}>
    //             <td>{availabilityTable.time}</td>
    //             <td>{availabilityTable.Doctor}</td>
    //             <td>{availabilityTable.Assistant}</td>
    //             <td>{availabilityTable.Hygienest}</td>
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
                    <th>Hygienest</th>
                </tr>
            </thead>

            <tbody>
                {/* {availabilityTable.map(renderAvailabilityTable)} */}

                <tr>
                    <td>9:00 AM </td>
                    <td>{Dr9}</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td>10:00 AM</td>
                    <td>{Dr10}</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td>11:00 AM</td>
                    <td>{Dr11}</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td>12:00 PM</td>
                    <td>{Dr12}</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td>1:00 PM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td>2:00 PM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td>3:00 PM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td>4:00 PM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td>5:00 PM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

            </tbody>
        </Table>
    )
}

export default FullTable;
