import './style.css'
import javaLogo from '../assets/java_logo.png'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <section class="resume">
    <section class="main-info-block">
      <img class="main-photo" src="../assets/my_photo.png" alt="photo">
      
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
          <img class="main-info-det-java-logo" src="../assets/java_logo.png" alt="java_logo">
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
`

setupCounter(document.querySelector('#counter'))
