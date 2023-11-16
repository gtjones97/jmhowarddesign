let lastTime = 0;
const delay = 25; // Delay in milliseconds between asterisks

document.addEventListener('mousemove', function(e) {
  const currentTime = Date.now();
  if (currentTime - lastTime > delay) {
    let trail = document.createElement('span');
    trail.className = 'trail';
    trail.textContent = '*'; // Asterisk character for fairy dust
    document.body.appendChild(trail);
    
    trail.style.left = (e.pageX - 10) + 'px';
    trail.style.top = (e.pageY - 10) + 'px';
    
    setTimeout(() => {
      document.body.removeChild(trail);
    }, 125); // Adjust time for fairy dust to disappear

    lastTime = currentTime;
  }
});



