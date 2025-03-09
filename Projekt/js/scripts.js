/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


const phenomena = [
    "Déjà-vu: Das Gefühl, eine Situation schon einmal erlebt zu haben.",
    "Mandela-Effekt: Viele Menschen erinnern sich an Ereignisse falsch.",
    "Falsche Erinnerungen: Dein Gehirn kann Erinnerungen erschaffen, die nie passiert sind.",
    "Zeitdilatation: Zeit vergeht unterschiedlich schnell, je nach Gravitation oder Geschwindigkeit.",
    "Placebo-Effekt: Der Glaube an eine Wirkung kann echte körperliche Reaktionen auslösen."
];

function newPhenomenon() {
    const randomIndex = Math.floor(Math.random() * phenomena.length);
    document.getElementById("phenomenon-text").innerText = phenomena[randomIndex];
}