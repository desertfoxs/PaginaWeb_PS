const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const teamMembers = document.querySelectorAll('.team-member');
let currentIndex = 0;

function updateCarousel() {
    const offset = currentIndex * -300 + 300; // Center the active member
    carousel.style.transform = `translateX(${offset}px)`;
    
    teamMembers.forEach((member, index) => {
        if (index === currentIndex) {
            member.classList.add('active');
        } else {
            member.classList.remove('active');
        }
    });

    // Update button visibility
    prevBtn.style.display = currentIndex > 0 ? 'flex' : 'none';
    nextBtn.style.display = currentIndex < teamMembers.length - 1 ? 'flex' : 'none';
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < teamMembers.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

// Initialize
updateCarousel();
