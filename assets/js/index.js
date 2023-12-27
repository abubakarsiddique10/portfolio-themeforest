/* nav toggle button select*/
const header = document.getElementById('header')
/* const toggleBtn = document.querySelector('#nav__toggle'); */
const toggleOpen = document.querySelector('#toggle__open');
const toggleClose = document.querySelector('#toggle__close');
const navRight = document.querySelector('.nav__menu')
const navLogo = document.querySelector('.nav__logo')
/* const navLink = document.querySelectorAll('.nav__link'); */
const navMenu = document.querySelector('.nav__menu')
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const html = document.querySelector('html')
const themeToggle = document.getElementById('theme__toggle');
const headerTitle = document.querySelectorAll('.header__title')
const isTheme = localStorage.getItem('theme');
const hero = document.getElementById('hero');
const servicesCard = document.querySelectorAll('.services__card');
/* const testimonialCard = document.querySelectorAll('.testimonial__card'); */
const priceCard = document.querySelectorAll('.price__card');
const blogCard = document.querySelectorAll('.blog__card');
const contactLeft = document.querySelector('.contact__left');
const contactRight = document.querySelector('.contact__right');
const messageInput = document.querySelectorAll('.contact__form input, textarea')
const servicesCardSVG = document.querySelectorAll('.services__card svg');
const portfolioWrappper = document.querySelector('.portfolio__wrappper')
const testimonialCardSVG = document.querySelectorAll('.testimonial__card svg');
const svg = document.querySelectorAll('svg:not(.card__rating svg)');
const preloader = document.getElementById('preloader');



// Preloader
window.addEventListener('load', () => {
    preloader.style.display = "none"
})


/*=========================
    NAVBAR START
==========================*/
// Navbar icon change
const navbarToggler = document.querySelector('.navbar-toggler');
const openMenu = document.getElementById('open-menu');
const closenMenu = document.getElementById('close-menu');
let isOpen = false

navbarToggler.addEventListener('click', (e) => {
    openMenu.style.display = e.target.id == "open-menu" ? "none" : "block";
    closenMenu.style.display = e.target.id == "close-menu" ? "none" : "block";
    isOpen = !isOpen;
    header.classList.toggle('header__bg')
    if (window.scrollY > 0) {
        header.classList.add('header__bg')
    }
})
// windo scroll navbar bg color change
window.addEventListener('scroll', () => {
    if (window.scrollY > 0 && !isOpen) {
        header.classList.add('header__bg')
    } else if (isOpen) {
        header.classList.add('header__bg')
    } else {
        header.classList.remove('header__bg')
    }
})



// Navbar active class
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-active').classList.remove('nav-active')
        link.classList?.add('nav-active')
    })
})
/*=========================
    NAVBAR END
==========================*/

/* 
// nav background change function
const maxWidth = window.matchMedia("(max-width: 992px)");
const resizeScreen = () => {
    const width = document.body.clientWidth;
    const isTheme = localStorage.getItem('theme');

    if (width <= 992 && isTheme == "dark") {
        navMenu.style.background = "#242B33";
    } else if (width > 992 && isTheme == "dark") {
        navMenu.style.background = "transparent";
    } else {
        navMenu.style.background = "#FFFFFF";
    }
}
window.addEventListener('resize', resizeScreen)

// dark & light mood functionality
if (isTheme == 'dark') {
    html.classList.add('dark');
    moon.style.display = "none";
    sun.style.display = "block"
    html.classList.remove('light');
    hero.style.background = "#1D232A";

    header.style.background = '#1D232A';
    header.style.borderBottom = "1px solid rgba(166, 173, 186, 0.08)";
    navLogo.style.color = "#A6ADBA";
    navLink.forEach((item) => item.style.color = "#A6ADBA");
    svg.forEach((item) => item.style.fill = " #A6ADBA");
    servicesCardSVG.forEach((svg) => svg.style.fill = "#F0F0F6")

    messageInput.forEach((input) => {
        input.style.background = "#1D232A";
        input.style.color = "#FFFFFF";
    });

    [...servicesCard, ...testimonialCard, ...priceCard, ...blogCard, contactLeft, contactRight, portfolioWrappper].forEach((card) => {
        card.style.border = "1px solid rgba(166, 173, 186, 0.05)"
        card.style.background = "#242B33";
    });
    resizeScreen()
}
console.log(testimonialCardSVG)
themeToggle.addEventListener('click', () => {
    const active = html.classList.toggle('dark');

    if (active) {
        localStorage.setItem('theme', 'dark');
        moon.style.display = "none";
        sun.style.display = "block";
        html.classList.remove('light');
        hero.style.background = "#1D232A";
        header.style.background = '#1D232A';
        header.style.borderBottom = "1px solid rgba(166, 173, 186, 0.08)";
        navLogo.style.color = "#A6ADBA";
        navLink.forEach((item) => item.style.color = "#A6ADBA");
        svg.forEach((item) => item.style.fill = " #A6ADBA");
        servicesCardSVG.forEach((svg) => svg.style.fill = "#F0F0F6")
        messageInput.forEach((input) => {
            input.style.background = "#1D232A";
            input.style.color = "#FFFFFF";
        });

        [...servicesCard, ...testimonialCard, ...priceCard, ...blogCard, contactLeft, contactRight, portfolioWrappper].forEach((card) => {
            card.style.border = "1px solid rgba(166, 173, 186, 0.05)"
            card.style.background = "#242B33";
        })
        slideShow()
        resizeScreen()

    } else {
        localStorage.setItem('theme', null);
        moon.style.display = "block";
        sun.style.display = "none";
        html.classList.add('light');
        hero.style.background = "linear-gradient(180deg,#f8fafc,rgba(242,202,252,.11) 34.69%,rgba(250,198,252,.11) 44.06%,rgba(175,183,255,.11) 54.48%,rgba(142,220,200,.07) 64.9%,#f8fafc 97.95%)";

        header.style.background = '#FFFFFF';
        header.style.borderBottom = "none";
        navLogo.style.color = "#18191A";
        navLink.forEach((item) => item.style.color = "#18191A");
        svg.forEach((item) => item.style.fill = "#18191A");
        servicesCardSVG.forEach((svg) => svg.style.fill = "#FFB400")
        messageInput.forEach((input) => {
            input.style.background = "#FFFFFF";
            input.style.color = "black";
        });

        [...servicesCard, ...testimonialCard, ...priceCard, ...blogCard, contactLeft, contactRight, portfolioWrappper].forEach((card) => {
            card.style.background = "rgb(248 250 252)";
            card.style.border = "1px solid rgba(71, 85, 105, .1)";
            card.style.borderRadius = "4px"
        });
        contactLeft.style.background = "#FFFFFF";
        contactRight.style.background = "#FFFFFF";
        slideShow()
        resizeScreen()
    }
})
*/


/*=========================
    Portfolio Start
==========================*/
const portfolioMenu = document.querySelector('.portfolio__menu');
const portfolioCards = document.querySelectorAll('.portfolio__content .col');
const arrowIcons = document.querySelectorAll('.portfolio__wrappper img');

// Portfolio Menu Dragging
portfolioMenu.addEventListener('mousedown', () => isdragging = true)
portfolioMenu.addEventListener('mouseup', () => isdragging = false)
portfolioMenu.addEventListener('mousemove', (e) => {
    if (!isdragging) return
    portfolioMenu.scrollLeft = portfolioMenu.scrollLeft - e.movementX;
})
// this code for slide shadow
const slideShow = () => {
    const isTheme = localStorage.getItem('theme');
    const scrollLeft = portfolioMenu.scrollLeft;
    const maxScrollableWidth = portfolioMenu.scrollWidth - portfolioMenu.clientWidth;

    portfolioWrappper.style.setProperty("--colorBefore", scrollLeft > 0 ? `${isTheme == "dark" ? "#242B33" : "#fefefe"}` : "");
    portfolioWrappper.style.setProperty("--colorAfter", maxScrollableWidth == scrollLeft ? "" : `${isTheme == "dark" ? "#242B33" : "#fefefe"}`)
}
slideShow()
portfolioMenu.addEventListener('scroll', slideShow)

// Clicking Target Elements
portfolioMenu.addEventListener('click', (e) => {
    if (e.target.matches('li')) {
        const menuId = e.target.id;
        console.log(menuId)
        portfolioCards.forEach((card) => {
            if (menuId != card.id && menuId != "all-categories") {
                card.style.display = "none"
            } else {
                document.querySelector('.portfolio__menu .active').classList.remove('active');
                e.target.classList.add('active')
                card.style.display = "block";
            }
        })
    }
})

/* arrowIcons.forEach((arrow) => {
    arrow.addEventListener('click', (e) => {
        portfolioMenu.style.scrollBehavior = "smooth"
        const id = e.target.id;
        portfolioMenu.scrollLeft -= id == "left" ? -50 : 50;
        portfolioMenu.style.scrollBehavior = "unset"
    })
}) */
/*=========================
    Portfolio End
==========================*/




/*=========================
    Testimonial Slide Start
==========================*/
const testimonialBody = document.querySelector('.testimonial__body');
const dotButtons = document.querySelectorAll('.testimonial__dots button');
const leftArrow = document.querySelector('.left__arrow');
const rightRrrow = document.querySelector('.right__arrow');
const testimonialCard = document.querySelector('.testimonial__card');
let isdragging = false;

testimonialBody.addEventListener('scroll', () => {
    const testimonialScrollLeft = testimonialBody.scrollLeft
    const maxScrollableWidth = testimonialBody.scrollWidth - testimonialBody.clientWidth;
    leftArrow.disabled = testimonialScrollLeft > 0 ? false : true
    rightRrrow.disabled = testimonialScrollLeft == maxScrollableWidth ? true : false
})

// slider draging
testimonialBody.addEventListener('mousemove', (e) => {
    if (!isdragging) return;
    testimonialBody.style.scrollBehavior = "auto";
    testimonialBody.scrollLeft = testimonialBody.scrollLeft - e.movementX;
    testimonialBody.style.scrollBehavior = "smooth";
})
testimonialBody.addEventListener('mousedown', () => isdragging = true);
testimonialBody.addEventListener('mouseup', () => isdragging = false);
testimonialBody.addEventListener('mouseleave', () => isdragging = false);

// slider click
leftArrow.addEventListener('click', () => {
    testimonialBody.scrollLeft -= testimonialCard.offsetWidth + 24;
})
rightRrrow.addEventListener('click', () => {
    testimonialBody.scrollLeft += testimonialCard.offsetWidth + 24;
})
/*=========================
    Testimonial Slide End
========================== */



/* Blog Start */
const allCrad = document.querySelectorAll('.blog .col');
const blogModal = document.querySelector('.blog__modal');
const modalButton = document.querySelector('.modal__btn');
let modalTitle = document.querySelector('.modal__title');
let modalText = document.querySelector('.modal__text');
let modalImg = document.querySelector('.modal__img');
// push content in modal
allCrad.forEach((card) => {
    card.addEventListener('click', (e) => {
        if (e.target.matches('h5, img')) {
            blogModal.style.visibility = "visible"
            modalImg.src = card.children[0].children[0].children[0].currentSrc
            modalTitle.innerHTML = card.children[0].children[1].children[1].innerHTML
            modalText.innerHTML = card.children[0].children[1].children[3].innerHTML
        }
    })
})
// modal close button
modalButton.addEventListener('click', () => {
    blogModal.style.visibility = "hidden"
})
/* Blog End */




/* Services Start */
const servicesModal = document.querySelector('.services__modal')
const allServicesCard = document.querySelectorAll('.services__card');
const servicesModalBtn = document.querySelector('.services__modal_btn');
let servicesModalIcon = document.querySelector('.services__modal_icon');
let servicesModalTitle = document.querySelector('.services__modal_title h3');
let servicesModalTitleIcon = document.querySelector('.services__modal_title i');
let servicesModalText = document.querySelector('.services__modal_text');

allServicesCard.forEach((card) => {
    const cardButton = card.children[1].children[2]
    cardButton.addEventListener('click', () => {
        servicesModal.style.visibility = "visible"
        servicesModalTitleIcon.className = card.children[0].children[0].className;
        servicesModalTitle.innerText = card.children[1].children[0].innerText;
        servicesModalText.innerHTML = card.children[2].innerHTML
    })
})

servicesModalBtn.addEventListener('click', () => {
    servicesModal.style.visibility = "hidden"
})
/* Services End */




