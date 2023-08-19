import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API_KEY = '38922427-a1320c38255791562f8d90b5f';
const BASE_URL = 'https://pixabay.com/api/';

async function makeRequest(searchTerm) {
  axios.defaults.params = {
    key: API_KEY,
    q: searchTerm,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    };
    
 try {
     const resp = await axios.get(BASE_URL);
    if (resp.data.total === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    return resp;
  } catch (error) {
    console.log(error);
  }
}

export { makeRequest };
