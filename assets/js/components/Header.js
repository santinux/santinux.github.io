export const Header = () => {
    const header = document.createElement('header');
    header.innerHTML = `
        <h1><a href="/">SANTINUX</a></h1>
        <button class="hamburger" aria-label="Menu" data-action="toggle-menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav>
            <ul>
                <li><a href="">Artículos</a></li>
                <li><a href="">Guías</a></li>
                <li><a href="">Portafolio</a></li>
                <li><a href="">Contacto</a></li>
            </ul>
        </nav>
        <p class="theme-toggle">Tema</p>
    `;
    return header;
}
