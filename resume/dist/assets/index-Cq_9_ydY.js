(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function a(n){let o=0;const i=s=>{o=s,n.innerHTML=`count is ${o}`};n.addEventListener("click",()=>i(o+1)),i(0)}document.querySelector("#app").innerHTML=`
  <section class="resume">
    <section class="main-info-block">
      <img class="main-photo" src="../assets/my_photo-P6IYGWKh.png" alt="photo">
      
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
          <img class="main-info-det-java-logo" src="../assets/java_logo-Dmd8tdpe.png" alt="java_logo">
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
`;a(document.querySelector("#counter"));
