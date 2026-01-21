// ===========================
// News Page JavaScript (news.html)
// 뉴스 페이지 전용 기능
// ===========================

const paginationContainer = document.querySelector('.pagination');
const newsCardsAll = document.querySelectorAll('.news-card');
const filterButtons = document.querySelectorAll('.filter-btn');

// 페이지네이션 설정
const itemsPerPage = 6; // 페이지당 표시할 뉴스 개수
let currentPage = 1;
let currentFilter = 'all';

// ===========================
// 현재 그룹 가져오기
// ===========================
function getCurrentGroup() {
    const urlParams = new URLSearchParams(window.location.search);
    const groupParam = urlParams.get('group');
    if (groupParam === 'witness' || groupParam === 'fishermen') {
        return groupParam;
    }
    return document.body.classList.contains('witness-theme') ? 'witness' : 'fishermen';
}

// ===========================
// 필터링된 카드 가져오기
// ===========================
function getFilteredCards() {
    const currentGroup = getCurrentGroup();
    return Array.from(newsCardsAll).filter(card => {
        const category = card.getAttribute('data-category');
        const group = card.getAttribute('data-group');
        const matchesGroup = group === currentGroup;
        const matchesFilter = currentFilter === 'all' || category === currentFilter;
        return matchesGroup && matchesFilter;
    });
}

// ===========================
// 페이지 버튼 렌더링
// ===========================
function renderPagination() {
    if (!paginationContainer) return;
    
    const filteredCards = getFilteredCards();
    const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
    
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

// ===========================
// 페이지 이동
// ===========================
function goToPage(page) {
    currentPage = page;
    showPage();
    
    // 페이지 전환 시 부드럽게 스크롤
    const newsSection = document.querySelector('.news-grid-section');
    if (newsSection) {
        window.scrollTo({
            top: newsSection.offsetTop - 100,
            behavior: 'smooth'
        });
    }
}

// ===========================
// 페이지 표시
// ===========================
function showPage() {
    const filteredCards = getFilteredCards();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // 모든 카드를 순회하면서 표시/숨김 처리
    newsCardsAll.forEach(card => {
        const cardIndex = filteredCards.indexOf(card);
        
        if (cardIndex >= startIndex && cardIndex < endIndex) {
            // 현재 페이지에 표시할 카드
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        } else {
            // 숨길 카드
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
    
    renderPagination();
}

// ===========================
// News Filter
// ===========================
if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            currentFilter = button.getAttribute('data-filter');
            currentPage = 1; // 필터 변경 시 첫 페이지로
            showPage();
        });
    });
}

// ===========================
// 초기화
// ===========================
if (paginationContainer && newsCardsAll.length > 0) {
    showPage();
}
