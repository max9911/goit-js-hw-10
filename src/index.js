let CatBreedsArr = [];
import { fetchBreeds } from './cat-api';
import Notiflix from 'notiflix';

const elements = {
  select: document.querySelector('.breed-select'),
  page: document.querySelector('.cat-info'),
  loader: document.querySelector('.loadOne'),
  loaderTwo: document.querySelector('.loadTwo'),
};

fetchBreeds()
  .then(data => {
    CatBreedsArr = data;
    elements.loader.classList.value = 'loadOne loader hidden';

    elements.select.classList.value = 'breed-select';

    data.map(elem => {
      elements.select.insertAdjacentHTML(
        'beforeend',
        `
      <option value="${elem.id}">${elem.name}</option>`
      );
    });
  })
  .catch(error => {
    Notiflix.Notify.failure(`ERROR fetching - ${error}`);
    console.log(error);
  });

elements.select.addEventListener('change', loadBreed);

function loadBreed(evt) {
  const result = CatBreedsArr.find(item => item.id === evt.target.value);

  elements.page.innerHTML = `
      <img src="${result.image.url}" alt="${result.name}" width="300">
      <div class="catText">
      <h2>${result.name}</h2>
      <p>${result.description}</p>
      <p><span class= "temperSpan">Temperament:</span>${result.temperament}</p>
      
      </div>
    `;

  elements.page.classList.value = 'cat-info';
}
