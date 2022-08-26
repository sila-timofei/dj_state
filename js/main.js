//modal
let modal = document.querySelectorAll('.modal-reviews');
let btnOpenModal = document.querySelectorAll('.reviews__button-read-more');
let btnCloseModal = document.querySelectorAll('.modal-reviews__btn-back-body');
let body = document.querySelector('.document');

btnOpenModal.forEach((i, index) => {
    i.addEventListener("click", () => {
        modal[index].classList.add('modal-reviews_open');

        body.style.cssText = "overflow: hidden;"
    })
});

btnCloseModal.forEach(i => {
    i.addEventListener("click", () => {
        modal.forEach(i => {
            i.classList.remove('modal-reviews_open');
        });

        body.style.cssText = "";
    })
});


//slow scroll
var anchors = document.querySelectorAll('.link-anchor');

anchors.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
});


function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop - 64,
        behavior: 'smooth'
    })
}

var arrowNext = document.querySelectorAll('.first-screen__arrow');
var about = document.querySelector('#about');

arrowNext.forEach(i => {
    i.addEventListener('click', () => {
        scrollTo(about);
    })
})


//mobile menu
const btnMenu = document.querySelector('.header__btn-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('.header');
const logo = document.querySelector('.header__link-logo');

btnMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu_open');

    if(mobileMenu.classList.contains('mobile-menu_open')) {
        header.style.cssText = "background: transparent; border-bottom: 1px solid rgba(255, 255, 255, 0.2);";
        logo.style.cssText = "background-image: url('../img/logo-white.svg');";
        btnMenu.style.cssText = "background-image: url('../img/clo.svg');";
        body.style.cssText = "overflow: hidden;"
    } else {
        header.style.cssText = "";
        logo.style.cssText = "";
        btnMenu.style.cssText = "";
        body.style.cssText = ""
    }
})