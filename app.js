// MaarstOn VPN - Web Portal Controller
// Dark / Light Theme Engine & Smart Scroll Navigation

// Ensure DOM is ready before attaching listeners
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function initApp() {
  initTheme();
  initSmartHeader();
  initSmoothScroll();
}

// 1. Dark / Light Theme Engine
function initTheme() {
  let savedTheme = 'dark';
  try {
    savedTheme = localStorage.getItem('maarston-theme') || 'dark';
  } catch (e) {
    savedTheme = 'dark';
  }
  setTheme(savedTheme);

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn && !themeToggleBtn.dataset.themeBound) {
    themeToggleBtn.dataset.themeBound = 'true';
    themeToggleBtn.addEventListener('click', function (e) {
      e.preventDefault();
      toggleTheme();
    });
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
}

// Expose globally
window.toggleTheme = toggleTheme;

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (document.body) {
    document.body.setAttribute('data-theme', theme);
  }
  try {
    localStorage.setItem('maarston-theme', theme);
  } catch (e) {}

  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.className = theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

// 2. Smart Navbar (Hides smoothly on scroll down, appears instantly on scroll up)
function initSmartHeader() {
  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  let isTicking = false;

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        const navbar = document.querySelector('.navbar');
        if (!navbar) {
          isTicking = false;
          return;
        }

        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

        // When at or near the top of the page, always show header
        if (currentScrollY <= 15) {
          navbar.classList.remove('nav-hidden');
          navbar.classList.remove('nav-scrolled');
          lastScrollY = currentScrollY;
          isTicking = false;
          return;
        }

        navbar.classList.add('nav-scrolled');

        // Scrolling down past 70px -> hide header smoothly
        if (currentScrollY > lastScrollY && currentScrollY > 70) {
          navbar.classList.add('nav-hidden');
        }
        // Scrolling up -> show header immediately
        else if (currentScrollY < lastScrollY) {
          navbar.classList.remove('nav-hidden');
        }

        lastScrollY = currentScrollY;
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });
}

// 3. Smooth Anchor Scrolling
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link, a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navOffset = 75;
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
