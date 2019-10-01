import axios from 'axios';

const API_KEY = '49fdf7e9cb61b53a1a2d69d2878b444f';

export default axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/forecast?q=Cairo&APPID=${API_KEY}&units=metric`,
    });