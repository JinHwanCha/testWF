// ===========================
// People Page JavaScript (people.html)
// 피플 페이지 전용 기능
// ===========================

// ===========================
// Team Member Interactions
// ===========================
const teamMembers = document.querySelectorAll('.team-member');

if (teamMembers.length > 0) {
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'translateY(-10px)';
        });
        
        member.addEventListener('mouseleave', () => {
            member.style.transform = 'translateY(0)';
        });
    });
}

// ===========================
// Department Cards Hover Effect
// ===========================
const departmentCards = document.querySelectorAll('.department-card');

if (departmentCards.length > 0) {
    departmentCards.forEach(card => {
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
}

// ===========================
// Leadership Team Click Events (optional)
// ===========================
const leadershipProfiles = document.querySelectorAll('.team-member');

if (leadershipProfiles.length > 0) {
    leadershipProfiles.forEach(profile => {
        profile.addEventListener('click', () => {
            // 여기에 모달 창이나 상세 프로필 보기 기능을 추가할 수 있습니다
            console.log('Team member clicked:', profile.querySelector('h3')?.textContent);
        });
    });
}
