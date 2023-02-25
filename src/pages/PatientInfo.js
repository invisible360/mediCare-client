import React, { useEffect, useState } from 'react';


const PatientInfo = () => {
    const [patientData, setPatientData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data[0].prescription);
                setPatientData(data[0])
            })
    }, [])

    return (
        <div className=''>
            <h4 className='text-center my-3 text-info'>Patient Info</h4>

            <table className="table table-bordered border-primary">
                <tr>
                    <th style={{ width: '15%' }}>Patient ID</th>
                    <td style={{ width: '3%' }}>:</td>
                    <td>{patientData.patientdID}</td>
                </tr>
                <tr>
                    <th>Patient Name</th>
                    <td>:</td>
                    <td>{patientData.patientName}</td>
                </tr>
                <tr>
                    <th>Sickness</th>
                    <td>:</td>
                    <td>{patientData.sickness}</td>
                </tr>
                <tr>
                    <th>Referenced By</th>
                    <td>:</td>
                    <td>{patientData.ReferencedDoctor} ({patientData.ReferencedDoctorID})</td>
                </tr>
            </table>


        </div>
    );
};

export default PatientInfo;