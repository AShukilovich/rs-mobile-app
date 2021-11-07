import axios from 'axios';
import humps from 'humps';
import config from './config';

const instance = axios.create({
    baseURL: config.apiUrl,
    transformResponse: [
        ...axios.defaults.transformResponse,
        (data) => humps.camelizeKeys(data),
    ],
    transformRequest: [
        (data) => humps.decamelizeKeys(data),
        ...axios.defaults.transformRequest,
    ],
    headers: {
        common: {
            'Content-Type': 'application/json;charset=utf-8',
        },
    },
});

export default instance;