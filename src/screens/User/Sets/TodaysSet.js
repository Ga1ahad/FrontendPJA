import React from 'react';
import ReactTable from '../../ReactTable';
import authService from "../../Auth/services/auth.service"

const rows = [
    createData(
        'https://source.unsplash.com/Wr0TpKqf26s',
        'Czarny T-shirt',
        'koszulki',
        'koszulka, czarna, lato, lekka',
        '27.07.2020',
    ),
    createData(
        'https://source.unsplash.com/I3C5ctmT8Z0',
        'Niebieska koszula',
        'koszule',
        'koszule, niebieska, lato, formalna, elegancja',
        '27.07.2020',
    ),
];

const columns = [
    { id: 'address', label: '' },
    { id: 'name', label: 'Nazwa' },
    { id: 'type', label: 'Typ' },
    { id: 'tags', label: 'Tagi' },
    { id: 'add_date', label: 'Data dodania' },
];

function createData(address, name, type, tags, add_date) {
    return { address, name, type, tags, add_date };
}
const siteName = 'Zestaw na dziś'

const TodaysSet = (log) => {
    const isLoggedIn = authService.isLoggedIn();
    if (!isLoggedIn) {
        log.history.push("/login");
    }
    return (
        <ReactTable siteName={siteName} columns={columns} rows={rows} />
    );
};

export default TodaysSet;
