import React from 'react';
import { ListGroup, OverlayTrigger, Popover, Table } from 'react-bootstrap';
import '../App.css'

import { format } from 'date-fns';
import { FaHandPointRight } from "react-icons/fa";
import useAppState from '../hook/hook';
import { useQuery } from '@tanstack/react-query';
import Loading from '../shared/Loading';
import { BsArrowRightCircleFill } from "react-icons/bs";



const PrescriptionDetails = () => {
    const [historyData, setHistoryData] = useAppState([]);

    const { data: prescribedMedicines = [], isLoading, refetch } = useQuery({
        queryKey: ['patient'],
        queryFn: async () => {
            const res = await fetch(`https://medicate-server.vercel.app/patient`);
            const data = await res.json();
            return data[0].timeSlots;
        }
    })
    const date = format(new Date(), "HH:mm");
    console.log(date);

    // const timeline = ['06:00','06:30','07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00']
    const timeline = [
        {
            start: '06:00',
            interval: ["06:00", "06:01", "06:02", "06:03", "06:04", "06:05", "06:06", "06:07", "06:08", "06:09", "06:10", "06:11", "06:12", "06:13", "06:14", "06:15", "06:16", "06:17", "06:18", "06:19", "06:20", "06:21", "06:22", "06:23", "06:24", "06:25", "06:26", "06:27", "06:28", "06:29", "06:30", "06:31", "06:32", "06:33", "06:34", "06:35", "06:36", "06:37", "06:38", "06:39", "06:40", "06:41", "06:42", "06:43", "06:44", "06:45", "06:46", "06:47", "06:48", "06:49", "06:50", "06:51", "06:52", "06:53", "06:54", "06:55", "06:56", "06:57", "06:58", "06:59"],
            end: '07:00'
        },
        {
            start: '07:00',
            interval: ["07:00", "07:01", "07:02", "07:03", "07:04", "07:05", "07:06", "07:07", "07:08", "07:09", "07:10", "07:11", "07:12", "07:13", "07:14", "07:15", "07:16", "07:17", "07:18", "07:19", "07:20", "07:21", "07:22", "07:23", "07:24", "07:25", "07:26", "07:27", "07:28", "07:29", "07:30", "07:31", "07:32", "07:33", "07:34", "07:35", "07:36", "07:37", "07:38", "07:39", "07:40", "07:41", "07:42", "07:43", "07:44", "07:45", "07:46", "07:47", "07:48", "07:49", "07:50", "07:51", "07:52", "07:53", "07:54", "07:55", "07:56", "07:57", "07:58", "07:59"],
            end: '08:00'
        },
        {
            start: '08:00',
            interval: ["08:00", "08:01", "08:02", "08:03", "08:04", "08:05", "08:06", "08:07", "08:08", "08:09", "08:10", "08:11", "08:12", "08:13", "08:14", "08:15", "08:16", "08:17", "08:18", "08:19", "08:20", "08:21", "08:22", "08:23", "08:24", "08:25", "08:26", "08:27", "08:28", "08:29", "08:30", "08:31", "08:32", "08:33", "08:34", "08:35", "08:36", "08:37", "08:38", "08:39", "08:40", "08:41", "08:42", "08:43", "08:44", "08:45", "08:46", "08:47", "08:48", "08:49", "08:50", "08:51", "08:52", "08:53", "08:54", "08:55", "08:56", "08:57", "08:58", "08:59"],
            end: '09:00'
        },
        {
            start: '09:00',
            interval: ["09:00", "09:01", "09:02", "09:03", "09:04", "09:05", "09:06", "09:07", "09:08", "09:09", "09:10", "09:11", "09:12", "09:13", "09:14", "09:15", "09:16", "09:17", "09:18", "09:19", "09:20", "09:21", "09:22", "09:23", "09:24", "09:25", "09:26", "09:27", "09:28", "09:29", "09:30", "09:31", "09:32", "09:33", "09:34", "09:35", "09:36", "09:37", "09:38", "09:39", "09:40", "09:41", "09:42", "09:43", "09:44", "09:45", "09:46", "09:47", "09:48", "09:49", "09:50", "09:51", "09:52", "09:53", "09:54", "09:55", "09:56", "09:57", "09:58", "09:59"],
            end: '10:00'
        },
        {
            start: '10:00',
            interval: ["10:00", "10:01", "10:02", "10:03", "10:04", "10:05", "10:06", "10:07", "10:08", "10:09", "10:10", "10:11", "10:12", "10:13", "10:14", "10:15", "10:16", "10:17", "10:18", "10:19", "10:20", "10:21", "10:22", "10:23", "10:24", "10:25", "10:26", "10:27", "10:28", "10:29", "10:30", "10:31", "10:32", "10:33", "10:34", "10:35", "10:36", "10:37", "10:38", "10:39", "10:40", "10:41", "10:42", "10:43", "10:44", "10:45", "10:46", "10:47", "10:48", "10:49", "10:50", "10:51", "10:52", "10:53", "10:54", "10:55", "10:56", "10:57", "10:58", "10:59"],
            end: '11:00'
        },
        {
            start: "11:00",
            interval: ["11:00", "11:01", "11:02", "11:03", "11:04", "11:05", "11:06", "11:07", "11:08", "11:09", "11:10", "11:11", "11:12", "11:13", "11:14", "11:15", "11:16", "11:17", "11:18", "11:19", "11:20", "11:21", "11:22", "11:23", "11:24", "11:25", "11:26", "11:27", "11:28", "11:29", "11:30", "11:31", "11:32", "11:33", "11:34", "11:35", "11:36", "11:37", "11:38", "11:39", "11:40", "11:41", "11:42", "11:43", "11:44", "11:45", "11:46", "11:47", "11:48", "11:49", "11:50", "11:51", "11:52", "11:53", "11:54", "11:55", "11:56", "11:57", "11:58", "11:59"],
            end: "12:00"
        },
        {
            start: "12:00",
            interval: ["12:00", "12:01", "12:02", "12:03", "12:04", "12:05", "12:06", "12:07", "12:08", "12:09", "12:10", "12:11", "12:12", "12:13", "12:14", "12:15", "12:16", "12:17", "12:18", "12:19", "12:20", "12:21", "12:22", "12:23", "12:24", "12:25", "12:26", "12:27", "12:28", "12:29", "12:30", "12:31", "12:32", "12:33", "12:34", "12:35", "12:36", "12:37", "12:38", "12:39", "12:40", "12:41", "12:42", "12:43", "12:44", "12:45", "12:46", "12:47", "12:48", "12:49", "12:50", "12:51", "12:52", "12:53", "12:54", "12:55", "12:56", "12:57", "12:58", "12:59"],
            end: "13:00"
        },
        {
            start: "13:00",
            interval: ["13:00", "13:01", "13:02", "13:03", "13:04", "13:05", "13:06", "13:07", "13:08", "13:09", "13:10", "13:11", "13:12", "13:13", "13:14", "13:15", "13:16", "13:17", "13:18", "13:19", "13:20", "13:21", "13:22", "13:23", "13:24", "13:25", "13:26", "13:27", "13:28", "13:29", "13:30", "13:31", "13:32", "13:33", "13:34", "13:35", "13:36", "13:37", "13:38", "13:39", "13:40", "13:41", "13:42", "13:43", "13:44", "13:45", "13:46", "13:47", "13:48", "13:49", "13:50", "13:51", "13:52", "13:53", "13:54", "13:55", "13:56", "13:57", "13:58", "13:59"],
            end: "14:00"
        },
        {
            start: "14:00",
            interval: ["14:00", "14:01", "14:02", "14:03", "14:04", "14:05", "14:06", "14:07", "14:08", "14:09", "14:10", "14:11", "14:12", "14:13", "14:14", "14:15", "14:16", "14:17", "14:18", "14:19", "14:20", "14:21", "14:22", "14:23", "14:24", "14:25", "14:26", "14:27", "14:28", "14:29", "14:30", "14:31", "14:32", "14:33", "14:34", "14:35", "14:36", "14:37", "14:38", "14:39", "14:40", "14:41", "14:42", "14:43", "14:44", "14:45", "14:46", "14:47", "14:48", "14:49", "14:50", "14:51", "14:52", "14:53", "14:54", "14:55", "14:56", "14:57", "14:58", "14:59"],
            end: "15:00"
        },
        {
            start: "15:00",
            interval: ["15:00", "15:01", "15:02", "15:03", "15:04", "15:05", "15:06", "15:07", "15:08", "15:09", "15:10", "15:11", "15:12", "15:13", "15:14", "15:15", "15:16", "15:17", "15:18", "15:19", "15:20", "15:21", "15:22", "15:23", "15:24", "15:25", "15:26", "15:27", "15:28", "15:29", "15:30", "15:31", "15:32", "15:33", "15:34", "15:35", "15:36", "15:37", "15:38", "15:39", "15:40", "15:41", "15:42", "15:43", "15:44", "15:45", "15:46", "15:47", "15:48", "15:49", "15:50", "15:51", "15:52", "15:53", "15:54", "15:55", "15:56", "15:57", "15:58", "15:59"],
            end: "16:00"
        },
        {
            start: "16:00",
            interval: ["16:00", "16:01", "16:02", "16:03", "16:04", "16:05", "16:06", "16:07", "16:08", "16:09", "16:10", "16:11", "16:12", "16:13", "16:14", "16:15", "16:16", "16:17", "16:18", "16:19", "16:20", "16:21", "16:22", "16:23", "16:24", "16:25", "16:26", "16:27", "16:28", "16:29", "16:30", "16:31", "16:32", "16:33", "16:34", "16:35", "16:36", "16:37", "16:38", "16:39", "16:40", "16:41", "16:42", "16:43", "16:44", "16:45", "16:46", "16:47", "16:48", "16:49", "16:50", "16:51", "16:52", "16:53", "16:54", "16:55", "16:56", "16:57", "16:58", "16:59"],
            end: "17:00"
        },
        {
            start: "17:00",
            interval: ["17:00", "17:01", "17:02", "17:03", "17:04", "17:05", "17:06", "17:07", "17:08", "17:17", "17:10", "17:11", "17:12", "17:13", "17:14", "17:15", "17:16", "17:17", "17:18", "17:19", "17:20", "17:21", "17:22", "17:23", "17:24", "17:25", "17:26", "17:27", "17:28", "17:29", "17:30", "17:31", "17:32", "17:33", "17:34", "17:35", "17:36", "17:37", "17:38", "17:39", "17:40", "17:41", "17:42", "17:43", "17:44", "17:45", "17:46", "17:47", "17:48", "17:49", "17:50", "17:51", "17:52", "17:53", "17:54", "17:55", "17:56", "17:57", "17:58", "17:59"],
            end: "18:00"
        },
        {
            start: "18:00",
            interval: ["18:00", "18:01", "18:02", "18:03", "18:04", "18:05", "18:06", "18:07", "18:08", "18:09", "18:10", "18:11", "18:12", "18:13", "18:14", "18:15", "18:16", "18:17", "18:18", "18:19", "18:20", "18:21", "18:22", "18:23", "18:24", "18:25", "18:26", "18:27", "18:28", "18:29", "18:30", "18:31", "18:32", "18:33", "18:34", "18:35", "18:36", "18:37", "18:38", "18:39", "18:40", "18:41", "18:42", "18:43", "18:44", "18:45", "18:46", "18:47", "18:48", "18:49", "18:50", "18:51", "18:52", "18:53", "18:54", "18:55", "18:56", "18:57", "18:58", "18:59"],
            end: "19:00"
        },
        {
            start: "19:00",
            interval: ["19:00", "19:01", "19:02", "19:03", "19:04", "19:05", "19:06", "19:07", "19:08", "19:09", "19:10", "19:11", "19:12", "19:13", "19:14", "19:15", "19:16", "19:17", "19:18", "19:19", "19:20", "19:21", "19:22", "19:23", "19:24", "19:25", "19:26", "19:27", "19:28", "19:29", "19:30", "19:31", "19:32", "19:33", "19:34", "19:35", "19:36", "19:37", "19:38", "19:39", "19:40", "19:41", "19:42", "19:43", "19:44", "19:45", "19:46", "19:47", "19:48", "19:49", "19:50", "19:51", "19:52", "19:53", "19:54", "19:55", "19:56", "19:57", "19:58", "19:59"],
            end: "20:00"
        },
        {
            start: "20:00",
            interval: ["20:00", "20:01", "20:02", "20:03", "20:04", "20:05", "20:06", "20:07", "20:08", "20:20", "20:10", "20:11", "20:12", "20:13", "20:14", "20:15", "20:16", "20:17", "20:18", "20:19", "20:20", "20:21", "20:22", "20:23", "20:24", "20:25", "20:26", "20:27", "20:28", "20:29", "20:30", "20:31", "20:32", "20:33", "20:34", "20:35", "20:36", "20:37", "20:38", "20:39", "20:40", "20:41", "20:42", "20:43", "20:44", "20:45", "20:46", "20:47", "20:48", "20:49", "20:50", "20:51", "20:52", "20:53", "20:54", "20:55", "20:56", "20:57", "20:58", "20:59"],
            end: "21:00"
        },
        {
            start: "21:00",
            interval: ["21:00", "21:01", "21:02", "21:03", "21:04", "21:05", "21:06", "21:07", "21:08", "21:09", "21:10", "21:11", "21:12", "21:13", "21:14", "21:15", "21:16", "21:17", "21:18", "21:19", "21:20", "21:21", "21:22", "21:23", "21:24", "21:25", "21:26", "21:27", "21:28", "21:29", "21:30", "21:31", "21:32", "21:33", "21:34", "21:35", "21:36", "21:37", "21:38", "21:39", "21:40", "21:41", "21:42", "21:43", "21:44", "21:45", "21:46", "21:47", "21:48", "21:49", "21:50", "21:51", "21:52", "21:53", "21:54", "21:55", "21:56", "21:57", "21:58", "21:59"],
            end: "22:00"
        },
        {
            start: "22:00",
            interval: ["22:00", "22:01", "22:02", "22:03", "22:04", "22:05", "22:06", "22:07", "22:08", "22:09", "22:10", "22:11", "22:12", "22:13", "22:14", "22:15", "22:16", "22:17", "22:18", "22:19", "22:20", "22:21", "22:22", "22:23", "22:24", "22:25", "22:26", "22:27", "22:28", "22:29", "22:30", "22:31", "22:32", "22:33", "22:34", "22:35", "22:36", "22:37", "22:38", "22:39", "22:40", "22:41", "22:42", "22:43", "22:44", "22:45", "22:46", "22:47", "22:48", "22:49", "22:50", "22:51", "22:52", "22:53", "22:54", "22:55", "22:56", "22:57", "22:58", "22:59"],
            end: "23:00"
        },
        {
            start: "23:00",
            interval: ["23:00", "23:01", "23:02", "23:03", "23:04", "23:05", "23:06", "23:07", "23:08", "23:09", "23:10", "23:11", "23:12", "23:13", "23:14", "23:15", "23:16", "23:17", "23:18", "23:19", "23:20", "23:21", "23:22", "23:23", "23:24", "23:25", "23:26", "23:27", "23:28", "23:29", "23:30", "23:31", "23:32", "23:33", "23:34", "23:35", "23:36", "23:37", "23:38", "23:39", "23:40", "23:41", "23:42", "23:43", "23:44", "23:45", "23:46", "23:47", "23:48", "23:49", "23:50", "23:51", "23:52", "23:53", "23:54", "23:55", "23:56", "23:57", "23:58", "23:59"],
            end: "24:00"
        }
    ]

    const handleHistory = (slot, med) => {

        const history = {
            patientID: slot.patientdID,
            slot: slot.timeSlot,
            medicine: med.medicineName,
            taken: 0,
            servedDetails: []
        }

        const updatingDoseTaken = () => {


            const updatedHistory = {
                patientID: slot.patientdID,
                slot: slot.timeSlot,
                medicine: med.medicineName,
                nurseName: "Miss X",
                nurseID: "N#00004",
                timestamp: format(new Date(), "MMM dd, yyy, HH:mm:ss"),
                doses: med.doses,
            }

            fetch('https://medicate-server.vercel.app/dosesUpdate', {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updatedHistory)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        fetch(`https://medicate-server.vercel.app/takenUpdate`, {
                            method: "PUT",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(updatedHistory)
                        })
                            .then(res => res.json())
                            .then(data => {
                                // console.log(data);
                                refetch();
                                if (data.acknowledged) {
                                    //send final history data for display
                                    fetch('https://medicate-server.vercel.app/histories')
                                        .then(res => res.json())
                                        .then(data => {
                                            const dataSort = data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                                            setHistoryData(dataSort);

                                        })

                                }



                            })


                    }

                })




        }




        fetch('https://medicate-server.vercel.app/histories')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.length > 0) {

                    const matchFound = data.find(medicine => medicine.patientID === slot.patientdID && medicine.slot === slot.timeSlot && medicine.medicine === med.medicineName);
                    // console.log(matchFound);
                    if (matchFound) {
                        if (matchFound.taken > 0) {
                            updatingDoseTaken();

                        }
                    }
                    else {
                        fetch('https://medicate-server.vercel.app/histories', {
                            method: 'POST',
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(history)
                        })
                            .then(res => res.json())
                            .then(data => {
                                // console.log(data);

                                if (data.acknowledged) {
                                    updatingDoseTaken();
                                }
                            })
                    }

                }
                else {
                    fetch('https://medicate-server.vercel.app/histories', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(history)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);

                            if (data.acknowledged) {
                                updatingDoseTaken();
                            }
                        })
                }
            })

    }

    return (
        <div>
            <h4 className='text-center mt-4 text-info'>Prescription</h4>
            {
                isLoading ?
                    <Loading />
                    :
                    <Table size='lg' borderless >
                        <thead>
                            <tr className="">
                                <th className="">
                                    <span className="ms-4">
                                        Timeline
                                    </span>
                                </th>
                                <th className="d-flex justify-content-between">
                                    <span className='ms-5'>Slot</span>
                                    <span className='ms-4'>Medicine</span>
                                    <span className='me-4'>Doses</span>
                                </th>
                                {/* <th className='col-md-9' colSpan='3'>
                                    <div className="col-md-2">Slot</div>
                                    <div className="col-md-8">Medicine</div>
                                    <div className="col-md-2">Doses</div>
                                </th> */}

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='col-md-3'>
                                    {
                                        timeline.map((e, i) =>
                                            <p key={i} className="mb-0"><BsArrowRightCircleFill className={`text-primary fs-4 ${e.interval.includes(date) ? 'd-inline' : 'd-none'}`} /><span className={`ms-2 ${e.interval.includes(date) ? 'text-primary fw-bold' : ''}`}>{e.start}-{e.end}</span></p>)
                                    }

                                </td>
                                <td className='col-md-9'>
                                    {
                                        prescribedMedicines.map((slot, Si) =>
                                            <tr key={Si} className='text-center row g-0'>


                                                <td colSpan='3' className='d-flex justify-content-center align-items-center'>
                                                    <div className="card w-100">
                                                        <div className="row g-0">
                                                            <div className="col-md-3 bg-primary text-white d-flex justify-content-center align-items-center fw-bold">
                                                                <div>
                                                                    {slot.timeSlot}:00
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9 card-body">


                                                                <ol className="list-group list-group-numbered">
                                                                    {
                                                                        slot.medicines.map((m, Mi) =>

                                                                            <OverlayTrigger
                                                                                key={Mi}
                                                                                trigger={['hover', 'focus']}
                                                                                placement='right'
                                                                                overlay={
                                                                                    <Popover id={`popover-positioned-right`}>
                                                                                        <Popover.Header as="h3">{`Details Info`}</Popover.Header>
                                                                                        <Popover.Body>
                                                                                            <strong>Prescribed By:</strong> {m.prescribedBy} ({m.prescribedByDoctorID})
                                                                                            <br />
                                                                                            <ListGroup className='mt-2'>

                                                                                                <ListGroup.Item><FaHandPointRight className='text-danger' />
                                                                                                    <span className='ms-2'>
                                                                                                        {m.days > 0 && `${m.days} Days`}
                                                                                                        {m.continue && `Continue...`}
                                                                                                    </span>
                                                                                                </ListGroup.Item>

                                                                                                <ListGroup.Item><FaHandPointRight className='text-danger' />
                                                                                                    <span className='ms-2'>
                                                                                                        {
                                                                                                            m.medicineType === 'Tablet' && "Internal Use Only"
                                                                                                        }

                                                                                                        {
                                                                                                            m.medicineType === 'Ointment' && 'External Use Only'
                                                                                                        }
                                                                                                        {
                                                                                                            m.medicineType === 'Eye-Drop' && 'External Use Only'
                                                                                                        }

                                                                                                    </span>
                                                                                                </ListGroup.Item>

                                                                                                <ListGroup.Item><FaHandPointRight className='text-danger' />
                                                                                                    <span className='ms-2'>

                                                                                                        {
                                                                                                            m.medicineType === 'Tablet' ?
                                                                                                                m.afterMeal ?
                                                                                                                    'After Meal'
                                                                                                                    :
                                                                                                                    'Before Meal'
                                                                                                                :
                                                                                                                ""
                                                                                                        }

                                                                                                        {
                                                                                                            m.externalUse && `Uses: ${m.usesOn}`
                                                                                                        }
                                                                                                    </span>
                                                                                                </ListGroup.Item>

                                                                                            </ListGroup>
                                                                                        </Popover.Body>
                                                                                    </Popover>
                                                                                }
                                                                            >
                                                                                <li type="button" onClick={() => {
                                                                                    handleHistory(slot, m);

                                                                                }} className={`list-group-item list-group-item-action d-flex justify-content-between align-items-start ${m.doses === 0 && 'disabled'}`}

                                                                                >
                                                                                    <div className="ms-2 me-auto">

                                                                                        <div className="fw-bold">

                                                                                            <span className={`${m.doses === 0 && 'text-danger text-decoration-line-through'}`}>{m.medicineName}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <span className={`${m.doses === 0 && 'text-danger bg-warning'} badge fs-6 bg-primary rounded-pill`}>{m.doses}</span>
                                                                                </li>
                                                                            </OverlayTrigger>
                                                                        )
                                                                    }
                                                                </ol>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>)

                                    }

                                </td>
                            </tr>



                        </tbody>
                    </Table>
            }

        </div >
    );
};

export default PrescriptionDetails;