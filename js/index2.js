// js/index2.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Header Scroll State
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 3. Interactive Vertical Service Navigator
    const navItems = document.querySelectorAll('.nav-item');
    const bgImages = document.querySelectorAll('.service-bg-img');
    
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to hovered item
            this.classList.add('active');
            
            // Get the target service ID
            const targetId = this.getAttribute('data-service');
            
            // Swap background image
            bgImages.forEach(img => {
                if (img.getAttribute('data-target') === targetId) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });
        });
    });

    // 4. Mobile Menu Toggle (Basic Setup)
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            // Simplified mobile menu logic for the prototype
            if (navList.style.display === 'flex') {
                navList.style.display = 'none';
            } else {
                navList.style.display = 'flex';
                navList.style.flexDirection = 'column';
                navList.style.position = 'absolute';
                navList.style.top = '100%';
                navList.style.left = '0';
                navList.style.width = '100%';
                navList.style.backgroundColor = '#FFFFFF';
                navList.style.padding = '2rem 5%';
                navList.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }
        });
    }
});
