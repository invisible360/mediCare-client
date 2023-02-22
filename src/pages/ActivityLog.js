import React from 'react';
import HistoryDetails from './HistoryDetails';
import PresciptionDetails from './PresciptionDetails';

const ActivityLog = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-3 font-bold fw-bold'>Actvity Log</h1>
            {/* <div className='flex'>
                <div className='w-75'>

                </div>
                <div className='w-25'>

                </div>
            </div> */}

            <div className="row g-5">
                <div className="col-sm-6 col-md-8">
                    <PresciptionDetails />
                </div>
                <div className="col-6 col-md-4">
                    <HistoryDetails />
                </div>
            </div>
        </div>
    );
};

export default ActivityLog;