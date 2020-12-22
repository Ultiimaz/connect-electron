import {API} from "../../utils/API";

export function login(email, password){
  API.login(email, password).then(request => {
    if(request.status === 403){
      return {
        type: "LOGIN_FAILED",
        payload: request.data
      }
    }
    return {
      type: "LOGIN_SUCCESS",
      payload: request.data
    }
  })
}
