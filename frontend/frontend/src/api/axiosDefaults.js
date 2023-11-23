import axios from "axios";

const baseUrl = "https://8000-thomasspare-babygear-vcpagz97del.ws-eu106.gitpod.io";
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.baseURL = baseUrl + "/api/";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();