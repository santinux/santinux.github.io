export const Footer = () => {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&#x1F12F; ${new Date().getFullYear()} - Santino Fuentes</p>
    `;
    return footer;
};
