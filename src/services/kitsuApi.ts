import axios from 'axios';

export const ktisuApi = axios.create({
  baseURL: process.env.BASENAME_URL,
  headers: {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
  },
});
