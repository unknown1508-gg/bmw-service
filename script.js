// ===== Мобильное меню =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.textContent = isOpen ? '✕' : '☰';
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
    });
});

// ===== Форма записи =====
const bookingForm = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = bookingForm.elements['name'].value.trim();
    formMessage.textContent = `Спасибо, ${name}! Ваша заявка принята, мы свяжемся с вами для подтверждения.`;
    formMessage.hidden = false;
    bookingForm.reset();
});

// ===== Плавное появление блоков при прокрутке =====
const revealItems = document.querySelectorAll('.about, .services h2, .card, .booking, .contacts');

revealItems.forEach(item => item.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    let delay = 0;
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            setTimeout(() => target.classList.add('visible'), delay);
            delay += 100;
            observer.unobserve(target);
        }
    });
}, { threshold: 0.15 });

revealItems.forEach(item => observer.observe(item));