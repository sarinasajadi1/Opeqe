import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-5a6f7.firebaseio.com//'
});

export default instance;