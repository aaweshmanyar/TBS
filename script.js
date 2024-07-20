const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.querySelector('.card-header').addEventListener('click', () => {
        const cardBody = card.querySelector('.card-body');
        const expandIcon = card.querySelector('.expand-icon');
        cardBody.style.display = cardBody.style.display === 'block' ? 'none' : 'block';
        expandIcon.style.transform = cardBody.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});
