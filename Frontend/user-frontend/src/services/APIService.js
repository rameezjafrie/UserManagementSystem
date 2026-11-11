import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api/users2'; // Adjust port if needed

export const getUsers = () => axios.get(API_BASE_URL);

export const createUser = (userData) => axios.post(API_BASE_URL, userData);

export const deleteUser = (userId) => axios.delete(`${API_BASE_URL}/${userId}`);