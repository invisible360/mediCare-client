import React from 'react';
import { Table } from 'react-bootstrap';

const HistoryDetails = () => {
    return (
        <div className='mt-5'>
            <h4 className='text-center my-3 text-success'>History</h4>
            <Table striped>
                <thead>
                    <tr>
                        <th>Medicine</th>
                        <th>Served By</th>
                        <th>Served Timestamp</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        
                    </tr>
                    
                </tbody>
            </Table>
            
        </div>
    );
};

export default HistoryDetails;