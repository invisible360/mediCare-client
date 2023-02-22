import React from 'react';
import { Table } from 'react-bootstrap';

const PresciptionDetails = () => {
    return (
        <div className='mt-5'>
            <h4 className='text-center my-3 text-success'>Prescription Details</h4>
            <Table striped>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Patient ID</th>
                        <th>Patient Name</th>
                        <th>Medicine</th>
                        <th>Prescribed By</th>
                        <th>How Many Times</th>
                        <th>How Long</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    
                </tbody>
            </Table>
            
        </div>
    );
};

export default PresciptionDetails;