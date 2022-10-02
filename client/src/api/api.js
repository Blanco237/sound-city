import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'https://sound-city-server-production.up.railway.app/'
})

export default AxiosInstance;