
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdown = dropdownToggle.closest(".dropdown");

    // Alternar menu mobile
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });

    // Alternar submenu no mobile
    dropdownToggle.addEventListener("click", function (e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        dropdown.classList.toggle("open");
      }
    });

    // Fecha o menu ao clicar fora dele (exceto se clicando no submenu)
    document.addEventListener("click", function (e) {
      const isClickInsideMenu = navMenu.contains(e.target) || menuToggle.contains(e.target);
      const isClickInsideDropdown = dropdown.contains(e.target);

      if (!isClickInsideMenu && !isClickInsideDropdown) {
        navMenu.classList.remove("show");
        dropdown.classList.remove("open");
      }
    });

    // Fecha o menu mobile ao clicar em um link (exceto se for o toggle do submenu)
    document.querySelectorAll(".nav-menu a").forEach(link => {
      link.addEventListener("click", (e) => {
        if (window.innerWidth < 992) {
          const isDropdownToggle = link.classList.contains("dropdown-toggle");
          if (!isDropdownToggle) {
            navMenu.classList.remove("show");
            dropdown.classList.remove("open");
          }
        }
      });
    });
  });

  // Bloquear clique com o botão direito
  document.addEventListener('contextmenu', event => event.preventDefault());

  // Bloquear atalhos comuns (Ctrl+U, Ctrl+Shift+I, F12, Ctrl+C, Ctrl+X)
  document.addEventListener('keydown', function(e) {
    // Ctrl+U
    if (e.ctrlKey && e.key.toLowerCase() === 'u') {
      e.preventDefault();
    }

    // Ctrl+Shift+I ou F12 (Inspecionar)
    if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') || e.key === 'F12') {
      e.preventDefault();
    }

    // Ctrl+C (copiar) ou Ctrl+X (recortar)
    if (e.ctrlKey && ['c', 'x'].includes(e.key.toLowerCase())) {
      e.preventDefault();
    }
  });

  // Bloquear seleção de texto
  document.addEventListener('selectstart', e => e.preventDefault());
