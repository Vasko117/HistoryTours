import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:9091/api',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});


export default instance;