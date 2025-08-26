
// Year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  // Copy mint
  const btn = document.getElementById('copyBtn');
  const mintEl = document.getElementById('mintText');
  if (btn && mintEl) {
    btn.addEventListener('click', async () => {
      const text = mintEl.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        const prev = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(()=>btn.textContent = prev, 1200);
      } catch(e) {
        alert('Copied: ' + text);
      }
    });
  }

  // Patriotic toggle
  const toggle = document.getElementById('patrioticToggle');
  const line = document.getElementById('patrioticLine');
  if (toggle && line) {
    toggle.addEventListener('change', () => {
      line.style.display = toggle.checked ? 'block' : 'none';
    });
  }
});
