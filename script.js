// Плавное появление карточек при скролле
const members = document.querySelectorAll('.member');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

members.forEach(member => observer.observe(member));
