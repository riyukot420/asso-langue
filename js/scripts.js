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

// Animate navbar on load
const navbar = document.querySelector('#mainNav');
if (navbar) {
  navbar.classList.add('navbar-slide');
  setTimeout(() => {
    navbar.classList.add('active');
    // Remove animation class after it runs once
    setTimeout(() => {
      navbar.classList.remove('navbar-slide', 'active');
    }, 600); // matches transition duration
  }, 100);
}

// Scroll-triggered animations
const revealOnScroll = (selector, animationClass) => {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  elements.forEach(el => observer.observe(el));
};
revealOnScroll('.fade-in', 'appear');
revealOnScroll('.zoom-in', 'appear');

// Typing effect in header subheading
const typeEffect = (el, text, delay = 80) => {
  let i = 0;
  el.textContent = '';
  const interval = setInterval(() => {
    el.textContent += text.charAt(i++);
    if (i >= text.length) clearInterval(interval);
  }, delay);
};
const subtitle = document.querySelector('.masthead-subheading');
if (subtitle) typeEffect(subtitle, 'Enseignement personnalisé depuis 2022');
