import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ClientScripts() {
  const location = useLocation();

  useEffect(() => {
    // --- Scroll Reveal Animations ---
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-8');
                entry.target.classList.add('opacity-100', 'translate-y-0');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- Simple button press micro-interaction ---
    const handleMouseDown = (e: Event) => {
        const btn = e.currentTarget as HTMLElement;
        btn.style.transform = 'scale(0.95)';
    };
    const handleMouseUp = (e: Event) => {
        const btn = e.currentTarget as HTMLElement;
        btn.style.transform = 'scale(1)';
    };

    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', handleMouseDown);
        btn.addEventListener('mouseup', handleMouseUp);
        btn.addEventListener('mouseleave', handleMouseUp);
    });

    // --- Testimonial Carousel ---
    const testimonialsContainer = document.getElementById('testimonials-container');
    const btnPrevTestimonial = document.getElementById('btn-prev-testimonial');
    const btnNextTestimonial = document.getElementById('btn-next-testimonial');

    const handlePrev = (e: Event) => {
        e.preventDefault();
        const scrollAmount = window.innerWidth < 768 ? 320 : 420;
        if (testimonialsContainer) testimonialsContainer.scrollLeft -= scrollAmount;
    };
    const handleNext = (e: Event) => {
        e.preventDefault();
        const scrollAmount = window.innerWidth < 768 ? 320 : 420;
        if (testimonialsContainer) testimonialsContainer.scrollLeft += scrollAmount;
    };

    if (btnPrevTestimonial) btnPrevTestimonial.addEventListener('click', handlePrev);
    if (btnNextTestimonial) btnNextTestimonial.addEventListener('click', handleNext);

    // Auto-scroll logic
    let autoScrollInterval: ReturnType<typeof setInterval> | null = null;
    const startAutoScroll = () => {
        if (!testimonialsContainer) return;
        autoScrollInterval = setInterval(() => {
            const maxScroll = testimonialsContainer.scrollWidth - testimonialsContainer.clientWidth;
            if (testimonialsContainer.scrollLeft >= maxScroll - 10) {
                testimonialsContainer.scrollLeft = 0;
            } else {
                testimonialsContainer.scrollLeft += (window.innerWidth < 768 ? 320 : 420);
            }
        }, 4000); // 4 seconds
    };

    const stopAutoScroll = () => {
        if (autoScrollInterval) clearInterval(autoScrollInterval);
    };

    if (testimonialsContainer) {
        startAutoScroll();
        testimonialsContainer.addEventListener('mouseenter', stopAutoScroll);
        testimonialsContainer.addEventListener('mouseleave', startAutoScroll);
    }


    return () => {
      revealElements.forEach(el => revealObserver.unobserve(el));
      buttons.forEach(btn => {
        btn.removeEventListener('mousedown', handleMouseDown);
        btn.removeEventListener('mouseup', handleMouseUp);
        btn.removeEventListener('mouseleave', handleMouseUp);
      });
      if (btnPrevTestimonial) btnPrevTestimonial.removeEventListener('click', handlePrev);
      if (btnNextTestimonial) btnNextTestimonial.removeEventListener('click', handleNext);
      stopAutoScroll();
      if (testimonialsContainer) {
          testimonialsContainer.removeEventListener('mouseenter', stopAutoScroll);
          testimonialsContainer.removeEventListener('mouseleave', startAutoScroll);
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    // --- Micro-interaction for scroll effects on Navigation ---
    const handleScroll = () => {
        const nav = document.getElementById('main-nav');
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('bg-background/90', 'backdrop-blur-md', 'border-primary/20', 'shadow-sm');
                nav.classList.remove('bg-transparent', 'border-transparent', 'shadow-none');
            } else {
                nav.classList.add('bg-transparent', 'border-transparent', 'shadow-none');
                nav.classList.remove('bg-background/90', 'backdrop-blur-md', 'border-primary/20', 'shadow-sm');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    const toggleMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    };

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
    }

    return () => {
        window.removeEventListener('scroll', handleScroll);
        if (mobileMenuBtn) {
            mobileMenuBtn.removeEventListener('click', toggleMenu);
        }
    };
  }, [location.pathname]);

  return null;
}
