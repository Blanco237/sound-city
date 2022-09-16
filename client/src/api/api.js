import axios from 'axios';
// import dotenv from 'dotenv'

// dotenv.config();

const AxiosInstance = axios.create({
    baseURL: 'http://localhost:5500'
})

export default AxiosInstance;