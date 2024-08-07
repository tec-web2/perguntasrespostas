document.addEventListener('DOMContentLoaded', (event) => {
    const html = document.documentElement;
    const moonIcon = document.getElementById('dark-icon');
    const sunIcon = document.getElementById('light-icon')
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        html.classList.add(savedTheme);
        if(savedTheme === 'light'){
            moonIcon.classList.add('visually-hidden');
            sunIcon.classList.remove('visually-hidden');
        }
    }

    window.toggleMode = function() {
        const isLight = html.classList.toggle('light');
        if (isLight) {
            localStorage.setItem('theme', 'light');
            moonIcon.classList.add('visually-hidden');
            sunIcon.classList.remove('visually-hidden');
        } else {
            localStorage.removeItem('theme');
            moonIcon.classList.remove('visually-hidden');
            sunIcon.classList.add('visually-hidden');
        }
    };

});
