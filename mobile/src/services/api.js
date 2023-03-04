import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: 'http://192.168.100.175:4000',
})

const requestIntercepter = async (config) => {
    const token = await AsyncStorage.getItem('token')
    config.headers.Authorization = "Bearer " + token;
    return config;
};

api.interceptors.request.use(requestIntercepter);
export default api