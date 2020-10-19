import axios from 'axios';
import { getToken, logout } from './auth';

export const client = axios.create({});

client.interceptors.request.use(async (config) => {
  if (config.url.includes('spotify')) {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token.accessToken}`;
    }
  }
  return config;
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      logout();
      window.location = '/login';
    }
  }
);

export default client;
