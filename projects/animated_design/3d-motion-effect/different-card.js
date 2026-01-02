/* 3D tilt interaction — lightweight, respects prefers-reduced-motion.
   Applies transform based on cursor position relative to element center.
*/
(function(){
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const tiltItems = document.querySelectorAll('[data-role="tilt"]');
  tiltItems.forEach(el=>{
    let rect = null;
    const maxTilt = 12; // degrees
    const scale = 1.02;

    function updateRect(){ rect = el.getBoundingClientRect(); }

    function handleMove(e){
      const x = (e.clientX ?? (e.touches && e.touches[0].clientX)) - rect.left;
      const y = (e.clientY ?? (e.touches && e.touches[0].clientY)) - rect.top;
      const px = (x / rect.width) - 0.5;
      const py = (y / rect.height) - 0.5;
      const rx = (-py * maxTilt).toFixed(2);
      const ry = (px * maxTilt).toFixed(2);
      el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
      el.classList.add('is-active');
    }

    function reset(){
      el.style.transform = '';
      el.classList.remove('is-active');
    }

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('touchmove', handleMove, {passive:true});
    el.addEventListener('mouseleave', reset);
    el.addEventListener('touchend', reset);
    window.addEventListener('resize', updateRect);
    // initialize rect when mouse enters
    el.addEventListener('mouseenter', updateRect);
  });
})();


/* GLOBAL 3D TILT FOR ALL CARDS */
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const centerX = r.width / 2;
    const centerY = r.height / 2;

    const rotateX = ((y - centerY) / 12).toFixed(2);
    const rotateY = ((x - centerX) / 12).toFixed(2);

    card.style.transform = `
      rotateX(${ -rotateX }deg)
      rotateY(${ rotateY }deg)
      scale(1.05)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});


// premium, expert-level Magnetic Hover Card
  const cards = document.querySelectorAll('.service-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Set variables for glow position
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);

      // Calculate tilt angles
      const rotateX = ((rect.height / 2 - y) / rect.height) * 15;
      const rotateY = ((x - rect.width / 2) / rect.width) * 15;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      card.style.setProperty('--x', `50%`);
      card.style.setProperty('--y', `50%`);
    });
  });



