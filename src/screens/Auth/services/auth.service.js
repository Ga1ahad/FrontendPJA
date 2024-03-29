import axios from "axios";
import jwt_decode from "jwt-decode";

const API_URL = "https://clothesyapi20210827135835.azurewebsites.net/api/user/";

const register = (Email, Password) => {
    return axios
        .post(API_URL + "register", {
            Email,
            Password,
        })
};

const login = (Email, Password) => {
    return axios
        .post(API_URL + "login", {
            Email,
            Password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const isLoggedIn = () => {
    if (localStorage.getItem('user')) {
        let token = localStorage.getItem("user");
        let decodedToken = jwt_decode(token);
        let currentDate = new Date();
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
};

export default {
    isLoggedIn,
    login,
    getCurrentUser,
    register,
    logout
};
