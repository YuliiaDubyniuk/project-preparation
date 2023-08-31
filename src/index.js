import { makeRequest } from './api';
import { createMarkup } from './markup';
import { formEl, loadMoreBtn, galleryBox } from './refs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


let inputVal;
let page = 1;
const imgPerPage = 40;
let totalShownImg = 0;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

formEl.addEventListener('submit', searchImg);
loadMoreBtn.addEventListener('click', loadMoreImg);

// async function searchImg(evt) {
//   evt.preventDefault();
//   galleryBox.innerHTML = '';
//   totalShownImg = 0;

//   inputVal = evt.currentTarget.elements.searchQuery.value.trim();

//   if (inputVal === '') {
//     Notify.info('Please, enter your keyword for search.');
//     return;
//   }
//   createGallery();
//   evt.currentTarget.reset();
// }

async function createGallery() {
  try {
    const resp = await makeRequest();
    console.log(resp)

  //   if (page === 1) {
  //     notify(data.total);
  //   }

  //  addMarkup (data.hits);

  //   if (data.total > imgPerPage * page) {
  //     loadMoreBtn.classList.remove('visually-hidden');
  //   }
  //   lightbox.refresh();

  //   totalShownImg += data.hits.length;
    
  //   if (data.total === totalShownImg && data.total !== 0) {
  //     Notify.info("We're sorry, but you've reached the end of search results.");
  //   };

  //    const { height: cardHeight } = document
  //       .querySelector('.gallery')
  //       .firstElementChild.getBoundingClientRect();
    
  //     window.scrollBy({
  //       top: cardHeight * 2,
  //       behavior: 'smooth',
  //     });
    
  } catch (error) {
    console.error(error.message);  
  }
}

// function addMarkup(resp) {
//   galleryBox.insertAdjacentHTML('beforeend', createMarkup(resp));
// }

// function loadMoreImg() {
//   page += 1;
//   loadMoreBtn.classList.add('visually-hidden');
//   createGallery(inputVal);
// }

// function notify(resp) {
//   if (resp === 0) {
//     Notify.failure(
//       'Sorry, there are no images matching your search query. Please try again.'
//     );
//   } else {
//     Notify.success(`Hooray! We found ${resp} images`);
//   }
// }