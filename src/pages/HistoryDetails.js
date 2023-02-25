import React from 'react';
import { Table } from 'react-bootstrap';

const HistoryDetails = ({ historyData }) => {
    // historyData.sort((a, b) => a.timestamp - b.timestamp);
    historyData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    // console.log(historyData);
    return (
        <div className='overflow-auto position-sticky top-0' style={{height: '50rem' }}>
            <h4 className='text-center text-success'>History {historyData.length}</h4>
            <Table striped>
                <thead>
                    <tr>
                        <th>Medicine</th>
                        <th>Served By (ID)</th>
                        <th>Timestamp</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        historyData.map((h, i) =>
                            <tr key={i}>
                                <td>{h.medicine}</td>
                                <td>{h.nurseName} <br />({h.nurseID})</td>
                                <td>{h.timestamp}</td>

                            </tr>)
                    }


                </tbody>
            </Table>

        </div>
    );
};

export default HistoryDetails;