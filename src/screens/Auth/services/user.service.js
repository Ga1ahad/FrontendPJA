import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:59131/api/";

const getTrips = () => {
    return axios.get(API_URL + "trip", { headers: authHeader() });
};
const postTrips = (values) => {
    console.log(authHeader())
    console.log(values)
    return axios.post(API_URL + "trip", values, { headers: authHeader() })
};

export default {
    getTrips,
    postTrips
};
