import axios from "axios";
import store from "../store/index";

let config = {
    baseURL: "http://localhost:3000",
    timeout: 60 * 1000, // Timeout
    //withCredentials: true, // Check cross-site Access-Control
};


const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        // Do something with response data

        return response;
    },
    function(error) {
        // Do something with response error
        if (error.response && error.response.status === 403 && error.response.config && !error.config._isRetryRequest) {
            store.dispatch('removeHeaders');
        }

        return Promise.reject(error);
    }
);


export default _axios;