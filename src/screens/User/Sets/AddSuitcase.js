import React, { useState, useEffect } from 'react';
import SuitcaseTable from '../../ReactTable';
import UserService from "../../Auth/services/user.service"
import authService from "../../Auth/services/auth.service"

const columns = [
    { id: 'tripName', label: 'Nazwa' },
    { id: 'startTrip', label: 'Początek' },
    { id: 'endTrip', label: 'Koniec' },
    { id: 'city', label: 'Miasto' },
    { id: 'country', label: 'Państwo' },
];
const siteName = 'Lista podróży';
const url = 'trip';
const id_name = 'idTrip';

const AddSuitcase = (log) => {
    const isLoggedIn = authService.isLoggedIn();
    if (!isLoggedIn) {
        log.history.push('/login');
    }
    const [content, setContent] = useState([]);
    useEffect(() => {
        UserService.getTrips().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
            },
        );
    }, []);
    //Formatting Date for Start and End of a Trip
    content.forEach((e) => {
        e.startTrip = new Date(e.startTrip).toDateString();
        e.endTrip = new Date(e.endTrip).toDateString();
    });

    return (
        <SuitcaseTable siteName={siteName} columns={columns} rows={content} url={url} id_name={id_name} />
    );
};

export default AddSuitcase;
