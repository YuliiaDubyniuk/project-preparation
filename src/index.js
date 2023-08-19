import { makeRequest } from "./api";

let inputVal = "";

const formEl = document.querySelector('.search-form');
formEl.addEventListener('submit', getImages);

function getImages(evt) {
    evt.preventDefault();
    inputVal = evt.target.elements.searchQuery.value.trim();

    console.log(makeRequest(inputVal));

}
