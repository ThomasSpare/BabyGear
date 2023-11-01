import axios from "axios";

const baseUrl = "https://8000-thomasspare-babygear-q6ncmhqqapz.ws-eu105.gitpod.io";
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.baseURL = baseUrl + "/api/";

axios.defaults.withCredentials = true;

// if response is 401 try to refresh token
let refreshing = false;
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 500) {
      window.location.href = "/500";
      return;
    }
    if (error.response.status === 401) {
      if (refreshing) {
        return;
      }
      refreshing = true;
      return axios
        .post("token/refresh", { withCredentials: true })
        .then((response) => {
          refreshing = false;
          return axios(error.config);
        })
        .catch((error) => {
          refreshing = false;
          console.clear();
          return axios(error.config); // retry the original request even if the refresh request fails
        });
    } else {
      console.clear();
      return Promise.reject("error");
    }
  }
);


export default baseUrl;