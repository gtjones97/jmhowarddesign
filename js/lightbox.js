(() => {
    const lightbox = document.getElementById('lightbox');
    const imgEl = lightbox.querySelector('.lightbox__img');
    const closeBtn = lightbox.querySelector('.lightbox__close');
  
    let lastScrollY = 0;
  
    function openLightbox(src, alt) {
      lastScrollY = window.scrollY || 0;
  
      imgEl.src = src;
      imgEl.alt = alt || '';
  
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');
    }
  
    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
  
      // Clear src to free memory (big PNGs)
      imgEl.src = '';
  
      // Return to where user was
      window.scrollTo({ top: lastScrollY });
    }
  
    const MOBILE_BREAKPOINT = 768;

    document.addEventListener('click', (e) => {
      // Disable lightbox on mobile
      if (window.innerWidth <= MOBILE_BREAKPOINT) return;
    
      const img = e.target.closest('.client-grid-row img');
      if (!img) return;
    
      const full = img.dataset.full || img.currentSrc || img.src;
      openLightbox(full, img.alt);
    });
  
    closeBtn.addEventListener('click', closeLightbox);
  
    // Click outside image closes
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  
    // ESC closes
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  })();
  