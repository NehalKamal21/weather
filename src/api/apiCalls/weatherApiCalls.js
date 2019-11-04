import API from "..";
import { weatherApiUrls } from "../apiUrls/weather";

export const getWeatherApiCall = params => API.get(weatherApiUrls().getForcast, {
    params
});