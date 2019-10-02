import axios from 'axios';

const API_KEY = '49fdf7e9cb61b53a1a2d69d2878b444f';
const API = (url, params) => {
    return axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5` + url + `?APPID=${API_KEY}&` + params,
    });
}

export default API;


    // https://api.openweathermap.org/data/2.5/forecast/daily?id=524901&lang=zh_cn&appid=b1b15e88fa797225412429c1c50c122a1