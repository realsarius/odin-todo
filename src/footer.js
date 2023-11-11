const footer = document.createElement('footer');
const footerContent = document.createElement('div');
const footerText = document.createElement('div');

footerText.textContent = `realsarius © ${new Date().getFullYear()}`;
footerText.className = 'footerText';

footerContent.className = 'footerContent';
footerContent.appendChild(footerText);

footer.id = 'footer';
footer.appendChild(footerContent);

export default footer;
