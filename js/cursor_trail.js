document.addEventListener('DOMContentLoaded', () => {
  let lastTime = 0;
  const delay = 20;
  let isInside = false;

  const target = document.getElementById('v6_184');

  target.addEventListener('mouseenter', () => {
    isInside = true;
  });

  target.addEventListener('mouseleave', () => {
    isInside = false;
  });

  document.addEventListener('mousemove', function(e) {
    if (!isInside) return;

    const currentTime = Date.now();
    if (currentTime - lastTime > delay) {
      let trail = document.createElement('span');
      trail.className = 'trail';
      trail.textContent = '*';
      document.body.appendChild(trail);

      trail.style.position = 'absolute';
      trail.style.left = (e.pageX - 10) + 'px';
      trail.style.top = (e.pageY - 10) + 'px';

      setTimeout(() => {
        document.body.removeChild(trail);
      }, 150);

      lastTime = currentTime;
    }
  });
});
