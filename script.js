document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loading-overlay');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1800);
  }

  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});