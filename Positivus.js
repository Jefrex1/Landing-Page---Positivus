'use strict';

const testimonialsContainer = document.getElementById("testimonials_container");
const testimonials = testimonialsContainer.querySelectorAll(':scope > div');
const testimonialsCurrentNavContainer = document.getElementById("testimonials_current_nav_container");

const btnLeft = document.getElementById("testimonials_navigation_left");
const btnRight = document.getElementById("testimonials_navigation_right");

testimonialsCurrentNavContainer.innerHTML = '';

testimonials.forEach((element, index) => {
    const btn = document.createElement('button');
    
    btn.id = `testimonials_current_no_${index + 1}`;
    btn.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
    
    btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="white"/>
        </svg>
    `;
    
    testimonialsCurrentNavContainer.appendChild(btn);
});


const dots = testimonialsCurrentNavContainer.querySelectorAll('button');
console.log(dots)

function updateActiveDot() {
    const scrollLeft = testimonialsContainer.scrollLeft;
    
    const cardWidth = 650; 
    
    const activeIndex = Math.round(scrollLeft / cardWidth);
    
    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

testimonialsContainer.addEventListener('scroll', updateActiveDot);

updateActiveDot();

btnLeft.addEventListener('click', () => {
    testimonialsContainer.style.scrollBehavior = 'smooth';
    testimonialsContainer.scrollLeft -= 650
})

btnRight.addEventListener('click', () => {
    testimonialsContainer.style.scrollBehavior = 'smooth';
    testimonialsContainer.scrollLeft += 650
})