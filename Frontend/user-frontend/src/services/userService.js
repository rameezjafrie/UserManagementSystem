
import axios from 'axios';

// Change port to 8081 if your Spring Boot backend runs on 8081
const REST_API_BASE_URL = 'http://localhost:8081/api/users2';

export const listUsers = () => axios.get(REST_API_BASE_URL);

export const createUser = (user) => axios.post(REST_API_BASE_URL, user);

export const getUserById = (userId) => axios.get(`${REST_API_BASE_URL}/${userId}`);

export const updateUser = (userId, user) => axios.put(`${REST_API_BASE_URL}/${userId}`, user);

export const deleteUser = (userId) => axios.delete(`${REST_API_BASE_URL}/${userId}`);














// import axios from "axios";

// axios.get(...)
// axios.post(...)
// axios.put(...)
// axios.delete(...)

// const API_URL = "http://localhost:8081/api/users";

// export const getUsers = () => {
//     return axios.get(API_URL);
// };

// export const createUser = (user) => {
//     return axios.post(API_URL, user);
// };

// export const updateUser = (id, user) => {
//     return axios.put(`${API_URL}/${id}`, user);
// };

// export const deleteUser = (id) => {
//     return axios.delete(`${API_URL}/${id}`);
// };