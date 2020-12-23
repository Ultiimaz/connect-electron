export default function general(state = 0, action) {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return state + 1;
    case "SET_CLIENT_VERSION":
      return {
        ...state,
      client_version: action.payload
      };
    default:
      return state;
  }
}
