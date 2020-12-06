import axios from "axios";

const API_URL = "http://localhost:59131/api/user/";

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

export default {
    login,
    getCurrentUser,
    register,
    logout
};
