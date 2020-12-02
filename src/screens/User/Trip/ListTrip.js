import React from 'react'
import ReactTable from '../../ReactTable';
import axios from 'axios';

const rows = [
    createData('Pierwsza podróż', '20.7.2020', '26.7.2020', 'Kraków, Polska', '12.7.2020 12:20'),
    createData('Druga podróż', '18.9.2020', '26.9.2020', 'Dublin, Irlandia', '8.9.2020 14:26'),
];

const api = axios.create({
    baseURL: 'http://localhost:59131/api/Trip'
})

const columns = [
    { id: 'tripName', label: 'Nazwa' },
    { id: 'startTrip', label: 'Początek' },
    { id: 'endTrip', label: 'Koniec' },
    { id: 'city', label: 'Miejsce' },
    { id: '', label: 'Data dodania' },
];
function createData(name, start, end, city_country, add_date) {
    return { name, start, end, city_country, add_date };
}
const siteName = 'TRIP'

export default class FetchSuitcase extends React.Component {

    state = {
        trips: []
    }

    constructor() {
        super();
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({ trips: res.data })
        })
    }

    render() {
        return (
            <ReactTable siteName={siteName} columns={columns} rows={this.state.trips} />
        )
    }

}
