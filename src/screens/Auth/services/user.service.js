import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:59131/api/";
const TRIP_URL = "trip";

const getTrips = () => {
    return axios.get(API_URL + TRIP_URL, { headers: authHeader() });
};
const postTrips = (values) => {
    // console.log(authHeader())
    // console.log(values)
    return axios.post(API_URL + TRIP_URL, values, { headers: authHeader() })
};

const removeTrip = (id) => {
    axios.delete(API_URL + TRIP_URL + '/' + id, { headers: authHeader() }).then(() => {
        window.location.reload();
    })
}

const updateTrip = (id, data) => {
    return axios.put(API_URL + TRIP_URL + '/' + id, data, { headers: authHeader() })
}

const getTrip = (id) => {
    return axios.get(API_URL + TRIP_URL + '/' + id, { headers: authHeader() })
}

export default {
    getTrips,
    postTrips,
    removeTrip,
    updateTrip,
    getTrip
};
