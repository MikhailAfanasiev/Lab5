document.addEventListener('DOMContentLoaded', function () {
    // Аккордеон
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const isActive = content.classList.contains('active');

            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.remove('active');
            });

            if (!isActive) {
                content.classList.add('active');
            }
        });
    });

    // Кнопка "Наверх"
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Фотогалерея с фильтрацией
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryImages = document.querySelectorAll('.gallery img');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Удаляем класс active у всех кнопок и добавляем текущей
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Фильтруем изображения
            const category = this.getAttribute('data-category');
            galleryImages.forEach(img => {
                if (category === 'all' || img.getAttribute('data-category') === category) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        });
    });

    // Модальное окно
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');

    galleryImages.forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = 'flex';
            modalImage.src = this.src;
            modalImage.alt = this.alt;
        });
    });

    modalClose.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
