document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Header ---
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav .nav-link');

    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // --- Scroll Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Trigger initial scroll check for header
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }

    // --- Conditions Hover Image Swap ---
    const conditionItems = document.querySelectorAll('.condition-list-item');
    const conditionsMainImage = document.querySelector('.conditions-main-image img');
    
    if (conditionItems.length > 0 && conditionsMainImage) {
        // Preload images to prevent flashing on hover
        const preloadedImages = [];
        conditionItems.forEach(item => {
            const imgSrc = item.getAttribute('data-image');
            if (imgSrc) {
                const img = new Image();
                img.src = imgSrc;
                preloadedImages.push(img);
                
                item.addEventListener('mouseenter', () => {
                    // Only update if it's a different image
                    if (conditionsMainImage.getAttribute('src') !== imgSrc) {
                        conditionsMainImage.style.opacity = '0.4';
                        setTimeout(() => {
                            conditionsMainImage.src = imgSrc;
                            conditionsMainImage.style.opacity = '1';
                        }, 150);
                    }
                });
            }
        });
    }
});
