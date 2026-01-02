/* Advanced cursor movement effect - WORKING */

(function () {
  const dot = document.querySelector('.cursor_dot');
  const outline = document.querySelector('.cursor_outline');

  // sanity check
  if (!dot || !outline) {
    console.error('cursor elements not found. ');
    return;
  } 

  let dotX = window.innerWidth / 2; dotY = window.innerHeight / 2 ;
  let outlineX = dotX; outlineY = dotY;

  // pointer move  - tracks exact position
  document.addEventListener('mousemove', (e) => {
    // set the small dot instantly
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    // upate target for outline 
    dotX = e.clientX;
    dotY = e.clientY;

  }, { passive: true});

  // animation loop for outline
  function animateCursor() {
  outlineX += (dotX - outlineX) * 0.12;
  outlineY += (dotY - outlineY) * 0.12;

  outline.style.left = outlineX + "px";
  outline.style.top = outlineY + "px";

  requestAnimationFrame(animateCursor);

  }

  requestAnimationFrame(animateCursor);


})();




