// temples.js
// Author: Ilich Chang Vasquez
// Handles: footer dynamic content + hamburger menu toggle

// ---- Footer: current year ----
const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ---- Footer: last modified date ----
const lastModifiedPara = document.getElementById('lastModified');
if (lastModifiedPara) {
  lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;
}

// ---- Hamburger menu toggle ----
const menuBtn = document.getElementById('menu');
const nav = document.querySelector('nav.navigation');

if (menuBtn && nav) {
  // Set initial icon
  menuBtn.textContent = '☰';
  menuBtn.setAttribute('aria-label', 'Open navigation menu');
  menuBtn.setAttribute('aria-expanded', 'false');

  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');

    // Swap icon between hamburger and X
    menuBtn.textContent = isOpen ? '✕' : '☰';
    menuBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when a nav link is clicked (good UX on mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.textContent = '☰';
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}