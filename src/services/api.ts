import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async (skip = 0, limit = 10) => {
  const response = await api.get(`/products?skip=${skip}&limit=${limit}`);
  return response.data;
};

export const getProductDetails = async (id:number) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};


export const getUsers = async (skip = 0, limit = 10) => {
  const response = await api.get(`/users?skip=${skip}&limit=${limit}`);
  return response.data;
};

export const getUserDetails = async (id:number) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};