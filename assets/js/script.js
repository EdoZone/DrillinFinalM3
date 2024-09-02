// Tooltip de Boostrap
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const perfiles = document.querySelectorAll(".perfil__id");
const aside = document.querySelector("aside");
const main = document.querySelector("main");
const volverBtn = document.querySelector(".volver-btn");

// Nombre perfil en negrita si notificador tiene texto o cammbio al hacer click
document.addEventListener("DOMContentLoaded", function () {
  perfiles.forEach((perfil) => {
    const notificador = perfil.querySelector(".notificador span");
    const nombre = perfil.querySelector(".perfil__estado h6");

    if (!notificador.textContent.trim()) {
      perfil.querySelector(".notificador").style.display = "none";
      nombre.style.fontWeight = "normal";
    }

    perfil.addEventListener("click", function () {
      perfil.querySelector(".notificador").style.display = "none";
      nombre.style.fontWeight = "normal";
    });
  });
});

function mostrarConversacion() {
  if (window.innerWidth <= 768) {
    aside.style.display = "none"; // Ocultar el listado de perfiles
    main.style.display = "block"; // Mostrar la conversación
  }
}

function volverAListado() {
    aside.style.display = 'block'; // Mostrar el listado de perfiles
    main.style.display = 'none'; // Ocultar la conversación
  }

  perfiles.forEach(perfil => {
    perfil.addEventListener('click', function () {
      mostrarConversacion();
    });
  });

  volverBtn.addEventListener('click', volverAListado);

  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      // En pantallas grandes, mostrar ambos elementos
      aside.style.display = 'block';
      main.style.display = 'block';
    } else {
      // En pantallas móviles, solo mostrar el listado de perfiles
      aside.style.display = 'block';
      main.style.display = 'none';
    }
  });