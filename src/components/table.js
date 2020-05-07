import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

const FullTable = (props) => {            
    return (

        <Table striped bordered hover>

            <thead>
                <th></th>
                <th>Doctor</th>
                <th>Assistant</th>
                <th>Hygienest</th>
            </thead>

            <tbody>
                <tr>
                <td>9:00 AM </td>
                </tr>

                <tr>
                <td>10:00 AM</td>
                </tr>

                <tr>
                <td>11:00 AM</td>
                </tr>

                <tr>
                <td>12:00 PM</td>
                </tr>

                <tr>
                <td>1:00 PM</td>
                </tr>

                <tr>
                <td>2:00 PM</td>
                </tr>

                <tr>
                <td>3:00 PM</td>
                </tr>

                <tr>
                <td>4:00 PM</td>
                </tr>

                <tr>
                <td>5:00 PM</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default FullTable;
