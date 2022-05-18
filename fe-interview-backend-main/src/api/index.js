import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const client = axios.create({
  baseURL: BASE_URL,
})

export const search = (query, page = 1, perPage = 10) => {
  if (query) {
    return client.get(`/search?q=${query}&_page=${page}&_limit=${perPage}`)
  }

}