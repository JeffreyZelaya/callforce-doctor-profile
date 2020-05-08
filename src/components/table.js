import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

const FullTable =()=> {   
    const availabilityTable = [
        {time:'9 AM', Doctor: '', Assistant: '', Hygienest: ''},
        {time:'10 AM', Doctor: '', Assistant: '', Hygienest: ''},
        {time:'11 AM', Doctor: '', Assistant: '', Hygienest: ''},
        {time:'12 PM', Doctor: '', Assistant: '', Hygienest: ''},
        {time:'1 PM' , Doctor: '', Assistant: '', Hygienest: ''},
        {time:'2 PM' ,Doctor: '', Assistant: '', Hygienest: ''},
        {time:'3 PM' ,Doctor: '', Assistant: '', Hygienest: ''},
        {time:'4 PM' ,Doctor: '', Assistant: '', Hygienest: ''},
        {time:'5 PM' ,Doctor: '', Assistant: '', Hygienest: ''},
    ]

    const renderAvailabilityTable = (availabilityTable, index) => {
        return (
            <tr key={index}>
                <td>{availabilityTable.time}</td>
                <td>{availabilityTable.Doctor}</td>
                <td>{availabilityTable.Assistant}</td>
                <td>{availabilityTable.Hygienest}</td>
            </tr>
        )
    }
    
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
                {availabilityTable.map(renderAvailabilityTable)}
            </tbody>
        </Table>
    )


}

export default FullTable;
