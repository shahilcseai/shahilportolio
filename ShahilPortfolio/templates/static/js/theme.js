// Theme handling
function getTheme() {
  if (!localStorage.getItem('theme')) {
    // Default to system theme
    localStorage.setItem('theme', 'system');
  }
  return localStorage.getItem('theme');
}

function setTheme(theme) {
  localStorage.setItem('theme', theme);
  applyTheme(theme);
}

function applyTheme(theme) {
  const isDark = theme === 'dark' || 
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  document.documentElement.classList.toggle('dark-mode', isDark);
}

// Initialize theme immediately
const savedTheme = getTheme();
applyTheme(savedTheme);

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  const currentTheme = getTheme();
  if (currentTheme === 'system') {
    applyTheme('system');
  }
});

// Add active state to theme buttons
document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = getTheme();
  document.querySelectorAll('.theme-btn').forEach(btn => {
    const theme = btn.getAttribute('data-theme');
    if (theme === currentTheme) {
      btn.classList.add('active');
    }
  });
});