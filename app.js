// MaarstOn VPN - Web Portal Controller
// Minimalist Monochromatic Theme & Navigation Interactions

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSmoothScroll();
});

// 1. Dark / Light Theme Engine
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const savedTheme = localStorage.getItem('maarston-theme') || 'dark';

  applyTheme(savedTheme, themeIcon);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next, themeIcon);
    });
  }
}

function applyTheme(theme, iconEl) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('maarston-theme', theme);
  if (iconEl) {
    iconEl.className = theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

// 2. Smooth Scrolling & Anchor Navigation
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link, a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navOffset = 70;
          const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}
