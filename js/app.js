import { Header } from './components/Header.js';
import { Main } from './components/Main.js';
import { Footer } from './components/Footer.js';

document.addEventListener('DOMContentLoaded', async () => {
    const app = document.querySelector('#root');
    app.appendChild(Header());
    app.appendChild(Main());
    app.appendChild(Footer());
});

// Event delegation global
document.addEventListener('click', (event) => {
    // Hacer un switch acá
    if (event.target.closest('[data-action="toggle-menu"]')) {
        const header = document.querySelector('header');
        const nav = header.querySelector('nav');
        const hamburger = header.querySelector('.hamburger');
        
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
    if (event.target.matches('[data-action="toggle-theme"]')) {
        //toggleTheme();
    }
});
