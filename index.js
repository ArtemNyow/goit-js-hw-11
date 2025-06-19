import{a as f,S as p,i as a}from"./assets/vendor-DYr2TjDw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const m="50837590-b5294368a5e0df0c87d227cce",h="https://pixabay.com/api/";function y(s){return f(h,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data).catch(e=>{throw new Error("Помилка запиту до API")})}const u=document.querySelector(".gallery"),d=document.querySelector(".loader");let i;function g(s){const o=s.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}">
            <img 
              src="${e.webformatURL}" 
              alt="${e.tags}" 
              class="gallery-image"
            >
          </a>
          <div class="image-info">
            <p><b>Likes:</b> ${e.likes}</p>
            <p><b>Views:</b> ${e.views}</p>
            <p><b>Comments:</b> ${e.comments}</p>
            <p><b>Downloads:</b> ${e.downloads}</p>
          </div>
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",o),i?i.refresh():i=new p(".gallery a",{captionsData:"alt",captionDelay:250})}function b(){u.innerHTML="",i&&i.destroy(),i=null}function L(){d.classList.remove("hidden")}function w(){d.classList.add("hidden")}const c=document.querySelector(".form"),v=c.elements["search-text"];c.addEventListener("submit",s=>{s.preventDefault();const o=v.value.trim();if(!o){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}L(),b(),y(o).then(e=>{if(!e.hits||e.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits)}).catch(e=>{a.error({title:"Error",message:e.message||"An error occurred while fetching images",position:"topRight"})}).finally(()=>{w(),c.reset()})});
//# sourceMappingURL=index.js.map
