
   document.addEventListener("DOMContentLoaded", function () {
      const animatedElements = document.querySelectorAll(".animate-left, .animate-right");

      function handleScroll() {
        animatedElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const triggerBottom = window.innerHeight * 0.9;
          const triggerTop = 0;

          if (rect.top < triggerBottom && rect.bottom > triggerTop) {
            el.classList.add("show");
          } else {
            el.classList.remove("show");
          }
        });
      }

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Executa ao carregar
    });
