import Axios from 'axios';

const urls = {
  development: 'http://localhost:3000/',
  production: 'https://main.d3gn3pdo5hpqzs.amplifyapp.com/',
};
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV as 'development' | 'production'],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
