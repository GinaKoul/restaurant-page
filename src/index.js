import './styles.css';
import { Homepage } from './homepage.js';
import { Categories } from './categories.js';
import { Contact } from './contact.js';
import { Credits } from './credits.js';

const initPage = (function(doc) {
    let mainContent, menuNavigation, navButtons, menuOpenBtn, menuCloseBtn; 

    function menuOpen() {
        console.log(menuOpenBtn);
        menuNavigation.setAttribute('data-menu','open');
    }

    function menuClose() {
        menuNavigation.setAttribute('data-menu','closed');
    }

    function clearMainContent() {
        menuClose();
        mainContent.classList.remove('pt-h');
        mainContent.innerHTML = null;
    }

    function handleNavigation() {
        clearMainContent();
        switch(Number(this.getAttribute('data-id'))) {
            case 1:
                Homepage.load();
              break;
            case 2:
                Categories.load();
              break;
            case 3:
                Contact.load();
                break;
            case 4:
                Credits.load();
                break;
            default:
                Homepage.load();
          }
    }

    function menuMobileToggle() {
        menuOpenBtn.addEventListener('click',menuOpen);
        doc.body.addEventListener('click', function( event ){
            if(!menuNavigation.contains( event.target ) && menuOpenBtn != event.target || menuNavigation.contains( event.target ) && menuCloseBtn == event.target){
                menuClose();
            }
        });
    }

    function initMainContent() {
        Homepage.load();
        navButtons.forEach(navButton=> {
            navButton.addEventListener('click',handleNavigation);
        });
    }

    function initPage() {
        mainContent = doc.querySelector('#content');
        menuNavigation = doc.querySelector('.menu');
        navButtons = doc.querySelectorAll('.menu-nav');
        menuOpenBtn = doc.querySelector('.menu-open');
        menuCloseBtn = doc.querySelector('.menu-close');
        menuMobileToggle();
        initMainContent();
    }
    
    if (doc.readyState === 'loading') {
        doc.addEventListener('DOMContentLoaded', initPage);
    } else {
        initPage();
    }

    return {
        handleNavigation: handleNavigation
    }
})(document);

export {initPage};