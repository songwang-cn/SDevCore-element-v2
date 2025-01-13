import axios from "axios";
import resModal from "@/axios/resModal";
import messageHandler from "@/axios/messageHandler";

axios.defaults.timeout = 8000
axios.defaults.headers.delete['Content-Type'] = 'form-data';
axios.defaults.headers.Authorization = '3d511e4d63ae4823955a4d50427a1b6f';

axios.interceptors.request.use(
    config => {
        // config.headers['Authorization'] = '3d511e4d63ae4823955a4d50427a1b6f';
        return config
    },
    error => {
        console.log('request.error==', JSON.stringify(error))
    }
)

axios.interceptors.response.use(
    response => {
        const { config, data } = response;
        const {code, message } = data;
        const method = config.method;

        response.data.data = resModal(data);
        messageHandler({ method, code, message });

        return Promise.reject(response.data.data);
    },
    error => {
        console.log('response.error==', JSON.stringify(error))
    }
)

export default axios
