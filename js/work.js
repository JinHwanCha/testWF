// ===========================
// Work Page JavaScript (work.html)
// 작품 페이지 전용 기능
// ===========================

// ===========================
// Gallery Filter
// ===========================
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

// Get current group from URL or body class
function getCurrentGroup() {
    const urlParams = new URLSearchParams(window.location.search);
    let currentGroup = urlParams.get('group');
    if (!currentGroup) {
        currentGroup = document.body.classList.contains('witness-theme') ? 'witness' : 'fishermen';
    }
    return currentGroup;
}

if (filterButtons.length > 0 && galleryItems.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            const currentGroup = getCurrentGroup();
            
            // Filter gallery items by both category and group
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                const itemGroup = item.getAttribute('data-group');
                
                // Check if item matches both group and filter
                const matchesGroup = itemGroup === currentGroup;
                const matchesFilter = filter === 'all' || category === filter;
                
                if (matchesGroup && matchesFilter) {
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
        });
    });
}

// ===========================
// Mouse Follow Effect for Work Items
// ===========================
const workItems = document.querySelectorAll('.work-item');

workItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});
