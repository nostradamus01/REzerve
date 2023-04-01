const conts = document.querySelectorAll('.cont');
for (let g7 = 0; g7 < conts.length; g7++) {
    conts[g7].addEventListener('click', () => {
        conts[g7].classList.toggle('bacel-em');
    });
}

const goTopBtn = document.querySelector(".go-top");

goTopBtn.addEventListener("click", goTop);
window.addEventListener("scroll", trackScroll);


function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if (scrolled > coords) {
        goTopBtn.classList.add(".go-top--show");
    } else {

        goTopBtn.classList.remove(".go-top--show");
    }
}

function goTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -75);
        setTimeout(goTop, 0);
    }
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

let header = document.querySelector('.js-header');
let headerH = document.querySelector('.js-header').clientHeight;

document.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll > headerH)
        header.classList.add('fixed');
    document.body.style.paddingTop = headerH + "px";
}


window.addEventListener('scroll', () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 600) {
        document.querySelector('.go-top').classList.add('go-top-lav');
    } else {
        document.querySelector('.go-top').classList.remove('go-top-lav');
    }
}); 


// burger-menu 
const burgerBtn = document.querySelector('.burger-menu-btn');
const burgerMenu = document.querySelector('.burger-menu-cont');
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('opened');
    burgerMenu.classList.toggle('opened');
})