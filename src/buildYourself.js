document.addEventListener('DOMContentLoaded', () => {
    const themes = document.querySelector('.themes');
    let selectedTheme = localStorage.getItem('theme') || 'yellow';

    // Apply the stored or default theme
    document.getElementById('notebook').className = `w-72 h-96 bg-${selectedTheme}-500 border-2 border-gray-300 mb-6`;

    Array.from(themes.children).forEach((theme) => {
        theme.addEventListener('click', (e) => {
            let color = e.target.dataset.color;

            // Update notebook background color
            document.getElementById('notebook').className = `w-72 h-96 bg-${color}-500 border-2 border-gray-300 mb-6`;
            localStorage.setItem('theme', color);
        });
    });
});
