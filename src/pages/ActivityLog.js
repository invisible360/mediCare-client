import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import useAppState from '../hook/hook';
import Loading from '../shared/Loading';
import HistoryDetails from './HistoryDetails';
import PatientInfo from './PatientInfo';
import PrescriptionDetails from './PrescriptionDetails';

const ActivityLog = () => {

    // const [prescribedMedicines, setPrescribedMedicines] = useState([]);
    // const [patientInfo, setPatientInfo] = useState([]);
    // const [count, setCount] = useState(0);
    // const [prescribedMedicines, setPrescribedMedicines] = useState([]);


    // const [historyData, setHistoryData] = useState([]);

    // const [checkSlot, setCheckSlot] = useState([]);

    const { data: patientInfo = [], isLoading, refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(`https://medicate-server.vercel.app/patient`);
            const data = await res.json();
            // console.log(data[0]);
            // setPrescribedMedicines(data[0].timeSlots);
            return data[0];
        }
    });

    

    // useEffect(() => {
    //     fetch('data2.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             // setPrescribedMedicines(data[0]?.timeSlots);
    //             setPatientInfo(data[0]);
    //         })
    // }, [])

    



    return (
        <div className='container' >
            <h1 className='text-center my-3 font-bold fw-bold'>Nursing Log</h1>


            <div className="row">
                <div className="col-md-6">
                    <PatientInfo patientInfo={patientInfo} isLoading={isLoading} />
                    <PrescriptionDetails />
                </div>
                <div className="col-md-6 position-relative">
                    <HistoryDetails />
                </div>
            </div>


        </div>
    );
};

export default ActivityLog;