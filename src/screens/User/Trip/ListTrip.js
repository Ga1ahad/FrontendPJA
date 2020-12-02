import React from 'react'
import ReactTable from '../../ReactTable';
import axios from 'axios';

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

const siteName = 'PODRÓŻE'
const url = 'trip'
const id_name = 'idTrip'

export default class FetchSuitcase extends React.Component {

    state = {
        trips: []
    }

    constructor() {
        super();
        api.get('/').then(res => {
            this.setState({ trips: res.data })
        })
    }

    render() {
        return (
            <ReactTable siteName={siteName} columns={columns} rows={this.state.trips} url={url} id_name={id_name} />
        )
    }

}
