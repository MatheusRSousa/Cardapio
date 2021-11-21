import http from "../config/axios";
import jwt_decode from "jwt-decode";

const TOKEN_KEY = "token";

const register = async (user) => {
  const { data } = await http.post("/session/register", user);
  return data;
};
const login = async (user) => {
  const { data } = await http.post("/session/login", user);

  if (data.token) {
    console.log(JSON.stringify(data));
    sessionStorage.setItem(TOKEN_KEY, JSON.stringify(data.token));
    return true;
  } else {
    logout();
    return false;
  }
};
const loginWithToken = (token) => {
  sessionStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
};
const isLoggedIn = () => {
  return !!sessionStorage.getItem(TOKEN_KEY);
};
const getToken = () => {
  return JSON.parse(sessionStorage.getItem(TOKEN_KEY));
};
const getRoles = () => {
  if (isLoggedIn()) {
    return jwt_decode(JSON.parse(sessionStorage.getItem(TOKEN_KEY))).roles;
  } else {
    return [];
  }
};
const hasRole = (role) => {
  console.log(getRoles());
  return getRoles()
    .map((role) => role.toUpperCase())
    .includes(role.toUpperCase());
};

const SessionService = {
  register,
  login,
  logout,
  isLoggedIn,
  getToken,
  getRoles,
  hasRole,
  loginWithToken,
};

export default SessionService;
