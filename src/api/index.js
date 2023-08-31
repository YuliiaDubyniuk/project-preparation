import axios from 'axios';

// const API_KEY = '38922427-a1320c38255791562f8d90b5f';
const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';

async function makeRequestByCategory() {
    
  return await axios.get(BASE_URL);
} 

export { makeRequest };
