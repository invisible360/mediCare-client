import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import HistoryDetails from './HistoryDetails';
import PatientInfo from './PatientInfo';
import PrescriptionDetails from './PrescriptionDetails';

const ActivityLog = () => {

    const [prescribedMedicines, setPrescribedMedicines] = useState([]);
    // const [dates, setDates] = useState([]);


    const [historyData, setHistoryData] = useState([]);
    // const [checkSlot, setCheckSlot] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data[0].prescription);
                setPrescribedMedicines(data[0].prescription);
            })
    }, [])

    const handleHistory = (his, slot) => {
        // console.log(his);
        // const date = format(new Date(), "PPpp")
        // const date = format(new Date(), "MMM dd, yyy, HH:mm:ss")
        // console.log(date);
        // console.log(slot);

        const history = {
            patientID: his.patientdID,
            medicine: his.medicineName,
            timestamp: format(new Date(), "MMM dd, yyy, HH:mm:ss"),
            date: format(new Date(), "PP"),
            // date: "Feb 26, 2023",
            nurseName: "Miss Alexa",
            nurseID: "N#00004",
            slot: slot,
            // count: 1
        }

        // console.log(prescribedMedicines);
        // console.log(history);
        // setCheckSlot(history);
        setHistoryData([...historyData, history]);
        // setDates([...historyData, history].map(date => date.date))

    }



    return (
        <div className='container-fluid' >
            <h1 className='text-center my-3 font-bold fw-bold'>Nursing Log</h1>


            <div className="row">
                <div className="col-md-9" style={{ width: '70%' }}>
                    <PatientInfo />
                    <PrescriptionDetails handleHistory={handleHistory} prescribedMedicines={prescribedMedicines} historyData={historyData} />
                </div>
                <div className="col-md-3 position-relative" style={{ width: '30%' }}>
                    <HistoryDetails historyData={historyData} />
                </div>
            </div>


        </div>
    );
};

export default ActivityLog;