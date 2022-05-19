import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const client = axios.create({
  headers: {
    post: {
      'Content-Type': 'application/json'
    },
    put: {
      'Content-Type': 'application/json'
    },
    patch: {
      'Content-Type': 'application/json'
    },
  },
  baseURL: BASE_URL,
})

export const search = (query, page = 1, perPage = 10) => {
  if (query) {
    return client.get(`/search?q=${query}&_page=${page}&_limit=${perPage}`)
  }
}
export const starAction = (id, payload) => {
  if (id) {
    return client.patch(`search/${id}`, payload);
  }
}

export const getAllStars = () => {
  return client.get('search?starred=true');
}