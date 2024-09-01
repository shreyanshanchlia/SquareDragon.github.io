document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.info-section');
    
    sections.forEach(section => {
        const header = section.querySelector('h2');
        const content = section.querySelector('.content');
        const icon = header.querySelector('.toggle-icon');
        icon.textContent = icon.textContent === '▼' ? '+' : '-';
        header.addEventListener('click', () => {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            //icon.textContent = icon.textContent === '▼' ? '▲' : '▼';
            icon.textContent = icon.textContent === '+' ? '-' : '+';
        });
    });
});