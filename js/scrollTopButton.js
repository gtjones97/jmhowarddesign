const scrollBtn = document.getElementById("scrollTopBtn");
  
      window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
          scrollBtn.style.opacity = "0.8";
          scrollBtn.style.pointerEvents = "auto";
        } else {
          scrollBtn.style.opacity = "0";
          scrollBtn.style.pointerEvents = "none";
        }
      });
  
      scrollBtn.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });