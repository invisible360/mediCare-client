import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import useAppState from '../hook/hook';
import Loading from '../shared/Loading';

const HistoryDetails = () => {
    const [historyData, setHistoryData] = useAppState([]);

    const { data: histories = [], isLoading, refetch } = useQuery({
        queryKey: ['histories', historyData],
        queryFn: async () => {
            const res = await fetch(`https://medicate-server.vercel.app/histories`);
            const data = await res.json();
            return data;
        }
    });


    return (
        <div className='overflow-auto position-sticky top-0' style={{ height: '50rem' }}>

            <h4 className='text-center text-success'>History</h4>

            {
                isLoading ?
                    <Loading></Loading>
                    :

                    <Table>
                        <thead>
                            <tr>
                                <div className="d-flex justify-content-between align-items-start">
                                    <th className='ms-4'>Medicine</th>
                                    <th className='me-5'>Taken</th>
                                </div>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                histories.map((h, i) =>
                                    <tr key={i}>

                                        <Accordion>
                                            <Accordion.Item eventKey={i}>

                                                <Accordion.Header>
                                                    <button type="button" className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                                                        <div className="ms-2 me-auto">

                                                            <div className="fw-bold">

                                                                <td>{h.medicine}</td>
                                                            </div>
                                                        </div>
                                                        <span className="badge fs-6 bg-primary rounded-pill me-5"><td>{h.taken}</td></span>
                                                    </button>
                                                </Accordion.Header>

                                                <Accordion.Body>
                                                    <Table striped bordered hover>
                                                        <thead>
                                                            <tr>
                                                                <th>Sl</th>
                                                                <th>Nurse ID</th>
                                                                <th>Nurse Name</th>
                                                                <th>TimeStamp</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                h.servedDetails.map((m, i) =>
                                                                    <tr key={i}>
                                                                        <td>{i + 1}</td>
                                                                        <td>{m.nurseID}</td>
                                                                        <td>{m.nurseName}</td>
                                                                        <td>{m.timeStamp}</td>
                                                                    </tr>
                                                                )
                                                            }


                                                        </tbody>
                                                    </Table>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </tr>)
                            }



                        </tbody>
                    </Table>
            }


        </div>
    );
};

export default HistoryDetails;

