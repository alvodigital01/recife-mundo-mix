  document.addEventListener("DOMContentLoaded", function () {
    const elementosCascata = document.querySelectorAll(".animar-cascata");

    function animarScrollCascata() {
      let delay = 0;
      elementosCascata.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const alturaJanela = window.innerHeight * 0.9;

        if (rect.top < alturaJanela && rect.bottom > 0) {
          setTimeout(() => {
            el.classList.add("mostrar");
          }, delay);
          delay += 80; // ⏱️ Mais rápido
        } else {
          el.classList.remove("mostrar"); // 👈 remove animação se sair da tela
        }
      });
    }

    window.addEventListener("scroll", animarScrollCascata);
    animarScrollCascata();
  });