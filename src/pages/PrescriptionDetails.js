import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, ListGroup, Offcanvas, Table } from 'react-bootstrap';

import { format } from 'date-fns';
import Clock from 'react-live-clock';
import { FaHandPointRight } from "react-icons/fa";
import { ImCheckmark, ImCross } from "react-icons/im";


const PrescriptionDetails = ({ handleHistory, prescribedMedicines, historyData }) => {
    // console.log(dates);
    // console.log(historyData);

    //state for offCanvas
    const [medicineData, setMedicineData] = useState({});
    const [total, setTotal] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [offcanvasMed, setOfcanvasMed] = useState([]);

    const toggleShow = (medicine) => {
        setShow((s) => !s);
        const allSameMedicine = historyData.filter(m => m.medicine === medicine.medicineName)
        setOfcanvasMed(allSameMedicine);
        // const dateWise = allSameMedicine.filter (d=> d.date)


        // console.log(medicine);
        setMedicineData(medicine);
        var total = 0;
        for (var i = 0; i < medicine?.slots.length; i++) {
            total = total + medicine?.slots[i].howMany;
        }
        const totalTimes = total * medicine.days;
        // console.log(totalTimes);
        setTotal(totalTimes);

    };


    return (
        <div>
            <h4 className='text-center mt-4 text-info'>Prescription</h4>

            <h6 className='text-end my-3'><span className='text-primary'>{format(new Date(), "PP")}, <Clock format="HH:mm:ss" interval={1000} ticking={true} /></span></h6>

            <Table size='sm'>
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Medicine Type</th>
                        <th>Medicine</th>
                        <th>Prescribed By (ID)</th>
                        <th>Instruction</th>
                        <th>Slots & How Often</th>
                        <th>Details Report</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        prescribedMedicines.map((e, i) =>
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{e.medicineType}</td>
                                <td>{e.medicineName} <br /> {e.quantity}</td>
                                <td>{e.prescribedBy} <br /> ({e.prescribedByDoctorID})</td>
                                <td>
                                    <ListGroup>
                                        <ListGroup.Item><FaHandPointRight className='text-danger' />
                                            <span className='ms-2'>
                                                {e.usageTime} Times in a Day
                                            </span>
                                        </ListGroup.Item>

                                        <ListGroup.Item><FaHandPointRight className='text-danger' />
                                            <span className='ms-2'>
                                                {e.days > 0 && `${e.days} Days`}
                                                {e.continue && `Continue...`}
                                            </span>
                                        </ListGroup.Item>

                                        <ListGroup.Item><FaHandPointRight className='text-danger' />
                                            <span className='ms-2'>
                                                {
                                                    e.medicineType === 'Tablet' && "Internal Use Only"
                                                }

                                                {
                                                    e.medicineType === 'Ointment' && 'External Use Only'
                                                }
                                                {
                                                    e.medicineType === 'Eye-Drop' && 'External Use Only'
                                                }

                                            </span>
                                        </ListGroup.Item>

                                        <ListGroup.Item><FaHandPointRight className='text-danger' />
                                            <span className='ms-2'>

                                                {
                                                    e.medicineType === 'Tablet' ?
                                                        e.afterMeal ?
                                                            'After Meal'
                                                            :
                                                            'Before Meal'
                                                        :
                                                        ""
                                                }

                                                {
                                                    e.externalUse && `Uses: ${e.externalUsingPlace}`
                                                }
                                            </span>
                                        </ListGroup.Item>

                                    </ListGroup>
                                </td>
                                <td>

                                    <ButtonGroup vertical size="sm">
                                        {
                                            e.slots.map((slot, idx) =>
                                                // <Button variant={`outline-info`} onClick={() => handleHistory(e, slot)} key={idx} className='text-black' disabled={ false}>

                                                // <Button variant={`outline-info`} onClick={() => handleHistory(e, slot)} key={idx} className='text-black' disabled={historyData.find(h => h.medicine === e.medicineName && h.date === 'Feb 26, 2023' && h.slot.shiftStart === slot.shiftStart && h.slot.shiftEnd === slot.shiftEnd)
                                                // }>

                                                <Button variant={`outline-info`} onClick={() => handleHistory(e, slot)} key={idx} className='text-black' disabled={historyData.find(h => h.medicine === e.medicineName && h.date === format(new Date(), "PP") && h.slot.shiftStart === slot.shiftStart && h.slot.shiftEnd === slot.shiftEnd)
                                                }>

                                                    {/* 'Feb 26, 2023' */}
                                                    {/* format(new Date(), "PP") */}


                                                    <div className='d-flex justify-content-between' >
                                                        <div className='text-start' >{slot.shiftStart}:00-{slot.shiftEnd}:00
                                                        </div>

                                                        <div className='text-start ms-1'>
                                                            (<span>x{slot.howMany}</span>
                                                            <span className='ms-1'>
                                                                {e.medicineType === 'Tablet' ? slot.howMany > 1 ? 'tabs' : 'tab' : ''}
                                                                {e.medicineType === 'Ointment' ? slot.howMany > 1 ? 'fingertips' : 'fingertip' : ''}
                                                                {e.medicineType === 'Eye-Drop' ? slot.howMany > 1 ? 'drops' : 'drop' : ''}

                                                            </span>
                                                            )
                                                        </div>

                                                    </div>
                                                </Button>)
                                        }
                                    </ButtonGroup>
                                </td>

                                <td>
                                    <Button size='sm' onClick={() => toggleShow(e)} className='btn-primary'>View Detials</Button>
                                </td>
                            </tr>)
                    }

                </tbody>
            </Table>



            <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true} className='w-50'  >

                {/* <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Report Log</Offcanvas.Title>
                </Offcanvas.Header> */}

                <Offcanvas.Body>
                    <h3 className='text-center text-success'>{medicineData.medicineType}. {medicineData.medicineName}</h3>
                    <Table striped bordered hover size="sm" className='my-5'>
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Date</th>
                                {
                                    medicineData?.slots?.map((slot, idx) =>
                                        <th className={`text-center `} key={idx}>{slot.shiftStart}:00-{slot.shiftEnd}:00</th>
                                    )
                                }


                            </tr>
                        </thead>
                        <tbody>
                            {
                                offcanvasMed.map((m, i) =>
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{m.date}</td>
                                        {
                                            medicineData.slots?.map((slot, idx) =>
                                                <td key={idx} className='text-center'>
                                                    {/* <span className={`text-success`}><ImCheckmark /></span> */}
                                                    <span className={`text-danger`}><ImCross /></span>
                                                </td>
                                            )
                                        }

                                    </tr>)
                            }
                            


                </tbody>
            </Table>
            <div className='d-flex justify-content-center align-items-center'>
                <table className="table table-bordered border-primary w-50">

                    <tr>
                        <th style={{ width: '10%' }}>Total</th>
                        <td style={{ width: '10%' }}>:</td>
                        <td style={{ width: '10%' }}>
                            {medicineData.continue ? 'Continue...'
                                :
                                `${total} 
                                        ${medicineData.medicineType === 'Tablet' ? 'tab.' : ""}
                                        ${medicineData.medicineType === 'Ointment' ? 'fingertip' : ""}
                                        ${medicineData.medicineType === 'Eye-Drop' ? 'drop(s)' : ""}

                                    `}
                        </td>
                    </tr>
                    <tr>
                        <th>Given</th>
                        <td>:</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Remaining</th>
                        <td>:</td>
                        <td>   {medicineData.continue ? 'N/A' : 0}</td>
                    </tr>

                </table>
            </div>



        </Offcanvas.Body>
            </Offcanvas >
        </div >
    );
};

export default PrescriptionDetails;