// === Copy to clipboard ===
function copyPrompt(btn) {
  const card = btn.closest('.prompt-card');
  const promptEl = card.querySelector('.prompt-text');
  const text = promptEl.textContent.trim();

  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied');
    btn.innerHTML = '✓ Copied!';
    showToast('Prompt copied to clipboard!');
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = '📋 Copy Prompt';
    }, 2000);
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.classList.add('copied');
    btn.innerHTML = '✓ Copied!';
    showToast('Prompt copied to clipboard!');
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = '📋 Copy Prompt';
    }, 2000);
  });
}

// === Toast notification ===
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = '✅ ' + msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// === Search ===
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');

searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase().trim();
  const cards = document.querySelectorAll('.prompt-card');
  const sections = document.querySelectorAll('.section');
  let totalVisible = 0;

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (!query || text.includes(query)) {
      card.classList.remove('hidden');
      totalVisible++;
    } else {
      card.classList.add('hidden');
    }
  });

  // Hide sections that have no visible cards (but only prompt sections)
  sections.forEach(sec => {
    const visibleCards = sec.querySelectorAll('.prompt-card:not(.hidden)');
    const allCards = sec.querySelectorAll('.prompt-card');
    if (allCards.length > 0 && visibleCards.length === 0 && query) {
      sec.style.display = 'none';
    } else {
      sec.style.display = '';
    }
  });

  // Non-prompt sections (no cards) — hide if query doesn't match section text
  sections.forEach(sec => {
    const allCards = sec.querySelectorAll('.prompt-card');
    if (allCards.length === 0 && query) {
      const sectionText = sec.textContent.toLowerCase();
      sec.style.display = sectionText.includes(query) ? '' : 'none';
    }
  });

  noResults.classList.toggle('show', totalVisible === 0 && query.length > 0);
});

// === Sidebar navigation ===
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        sidebarLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  },
  { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
);

document.querySelectorAll('.section[id]').forEach(sec => observer.observe(sec));

sidebarLinks.forEach(link => {
  link.addEventListener('click', e => {
    // Close mobile sidebar
    document.querySelector('.sidebar').classList.remove('open');
    document.querySelector('.sidebar-overlay').classList.remove('open');
  });
});

// === Mobile menu ===
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.sidebar-overlay');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
});

// === Back to top ===
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backBtn.classList.toggle('show', window.scrollY > 600);
});

backBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === Click on prompt text to copy ===
document.querySelectorAll('.prompt-text').forEach(el => {
  el.addEventListener('click', () => {
    const btn = el.closest('.prompt-card').querySelector('.copy-btn');
    if (btn) copyPrompt(btn);
  });
});
