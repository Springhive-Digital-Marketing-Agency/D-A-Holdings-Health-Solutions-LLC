/**
 * INDEX3 - HAVENCARE SENIOR HEALTHCARE
 * Interactive JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. STICKY HEADER & SCROLL BEHAVIOR
       ========================================================================== */
    const siteHeader = document.getElementById('siteHeader');
    
    const handleScroll = () => {
        if (window.scrollY > 30) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    /* ==========================================================================
       2. MOBILE DRAWER NAVIGATION
       ========================================================================== */
    const menuToggle = document.getElementById('menuToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerClose = document.getElementById('drawerClose');
    const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-footer a');

    const openDrawer = () => {
        mobileDrawer.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        mobileDrawer.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    if (menuToggle) menuToggle.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
            closeDrawer();
        }
    });

    /* ==========================================================================
       3. TESTIMONIALS CAROUSEL / SLIDER
       ========================================================================== */
    const track = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    const dotBtns = document.querySelectorAll('.dot-btn');
    const slides = document.querySelectorAll('.testimonial-slide');

    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoSlideInterval = null;

    const updateSlider = (index) => {
        currentSlide = (index + totalSlides) % totalSlides;
        if (track) {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        dotBtns.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentSlide);
            dot.setAttribute('aria-current', idx === currentSlide ? 'true' : 'false');
        });
    };

    const nextSlide = () => updateSlider(currentSlide + 1);
    const prevSlide = () => updateSlider(currentSlide - 1);

    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    dotBtns.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            const slideIdx = parseInt(e.target.getAttribute('data-slide'), 10);
            updateSlider(slideIdx);
            resetAutoSlide();
        });
    });

    // Auto-slide loop
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    };

    const stopAutoSlide = () => {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
    };

    const resetAutoSlide = () => {
        stopAutoSlide();
        startAutoSlide();
    };

    const sliderContainer = document.querySelector('.testimonial-slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);

        // Touch Swipe
        let startX = 0;
        let endX = 0;

        sliderContainer.addEventListener('touchstart', (e) => {
            startX = e.changedTouches[0].screenX;
        }, { passive: true });

        sliderContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].screenX;
            if (startX - endX > 45) {
                nextSlide();
                resetAutoSlide();
            } else if (endX - startX > 45) {
                prevSlide();
                resetAutoSlide();
            }
        }, { passive: true });
    }

    startAutoSlide();

    /* ==========================================================================
       4. FAQ ACCORDION
       ========================================================================== */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        const icon = item.querySelector('.faq-icon');

        trigger.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all others for clean accordion
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherTrigger = otherItem.querySelector('.faq-trigger');
                const otherIcon = otherItem.querySelector('.faq-icon');
                if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
                if (otherIcon) otherIcon.textContent = '+';
            });

            if (!isActive) {
                item.classList.add('active');
                trigger.setAttribute('aria-expanded', 'true');
                if (icon) icon.textContent = '−';
            }
        });
    });

    /* ==========================================================================
       5. SCROLL REVEAL OBSERVER
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback
        revealElements.forEach(el => el.classList.add('active'));
    }

    /* ==========================================================================
       6. SMOOTH ANCHOR LINK SCROLLING
       ========================================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ==========================================================================
       7. CONTACT FORM INTERACTIVITY & VALIDATION
       ========================================================================== */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Sending Inquiry...';
            submitBtn.style.opacity = '0.7';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = '✓ Inquiry Sent Successfully!';
                submitBtn.style.backgroundColor = '#8F9F88';
                submitBtn.style.borderColor = '#8F9F88';
                submitBtn.style.opacity = '1';

                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.borderColor = '';
                    submitBtn.disabled = false;
                }, 4000);
            }, 1200);
        });
    }

    /* ==========================================================================
       8. HERO IMAGE SLIDER ANIMATION
       ========================================================================== */
    const heroImg = document.querySelector('.hero-main-img');
    if (heroImg) {
        const heroImages = [
            'images/hero_slide1.jpg',
            'images/hero_slide2.jpg',
            'images/hero_slide3.jpg'
        ];
        let currentHeroIdx = 0;

        setInterval(() => {
            currentHeroIdx = (currentHeroIdx + 1) % heroImages.length;
            
            // Remove animation class to reset it
            heroImg.classList.remove('hero-animating');
            
            // Trigger reflow to restart animation
            void heroImg.offsetWidth;
            
            // Change image source
            heroImg.src = heroImages[currentHeroIdx];
            
            // Add animation class back
            heroImg.classList.add('hero-animating');
        }, 5000);
    }

});
