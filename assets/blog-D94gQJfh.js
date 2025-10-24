import"./script-C-xeEPmY.js";const a="https://ceramic-api.onrender.com";function e(t){return`
    <article class="card__item">
      <div class="card__info">
        <img class="card__img" src="${new URL(t.image,a)}" alt="${t.title}" loading="lazy">
        <div class="card__title-btn">
          <h3 class="card__title">${t.title}</h3>
          <button class="btn-read card__btn">read</button>
        </div>
      </div>
      <p class="card__p">${t.excerpt} €</p>
    </article>
    `}async function c(){const t=await fetch(`${a}/api/posts`);if(!t.ok)throw new Error(`Failed to fetch: ${t.status}`);return t.json()}async function i(){const t=document.querySelector(".cards__grid");if(!t)return console.warn("No .cards__grid found");t.innerHTML='<div class="loading">Loading…</div>';try{let n=await c();t.innerHTML=n.map(e).join("")}catch(r){console.error(r),t.innerHTML='<div class="error">Failed to load</div>'}}document.addEventListener("DOMContentLoaded",()=>{i()});
