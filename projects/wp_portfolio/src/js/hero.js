const dots = document.querySelectorAll(".dot");

const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

const dotsData = [];

dots.forEach(dot => {
  const width = dot.offsetWidth;
  const height = dot.offsetHeight;
  const horizontal = Math.random() > 0.5;  // random horizontal or vertical movement
  const speedBase = 0.5 + Math.random();   // base speed
  
  // Start position fully inside viewport
  let posX = Math.random() * (viewportWidth - width);
  let posY = Math.random() * (viewportHeight - height);

  dotsData.push({
    element: dot,
    horizontal,
    speed: speedBase,
    posX,
    posY,
    width,
    height,
    direction: 1
  });
});

function animateDots() {
  dotsData.forEach(dot => {
    dot.speed = Math.min(dot.speed + 0.005, 5);

    if(dot.horizontal) {
      dot.posX += dot.speed * dot.direction;

      // Bounce back on edges, considering dot size!
      if(dot.posX > viewportWidth - dot.width) {
        dot.posX = viewportWidth - dot.width;
        dot.direction *= -1;
      } else if(dot.posX < 0) {
        dot.posX = 0;
        dot.direction *= -1;
      }
    } else {
      dot.posY += dot.speed * dot.direction;

      if(dot.posY > viewportHeight - dot.height) {
        dot.posY = viewportHeight - dot.height;
        dot.direction *= -1;
      } else if(dot.posY < 0) {
        dot.posY = 0;
        dot.direction *= -1;
      }
    }

    dot.element.style.transform = `translate(${dot.posX}px, ${dot.posY}px)`;
  });

  requestAnimationFrame(animateDots);
}

animateDots();

// Update viewport size on resize
window.addEventListener('resize', () => {
  viewportWidth = window.innerWidth;
  viewportHeight = window.innerHeight;
});
