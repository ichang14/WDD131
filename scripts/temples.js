const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const lastModifiedPara = document.getElementById('lastModified');
if (lastModifiedPara) {
  lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;
}

const menuBtn = document.getElementById('menu');
const nav = document.querySelector('nav.navigation');

if (menuBtn && nav) {

  menuBtn.textContent = '☰';
  menuBtn.setAttribute('aria-label', 'Open navigation menu');
  menuBtn.setAttribute('aria-expanded', 'false');

  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');

    menuBtn.textContent = isOpen ? '✕' : '☰';
    menuBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.textContent = '☰';
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}