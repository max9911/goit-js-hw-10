let e=[];const n={select:document.querySelector(".breed-select"),page:document.querySelector(".cat-info")};fetch("https://api.thecatapi.com/v1/breeds?api_key=live_I1Xd2CVVRDS84kJF0BnkanCuc3oSV9PZY5wf6OJWfjd2e9Y9ej6aSkgrl5dsZhLV").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((t=>{e=t,t.map((e=>{n.select.insertAdjacentHTML("beforeend",`\n      <option value="${e.id}">${e.name}</option>`)}))})).catch((e=>{console.log(e)})),n.select.addEventListener("change",(function(t){const a=e.find((e=>e.id===t.target.value));n.page.innerHTML=`\n      <img src="${a.image.url}" alt="${a.name}" width="300">\n      <div class="catText">\n      <h2>${a.name}</h2>\n      <p>${a.description}</p>\n      <p><span class= "temperSpan">Temperament:</span>${a.temperament}</p>\n      </div>\n    `,n.page.classList.value="cat-info"})),console.dir(n.page);
//# sourceMappingURL=index.c16897a5.js.map
