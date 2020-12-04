import React, { useState, useEffect } from "react";
import ReactTable from '../../ReactTable';
import UserService from "../../Auth/services/user.service"

const columns = [
    { id: 'tripName', label: 'Nazwa' },
    { id: 'startTrip', label: 'Początek' },
    { id: 'endTrip', label: 'Koniec' },
    { id: 'city', label: 'Miejsce' },
    { id: '', label: 'Data dodania' },
];
const siteName = 'PODRÓŻE'
const url = 'trip'
const id_name = 'idTrip'

const ListTrip = () => {
    const [content, setContent] = useState([]);
    useEffect(() => {
        UserService.getTrips().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setContent(_content);

            }
        );
    },
        []);
    return (
        <ReactTable siteName={siteName} columns={columns} rows={content} url={url} id_name={id_name} />
    );
};

export default ListTrip;
