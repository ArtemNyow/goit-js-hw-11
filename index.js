import{a as S,S as q,i as a}from"./assets/vendor-Bq379mSf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const E="50837590-b5294368a5e0df0c87d227cce",P="https://pixabay.com/api/";async function h(r,s=1){const e={key:E,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15};try{return(await S.get(P,{params:e})).data}catch{throw new Error("Помилка запиту до API")}}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=document.querySelector(".load-more");let i;function g(r){const s=r.map(e=>`
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
      `).join("");m.insertAdjacentHTML("beforeend",s),i?i.refresh():i=new q(".gallery a",{captionsData:"alt",captionDelay:250})}function R(){m.innerHTML="",i&&i.destroy(),i=null}function L(){p.classList.remove("hidden")}function b(){p.classList.add("hidden")}function w(){y.classList.remove("hidden")}function v(){y.classList.add("hidden")}const d=document.querySelector(".form"),B=d.elements["search-text"],M=document.querySelector(".load-more");let u="",n=1,f=0;d.addEventListener("submit",async r=>{r.preventDefault();const s=B.value.trim();if(!s){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}u=s,n=1,R(),v(),L();try{const e=await h(u,n);if(!e.hits.length){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits),f=Math.ceil(e.totalHits/15),n<f&&w()}catch(e){a.error({title:"Error",message:e.message||"An error occurred while fetching images",position:"topRight"})}finally{b(),d.reset()}});M.addEventListener("click",async()=>{n++,L(),v();try{const r=await h(u,n);g(r.hits),$(),n<f?w():a.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(r){a.error({title:"Error",message:r.message,position:"topRight"})}finally{b()}});function $(){const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
