import { fetchBreeds } from './cat-api';
import Notiflix from 'notiflix';
import { fetchCatByBreed } from './cat-api';

const elements = {
  select: document.querySelector('.breed-select'),
  page: document.querySelector('.cat-info'),
  loader: document.querySelector('.loadOne'),
  loaderTwo: document.querySelector('.loadTwo'),
};

let CatBreedsArr = [];

fetchBreeds()
  .then(data => {
    CatBreedsArr = data;
    console.dir(CatBreedsArr);

    elements.loader.classList.value = 'loadOne loader hidden';

    CatBreedsArr.map(elem => {
      elements.select.insertAdjacentHTML(
        'beforeend',
        `
      <option value="${elem.id}">${elem.name}</option>`
      );
    });
    elements.select.classList.value = 'breed-select';
  })
  .catch(error => {
    Notiflix.Notify.failure(`ERROR fetching - ${error}`);
  });

elements.select.addEventListener('change', loadBreed);

function loadBreed(evt) {
  elements.loader.classList.value = 'loadOne loader';

  fetchCatByBreed(evt.target.value)
    .then(data => {
      const result = { ...data[0].breeds }[0];

      console.dir(result);

      elements.page.innerHTML = `
      <img src="https://cdn2.thecatapi.com/images/${result.reference_image_id}.jpg" alt="${result.name}" width="300">
      <div class="catText">
      <h2>${result.name}</h2>
      <p>${result.description}</p>
      <p><span class= "temperSpan">Temperament:</span>${result.temperament}</p>
      
      </div>
    `;
      elements.loader.classList.value = 'loadOne loader hidden';
      elements.page.classList.value = 'cat-info';
    })
    .catch(error => {
      Notiflix.Notify.failure(`ERROR fetching - ${error}`);
    });
}
