import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form')
const input = form.elements['search-text'];

form.addEventListener("submit", e => {
    e.preventDefault();

    const query = input.value.trim();


    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query!',
            position: 'topRight',
          });
          return;
    }
    showLoader();
    clearGallery();
    
    getImagesByQuery(query)
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        iziToast.error({
          title: "Error",
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight"
        });
        return;
      }
      
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: "Error",
        message: error.message || "An error occurred while fetching images",
        position: "topRight"
      });
    })
    .finally(() => {
        hideLoader();
      form.reset();
    });

})