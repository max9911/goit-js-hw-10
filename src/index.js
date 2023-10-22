let CatBreedsArr = [];
import { fetchBreeds } from './cat-api';

const elements = {
  select: document.querySelector('.breed-select'),
  page: document.querySelector('.cat-info'),
};

fetchBreeds()
  .then(data => {
    CatBreedsArr = data;

    data.map(elem => {
      elements.select.insertAdjacentHTML(
        'beforeend',
        `
      <option value="${elem.id}">${elem.name}</option>`
      );
    });
  })
  .catch(error => {
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
}
