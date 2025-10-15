(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const a="/assets/java_logo-Dmd8tdpe.png",r="/assets/my_photo-P6IYGWKh.png";function l(n){let o=0;const i=s=>{o=s,n.innerHTML=`count is ${o}`};n.addEventListener("click",()=>i(o+1)),i(0)}document.querySelector("#app").innerHTML=`
  <section class="resume">
    <section class="main-info-block">
      <img class="main-photo" src="${a}" alt="photo">
      
      <div class="main-info-det">
        <div class="main-info-det-vac">
          <div class="main-info-det-vac-all-text">
            <h4 class="main-info-det-vac-fio">
              Житников Лев Евгеньевич
            </h4>
            <hr class="main-info-det-line">
            <h5 class="main-info-det-vac-text">
              Java-разработчик
            </h5>
          </div>
          <img class="main-info-det-java-logo" src="${r}" alt="java_logo">
        </div>
        <div class="main-info-contacts">
          <h4 class="main-info-contacts-text">
            Контакты
          </h4>
          <div class="main-info-contacts-contacts">
            <a href="mailto:zhitnikov0109@gmail.com" class="main-info-contacts-all">
              zhitnikov0109@gmail.com
            </a>
            <a href="tel:+79111393190" class="main-info-contacts-all">
              +7(911)139-31-90
            </a>
            <a href="https://github.com/Zhitnikov" class="main-info-contacts-all">
              github.com/Zhitnikov
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="education-info-block">
    
    </section>
    <section class="skills-info-block">
    
    </section>
    <section class="achievements-info-block">
    
    </section>
  </section>
`;l(document.querySelector("#counter"));
