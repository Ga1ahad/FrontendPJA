import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:59131/api/";
const TRIP_URL = "trip";
const CLOTHING_URL = 'clothing'
const TAG_URL = 'tag'
const TYPE_URL = 'clothingtype'
const SUITCASE_URL = 'suitcase';

const getTrips = () => {
    return axios.get(API_URL + TRIP_URL, { headers: authHeader() });
};
const postTrips = (values) => {
    return axios.post(API_URL + TRIP_URL, values, { headers: authHeader() })
};

const remove = (id, URL) => {
    axios.delete(API_URL + URL + '/' + id, { headers: authHeader() }).then(() => {
        window.location.reload();
    })
}

const updateTrip = (id, data) => {
    return axios.put(API_URL + TRIP_URL + '/' + id, data, { headers: authHeader() })
}

const getTrip = (id) => {
    return axios.get(API_URL + TRIP_URL + '/' + id, { headers: authHeader() })
}

const getClothes = () => {
    return axios.get(API_URL + CLOTHING_URL, { headers: authHeader() });
};

const postClothes = (values) => {
    return axios.post(API_URL + CLOTHING_URL, values, { headers: authHeader() })
};

const updateClothing = (id, data) => {
    return axios.put(API_URL + CLOTHING_URL + '/' + id, data, { headers: authHeader() })
}

const getClothing = (id) => {
    return axios.get(API_URL + CLOTHING_URL + '/' + id, { headers: authHeader() })
}

const getTags = () => {
    return axios.get(API_URL + TAG_URL);
};

const getTypes = () => {
    return axios.get(API_URL + TYPE_URL);
};
const getSuitcase = (id) => {
    return axios.get(API_URL + SUITCASE_URL + '/' + id, { headers: authHeader() });
};
const postSuitcase = (id) => {
    return axios.post(API_URL + SUITCASE_URL + '/' + id, { headers: authHeader() }).then(() => {
        window.location.reload();
    })
}

export default {
    getTypes,
    getTrips,
    postTrips,
    remove,
    updateTrip,
    getTrip,
    getClothes,
    postClothes,
    updateClothing,
    getClothing,
    getTags,
    postSuitcase,
    getSuitcase,
};
