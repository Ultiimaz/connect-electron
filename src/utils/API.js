import axios from "axios";
import {LOGIN} from "./Config";

export const API = {
    login: (email,password) => API.post(LOGIN,{email,password},null),

    post: (url,data = {},config = {
        headers: {
          bearer: localStorage.getItem("token")
        }
    }) => axios.post(url,data,config).catch(e => console.error(e.message)),

    get: url => axios.get(url,{
      headers: {
        bearer: localStorage.getItem("token")
      }
    }).catch(e => console.error(e.message)),
};
