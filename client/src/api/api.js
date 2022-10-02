import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: process.env.REACT_BASE_URL
})

export default AxiosInstance;