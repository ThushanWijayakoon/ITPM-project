import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8070/" });


export const register = (user) =>
  axios.post("http://localhost:8070/user", user);


export const fetchUsers = () => API.get("/user");
export const fetchUser = (id) => API.get(`/user/${id}`);
export const deleteUser = (userID) => API.delete(`/user/delete/${userID}`);
export const updateUser = (user) => API.patch(`/user/update/${user.id}`, user);
export const updatePassword = (user) =>
  API.patch(`/user/resetPassword/${user.id}`, user);
export const updateProfile = (user) =>
  API.patch(`/user/profile/${user.id}`, user);

