import axios from 'axios';

console.log(process.env);

const API =  axios.create({
        baseURL: process.env.REACT_APP_BASE_URL
    });

    API.interceptors.request.use(function (config) {
        // Do something before request is sent
        console.log(config);
        config.params = {...config.params, APPID: process.env.REACT_APP_API_KEY}
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

  API.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default API;


    // https://api.openweathermap.org/data/2.5/forecast/daily?id=524901&lang=zh_cn&appid=b1b15e88fa797225412429c1c50c122a1