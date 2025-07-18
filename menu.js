
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
