import axios from "axios";

// const baseUrl = "https://8000-thomasspare-babygear-vc1ic99dcbk.ws-eu107.gitpod.io";
const baseUrl = "http://127.0.0.1:8000";
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.baseURL = baseUrl;

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();