import React from 'react';
import Loading from '../shared/Loading';


const PatientInfo = ({ patientInfo, isLoading }) => {

    return (
        <div className=''>
            <h4 className='text-center my-3 text-info'>Patient Info</h4>

            {
                isLoading ?
                    <Loading />
                    :
                    <table className="table">
                        <tbody>
                            <tr>
                                <th style={{ width: '25%' }}>Patient ID</th>
                                <td style={{ width: '3%' }}>:</td>
                                <td>{patientInfo.patientdID}</td>
                            </tr>
                            <tr>
                                <th>Patient Name</th>
                                <td>:</td>
                                <td>{patientInfo.patientName}</td>
                            </tr>
                            <tr>
                                <th>Sickness</th>
                                <td>:</td>
                                <td>{patientInfo.sickness}</td>
                            </tr>
                            <tr>
                                <th>Referenced By</th>
                                <td>:</td>
                                <td>{patientInfo.ReferencedDoctor} ({patientInfo.ReferencedDoctorID})</td>
                            </tr>
                        </tbody>
                    </table>
            }




        </div>
    );
};

export default PatientInfo;