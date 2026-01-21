// ===========================
// Common JavaScript for All Pages
// 모든 페이지에서 공통으로 사용되는 기능
// ===========================

// ===========================
// Group Toggle (Witness / Fishermen)
// ===========================
function initGroupToggle() {
    const urlParams = new URLSearchParams(window.location.search);
    const group = urlParams.get('group') || 'fishermen';
    const toggle = document.getElementById('groupToggle');
    const logo = document.querySelector('.logo-text');
    const witnessLabel = document.querySelector('.witness-label');
    const fishermenLabel = document.querySelector('.fishermen-label');
    
    function updateTheme(selectedGroup) {
        if (selectedGroup === 'witness') {
            document.body.classList.add('witness-theme');
            toggle.classList.remove('active');
            if (logo) logo.textContent = 'WITNESS';
            if (witnessLabel) witnessLabel.classList.remove('inactive');
            if (fishermenLabel) fishermenLabel.classList.add('inactive');
            
            // Update hero title for witness
            const heroLines = document.querySelectorAll('.hero-title .line');
            if (heroLines.length >= 4) {
                heroLines[0].innerHTML = `<img src="./images/witness.png" alt="Witness Logo" style="width: 200px; margin:0 auto 20px; border-radius: 100%;">`;
                heroLines[1].textContent = '성령의 권능으로';
                heroLines[2].textContent = '세상의 증인이 되는';
                heroLines[3].textContent = 'Witness';
            }
            const heroSubtitle = document.querySelector('.hero-subtitle');
            if (heroSubtitle) {
                heroSubtitle.textContent = '내수동교회 대학부와 함께 믿음의 여정을 시작하세요';
            }
            
            // Update section headers
            const ceoHeader = document.querySelector('.ceo-message .section-header h2');
            if (ceoHeader) ceoHeader.textContent = '담당사역자 메시지 메시지';
                        // Update CEO message content for witness (대학부)
            const ceoLargeText = document.querySelector('.ceo-text .large-text');
            if (ceoLargeText) {
                ceoLargeText.textContent = '"오직 성령이 너희에게 임하시면 너희가 권능을 받고... 땅 끝까지 이르러 내 증인이 되리라" (사도행전 1:8)';
            }
            
            const ceoParagraphs = document.querySelectorAll('.ceo-text p:not(.large-text)');
            if (ceoParagraphs.length >= 4) {
                ceoParagraphs[0].textContent = 'Witness는 사도행전 1장 8절 말씀처럼, 성령의 권능을 받아 이 땅에서 그리스도의 증인으로 살아가고자 하는 대학생들의 공동체입니다.';
                ceoParagraphs[1].textContent = '우리는 함께 예배하고, 말씀을 나누며, 서로 사랑하고 격려합니다. 대학생으로서 캠퍼스와 사회 속에서 복음을 증거하며, 각자의 달란트를 발견하고 개발하여 하나님 나라를 위해 사용합니다.';
                ceoParagraphs[2].textContent = '내수동교회 대학부 Witness와 함께 믿음의 여정을 시작하시길 초대합니다. 주님 안에서 함께 성장하고, 서로를 세우며, 땅 끝까지 복음을 전하는 대학부 공동체가 되기를 소망합니다.';
            }
            
            const ceoQuote = document.querySelector('.ceo-text blockquote');
            if (ceoQuote) {
                ceoQuote.textContent = '"땅 끝까지 이르러 내 증인이 되리라"';
            }
            
            const ceoSignature = document.querySelector('.ceo-signature strong');
            if (ceoSignature) {
                ceoSignature.textContent = '내수동교회 대학부 목사';
            }
                        const companyInfoHeader = document.querySelector('.company-info .section-header h2');
            if (companyInfoHeader) companyInfoHeader.textContent = '대학부 소개';
            
            // Update info-card titles
            const infoCards = document.querySelectorAll('.info-card h3');
            infoCards.forEach(card => {
                if (card.textContent === '청년부원') {
                    card.textContent = '대학부원';
                }
            });
            
            const businessAreasHeader = document.querySelector('.business-areas .section-header h2');
            if (businessAreasHeader) businessAreasHeader.textContent = '대학부 사역';
            
            const businessAreasSubtitle = document.querySelector('.business-areas .section-header p');
            if (businessAreasSubtitle) businessAreasSubtitle.textContent = '다양한 사역을 통해 함께 성장합니다';
            
            const featuredWorkHeader = document.querySelector('.featured-work .section-header h2');
            if (featuredWorkHeader) featuredWorkHeader.textContent = '최근 활동';
            
            // Update navigation links
            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === '/people/') link.textContent = '대학부원';
            });
            
            // Update footer
            const footerTitle = document.querySelector('.footer-col h4');
            if (footerTitle && footerTitle.textContent === 'Fishermen') {
                footerTitle.textContent = 'Witness';
            }
            const footerDesc = document.querySelector('.footer-col p');
            if (footerDesc && footerDesc.textContent.includes('청년부')) {
                footerDesc.textContent = '내수동교회 대학부 - 세상의 빛과 소금이 되는';
            }
            
            const footerLinks = document.querySelectorAll('.footer-col ul li a');
            footerLinks.forEach(link => {
                if (link.textContent === '청년부원') link.textContent = '대학부원';
            });
            
            const footerBottom = document.querySelector('.footer-bottom p');
            if (footerBottom && footerBottom.textContent.includes('Fishermen')) {
                footerBottom.textContent = '© 2026 Witness 내수동교회 대학부. All Rights Reserved.';
            }
            
            // Update Follow Us section
            const followUsTitle = document.querySelectorAll('.footer-col h4');
            followUsTitle.forEach(title => {
                if (title.textContent === 'Follow Us') {
                    title.textContent = '소통채널';
                }
            });
            
            // Update contact section
            const contactTitle = document.querySelector('.contact-content h2');
            if (contactTitle && contactTitle.textContent.includes('함께하고')) {
                contactTitle.textContent = '함께하고 싶으신가요?';
            }
            const contactDesc = document.querySelector('.contact-content p');
            if (contactDesc && contactDesc.textContent.includes('청년부')) {
                contactDesc.textContent = '내수동교회 대학부 Witness가 여러분을 환영합니다';
            }
            
            // Update statistics
            const statYear = document.querySelector('[data-stat="year"]');
            if (statYear) statYear.textContent = '2015';
            
            const statMembers = document.querySelector('[data-stat="members"]');
            if (statMembers) statMembers.textContent = '38';
            
            const statMemberTitle = document.querySelector('[data-stat="member-title"]');
            if (statMemberTitle) statMemberTitle.textContent = '대학부원';
            
            const statGroups = document.querySelector('[data-stat="groups"]');
            if (statGroups) statGroups.textContent = '5';
            
            const statEvents = document.querySelector('[data-stat="events"]');
            if (statEvents) statEvents.textContent = '10';
            
            // Filter work gallery items by group
            filterWorkByGroup('witness');
            
            // Filter news items by group
            filterNewsByGroup('witness');
            
            // Filter people by group
            filterPeopleByGroup('witness');
            
        } else {
            document.body.classList.remove('witness-theme');
            toggle.classList.add('active');
            if (logo) logo.textContent = 'FISHERMEN';
            if (witnessLabel) witnessLabel.classList.add('inactive');
            if (fishermenLabel) fishermenLabel.classList.remove('inactive');
            
            // Update hero title for fishermen
            const heroLines = document.querySelectorAll('.hero-title .line');
            if (heroLines.length >= 4) {
                heroLines[0].innerHTML = `<img src="./images/fishermen.png" alt="Fishermen Logo" style="filter: brightness(0) invert(1); width: 200px; margin:0 auto 20px;">`;
                heroLines[1].textContent = '사람을 낚는';
                heroLines[2].textContent = '어부가 되리라';
                heroLines[3].textContent = 'Fishermen';
            }
            const heroSubtitle = document.querySelector('.hero-subtitle');
            if (heroSubtitle) {
                heroSubtitle.textContent = '내수동교회 청년부와 함께 믿음의 여정을 시작하세요';
            }
            
            // Update section headers
            const ceoHeader = document.querySelector('.ceo-message .section-header h2');
            if (ceoHeader) ceoHeader.textContent = '담당사역자 메시지 메시지';
                        // Update CEO message content for fishermen (청년부)
            const ceoLargeText = document.querySelector('.ceo-text .large-text');
            if (ceoLargeText) {
                ceoLargeText.textContent = '"나를 따라오라 내가 너희를 사람을 낚는 어부가 되게 하리라" (마태복음 4:19)';
            }
            
            const ceoParagraphs = document.querySelectorAll('.ceo-text p:not(.large-text)');
            if (ceoParagraphs.length >= 4) {
                ceoParagraphs[0].textContent = 'Fishermen은 예수님의 이 말씀처럼, 주님의 부르심에 응답하여 세상 속에서 빛과 소금의 역할을 감당하고자 하는 청년들의 공동체입니다.';
                ceoParagraphs[1].textContent = '우리는 함께 예배하고, 말씀을 나누며, 서로 사랑하고 격려합니다. 각자의 달란트를 발견하고 개발하여 하나님 나라를 위해 사용하며, 이 시대의 청년으로서 복음을 전하는 삶을 살아갑니다.';
                ceoParagraphs[2].textContent = '내수동교회 청년부 Fishermen과 함께 믿음의 여정을 시작하시길 초대합니다. 주님 안에서 함께 성장하고, 서로를 세우며, 세상을 변화시키는 청년 공동체가 되기를 소망합니다.';
            }
            
            const ceoQuote = document.querySelector('.ceo-text blockquote');
            if (ceoQuote) {
                ceoQuote.textContent = '"사람을 낚는 어부가 되리라"';
            }
            
            const ceoSignature = document.querySelector('.ceo-signature strong');
            if (ceoSignature) {
                ceoSignature.textContent = '내수동교회 청년부 목사';
            }
                        const companyInfoHeader = document.querySelector('.company-info .section-header h2');
            if (companyInfoHeader) companyInfoHeader.textContent = '청년부 소개';
            
            // Update info-card titles back to fishermen
            const infoCards = document.querySelectorAll('.info-card h3');
            infoCards.forEach(card => {
                if (card.textContent === '대학부원') {
                    card.textContent = '청년부원';
                }
            });
            
            const businessAreasHeader = document.querySelector('.business-areas .section-header h2');
            if (businessAreasHeader) businessAreasHeader.textContent = '청년부 사역';
            
            const businessAreasSubtitle = document.querySelector('.business-areas .section-header p');
            if (businessAreasSubtitle) businessAreasSubtitle.textContent = '다양한 사역을 통해 함께 성장합니다';
            
            const featuredWorkHeader = document.querySelector('.featured-work .section-header h2');
            if (featuredWorkHeader) featuredWorkHeader.textContent = '최근 활동';
            
            // Update navigation links
            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === '/people/') link.textContent = '청년부원';
            });
            
            // Update footer
            const footerTitle = document.querySelector('.footer-col h4');
            if (footerTitle && footerTitle.textContent === 'Witness') {
                footerTitle.textContent = 'Fishermen';
            }
            const footerDesc = document.querySelector('.footer-col p');
            if (footerDesc && footerDesc.textContent.includes('대학부')) {
                footerDesc.textContent = '내수동교회 청년부 - 사람을 낚는 어부가 되리라';
            }
            
            const footerLinks = document.querySelectorAll('.footer-col ul li a');
            footerLinks.forEach(link => {
                if (link.textContent === '대학부원') link.textContent = '청년부원';
            });
            
            const footerBottom = document.querySelector('.footer-bottom p');
            if (footerBottom && footerBottom.textContent.includes('Witness')) {
                footerBottom.textContent = '© 2026 Fishermen 내수동교회 청년부. All Rights Reserved.';
            }
            
            // Update Follow Us section
            const followUsTitle = document.querySelectorAll('.footer-col h4');
            followUsTitle.forEach(title => {
                if (title.textContent === '소통채널') {
                    title.textContent = 'Follow Us';
                }
            });
            
            // Update contact section
            const contactTitle = document.querySelector('.contact-content h2');
            if (contactTitle && contactTitle.textContent.includes('함께하고')) {
                contactTitle.textContent = '함께하고 싶으신가요?';
            }
            const contactDesc = document.querySelector('.contact-content p');
            if (contactDesc && contactDesc.textContent.includes('대학부')) {
                contactDesc.textContent = '내수동교회 청년부 Fishermen이 여러분을 환영합니다';
            }
            
            // Update statistics
            const statYear = document.querySelector('[data-stat="year"]');
            if (statYear) statYear.textContent = '2010';
            
            const statMembers = document.querySelector('[data-stat="members"]');
            if (statMembers) statMembers.textContent = '45';
            
            const statMemberTitle = document.querySelector('[data-stat="member-title"]');
            if (statMemberTitle) statMemberTitle.textContent = '청년부원';
            
            const statGroups = document.querySelector('[data-stat="groups"]');
            if (statGroups) statGroups.textContent = '6';
            
            const statEvents = document.querySelector('[data-stat="events"]');
            if (statEvents) statEvents.textContent = '12';
            
            // Filter work gallery items by group
            filterWorkByGroup('fishermen');
            
            // Filter news items by group
            filterNewsByGroup('fishermen');
            
            // Filter people by group
            filterPeopleByGroup('fishermen');
        }
    }
    
    // Filter work gallery by group
    function filterWorkByGroup(group) {
        const galleryItems = document.querySelectorAll('.gallery-item[data-group]');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const activeFilter = document.querySelector('.filter-btn.active');
        const currentFilter = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
        
        galleryItems.forEach(item => {
            const itemGroup = item.getAttribute('data-group');
            const itemCategory = item.getAttribute('data-category');
            
            // Check both group and current filter
            const matchesGroup = itemGroup === group;
            const matchesFilter = currentFilter === 'all' || itemCategory === currentFilter;
            
            if (matchesGroup && matchesFilter) {
                item.style.display = 'block';
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            } else {
                item.style.display = 'none';
                item.style.opacity = '0';
            }
        });
        
        // Reset filter to "all" when switching groups
        if (filterButtons.length > 0) {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            const allButton = document.querySelector('.filter-btn[data-filter="all"]');
            if (allButton) allButton.classList.add('active');
        }
    }
    
    // Filter news by group
    function filterNewsByGroup(group) {
        const newsCards = document.querySelectorAll('.news-card[data-group]');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const activeFilter = document.querySelector('.filter-btn.active');
        const currentFilter = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
        
        newsCards.forEach(card => {
            const itemGroup = card.getAttribute('data-group');
            const itemCategory = card.getAttribute('data-category');
            
            // Check both group and current filter
            const matchesGroup = itemGroup === group;
            const matchesFilter = currentFilter === 'all' || itemCategory === currentFilter;
            
            if (matchesGroup && matchesFilter) {
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });
        
        // Reset filter to "all" when switching groups
        if (filterButtons.length > 0) {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            const allButton = document.querySelector('.filter-btn[data-filter="all"]');
            if (allButton) allButton.classList.add('active');
        }
        
        // Trigger pagination update if on news page
        if (typeof showPage === 'function') {
            currentPage = 1; // Reset to first page
            showPage();
        }
    }
    
    // Filter people by group
    function filterPeopleByGroup(group) {
        const headerContents = document.querySelectorAll('.header-content[data-group]');
        const cultureContents = document.querySelectorAll('.culture-content[data-group]');
        const teamMembers = document.querySelectorAll('.team-member[data-group]');
        const departmentCards = document.querySelectorAll('.department-card[data-group]');
        const careersTexts = document.querySelectorAll('.careers-text[data-group]');
        
        headerContents.forEach(content => {
            const itemGroup = content.getAttribute('data-group');
            
            if (itemGroup === group) {
                content.style.display = 'block';
                setTimeout(() => {
                    content.style.opacity = '1';
                }, 50);
            } else {
                content.style.opacity = '0';
                setTimeout(() => {
                    content.style.display = 'none';
                }, 300);
            }
        });
        
        cultureContents.forEach(content => {
            const itemGroup = content.getAttribute('data-group');
            
            if (itemGroup === group) {
                content.style.display = 'grid';
                setTimeout(() => {
                    content.style.opacity = '1';
                }, 50);
            } else {
                content.style.opacity = '0';
                setTimeout(() => {
                    content.style.display = 'none';
                }, 300);
            }
        });
        
        teamMembers.forEach(member => {
            const itemGroup = member.getAttribute('data-group');
            
            if (itemGroup === group) {
                member.style.display = 'block';
                setTimeout(() => {
                    member.style.opacity = '1';
                    member.style.transform = 'translateY(0)';
                }, 50);
            } else {
                member.style.opacity = '0';
                member.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    member.style.display = 'none';
                }, 300);
            }
        });
        
        departmentCards.forEach(card => {
            const itemGroup = card.getAttribute('data-group');
            
            if (itemGroup === group) {
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
        
        careersTexts.forEach(text => {
            const itemGroup = text.getAttribute('data-group');
            
            if (itemGroup === group) {
                text.style.display = 'block';
                setTimeout(() => {
                    text.style.opacity = '1';
                }, 50);
            } else {
                text.style.opacity = '0';
                setTimeout(() => {
                    text.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Initialize theme
    updateTheme(group);
    
    // Toggle click handler
    if (toggle) {
        toggle.addEventListener('click', () => {
            // 클릭 시마다 현재 URL에서 group 파라미터를 새로 읽음
            const currentUrlParams = new URLSearchParams(window.location.search);
            const currentGroup = currentUrlParams.get('group') || 'fishermen';
            const newGroup = currentGroup === 'witness' ? 'fishermen' : 'witness';
            
            // Update URL without reload
            const newUrl = new URL(window.location.href);
            newUrl.searchParams.set('group', newGroup);
            window.history.pushState({}, '', newUrl);
            
            updateTheme(newGroup);
        });
    }
    
    // Handle browser back/forward
    window.addEventListener('popstate', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const group = urlParams.get('group') || 'fishermen';
        updateTheme(group);
    });
}

// Add group parameter to all internal links on click
function addGroupToLink(event) {
    const link = event.currentTarget;
    const href = link.getAttribute('href');
    
    // Skip if external
    if (!href || href.startsWith('http')) {
        return;
    }
    
    // Get current group from URL or body class
    const urlParams = new URLSearchParams(window.location.search);
    let currentGroup = urlParams.get('group');
    
    // If no URL param, check body class
    if (!currentGroup) {
        currentGroup = document.body.classList.contains('witness-theme') ? 'witness' : 'fishermen';
    }
    
    // Handle anchor-only links (like #contact on same page)
    if (href.startsWith('#') && !href.startsWith('/#')) {
        event.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
        return;
    }
    
    // Only add if group is witness (fishermen is default)
    if (currentGroup === 'witness' && !href.includes('group=')) {
        event.preventDefault();
        
        // Handle /#contact style links (cross-page anchors)
        if (href.includes('#')) {
            // Split URL and anchor
            const [path, anchor] = href.split('#');
            const separator = path.includes('?') ? '&' : '?';
            // Put group before anchor: /?group=witness#contact
            window.location.href = `${path}${separator}group=${currentGroup}#${anchor}`;
        } else {
            // Regular page link
            const separator = href.includes('?') ? '&' : '?';
            window.location.href = `${href}${separator}group=${currentGroup}`;
        }
    }
}

// Attach click handlers to all internal links
function attachLinkHandlers() {
    const links = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"], .nav-menu a, .logo a');
    links.forEach(link => {
        link.removeEventListener('click', addGroupToLink); // Remove old listeners
        link.addEventListener('click', addGroupToLink);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initGroupToggle();
    attachLinkHandlers();
    
    // Re-attach handlers when toggle is clicked
    const toggle = document.getElementById('groupToggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            setTimeout(attachLinkHandlers, 50);
        });
    }
});

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
// Console Message
// ===========================
console.log('%c🚀 Creative Agency Website', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'font-size: 14px; color: #764ba2;');
