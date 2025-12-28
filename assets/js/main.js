(function() {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const nav = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');

  const getPreferred = () => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const applyTheme = (mode) => {
    if (mode === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    toggle && (toggle.textContent = mode === 'light' ? '🌞' : '🌙');
    localStorage.setItem('theme', mode);
  };

  applyTheme(getPreferred());

  toggle?.addEventListener('click', () => {
    const next = root.classList.contains('light') ? 'dark' : 'light';
    applyTheme(next);
  });

  menuToggle?.addEventListener('click', () => {
    nav?.classList.toggle('open');
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });

  const header = document.querySelector('.site-header');
  const updateHeader = () => {
    if (window.scrollY > 12) {
      header?.classList.add('solid');
    } else {
      header?.classList.remove('solid');
    }
  };

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
})();
