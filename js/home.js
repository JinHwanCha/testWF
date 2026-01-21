// ===========================
// Home Page JavaScript (index.html)
// 메인 페이지 전용 기능
// ===========================

// ===========================
// Parallax Effect for Hero
// ===========================
const hero = document.querySelector('.hero');
if (hero) {
    const heroContent = hero.querySelector('.hero-content');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        // Apply transform only to hero-content, not the entire hero section
        if (heroContent) {
            heroContent.style.transform = `translateY(${parallax}px)`;
        }
    });
}

// ===========================
// Counter Animation
// ===========================
const counters = document.querySelectorAll('.big-number');
const counterSpeed = 200;

const countUp = (counter) => {
    const target = counter.textContent.replace(/[^0-9]/g, '');
    const increment = parseInt(target) / counterSpeed;
    let count = 0;
    
    const updateCount = () => {
        count += increment;
        if (count < parseInt(target)) {
            counter.textContent = Math.ceil(count).toLocaleString();
            requestAnimationFrame(updateCount);
        } else {
            counter.textContent = target.toLocaleString();
        }
    };
    
    updateCount();
};

// Observe counters
if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                countUp(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// ===========================
// Mouse Follow Effect for Cards
// ===========================
const cards = document.querySelectorAll('.info-card, .business-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});
