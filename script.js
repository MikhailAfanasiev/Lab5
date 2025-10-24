document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const isActive = content.classList.contains('active');

            // Закрываем все открытые секции
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.remove('active');
            });

            // Открываем/закрываем текущую секцию
            if (!isActive) {
                content.classList.add('active');
            }
        });
    });
});