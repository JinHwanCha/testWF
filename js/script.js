// ===========================
// Navigation
// ===========================
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ===========================
// Smooth Scroll
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Scroll Reveal Animation
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Add scroll-reveal class to elements
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll(
        '.info-card, .business-card, .work-item, .news-card, .team-member, .department-card, .gallery-item'
    );
    
    revealElements.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
});

// ===========================
// Work Page - Filter
// ===========================
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const newsCards = document.querySelectorAll('.news-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Filter gallery items (Work page)
            if (galleryItems.length > 0) {
                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            }
            
            // Filter news cards (News page)
            if (newsCards.length > 0) {
                newsCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            }
        });
    });
}

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
// Newsletter Form
// ===========================
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Simple validation
        if (email && email.includes('@')) {
            alert('구독해 주셔서 감사합니다! 곧 최신 소식을 이메일로 받아보실 수 있습니다.');
            newsletterForm.reset();
        } else {
            alert('올바른 이메일 주소를 입력해주세요.');
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
// Image Lazy Loading Effect
// ===========================
const imageElements = document.querySelectorAll('.work-image, .gallery-image, .news-image, .featured-image');

imageElements.forEach((img, index) => {
    // Create different gradient colors for variety
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    ];
    
    img.style.background = colors[index % colors.length];
});

// ===========================
// Page Load Animation
// ===========================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===========================
// Back to Top Button
// ===========================
const backToTop = document.createElement('button');
backToTop.innerHTML = '↑';
backToTop.className = 'back-to-top';
backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--accent-color, #ff6b35);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
`;

document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
    } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// Mouse Follow Effect (Optional)
// ===========================
const cards = document.querySelectorAll('.info-card, .business-card, .work-item');

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

// ===========================
// Pagination for News Page
// ===========================
const paginationContainer = document.querySelector('.pagination');
const newsCardsAll = document.querySelectorAll('.news-card');

if (paginationContainer && newsCardsAll.length > 0) {
    const itemsPerPage = 6; // 페이지당 표시할 뉴스 개수
    let currentPage = 1;
    const totalPages = Math.ceil(newsCardsAll.length / itemsPerPage);
    
    // 페이지 버튼 동적 생성
    function renderPagination() {
        paginationContainer.innerHTML = '';
        
        // Previous 버튼
        if (currentPage > 1) {
            const prevBtn = document.createElement('button');
            prevBtn.className = 'page-btn';
            prevBtn.textContent = '← Prev';
            prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
            paginationContainer.appendChild(prevBtn);
        }
        
        // 페이지 번호 버튼
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = 'page-btn';
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }
            pageBtn.textContent = i;
            pageBtn.addEventListener('click', () => goToPage(i));
            paginationContainer.appendChild(pageBtn);
        }
        
        // Next 버튼
        if (currentPage < totalPages) {
            const nextBtn = document.createElement('button');
            nextBtn.className = 'page-btn';
            nextBtn.textContent = 'Next →';
            nextBtn.addEventListener('click', () => goToPage(currentPage + 1));
            paginationContainer.appendChild(nextBtn);
        }
    }
    
    // 특정 페이지로 이동
    function goToPage(page) {
        currentPage = page;
        showPage(currentPage);
        renderPagination();
        
        // 페이지 전환 시 부드럽게 스크롤
        const newsSection = document.querySelector('.news-grid-section');
        if (newsSection) {
            window.scrollTo({
                top: newsSection.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    }
    
    // 현재 페이지의 아이템 표시
    function showPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        newsCardsAll.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // 초기 페이지 렌더링
    renderPagination();
    showPage(1);
}

// ===========================
// Console Message
// ===========================
console.log('%c🚀 Creative Agency Website', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'font-size: 14px; color: #764ba2;');