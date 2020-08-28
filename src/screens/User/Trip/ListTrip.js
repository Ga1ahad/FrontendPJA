import React from 'react'
import ReactTable from '../../ReactTable';


const rows = [
    createData('Pierwsza podróż', '20.7.2020', '26.7.2020', 'Kraków, Polska', '12.7.2020 12:20'),
    createData('Druga podróż', '18.9.2020', '26.9.2020', 'Dublin, Irlandia', '8.9.2020 14:26'),

];
const columns = [
    { id: 'name', label: 'Nazwa' },
    { id: 'start', label: 'Początek' },
    { id: 'end', label: 'Koniec' },
    { id: 'city_country', label: 'Miejsce' },
    { id: 'add_date', label: 'Data dodania' },
];
function createData(name, start, end, city_country, add_date) {
    return { name, start, end, city_country, add_date };
}
const siteName = 'PODRÓŻE'

const ListTrip = () => {
    return (
        <ReactTable siteName={siteName} columns={columns} rows={rows} />
    )
}

export default ListTrip;
