$(document).ready(function () {
  let productos = [];
  document.querySelectorAll(".producto").forEach((producto) => {
    producto.addEventListener("click", (event) => {
      agregarimagen(event.target);
    });
  });

  function agregarimagen(imagen) {
    if (imagen != 0) {
      imagen.style.opacity = "0.6";
      if (!productos.includes(imagen)) {
        productos.push(imagen);
        mostrarimagenes();
      }
    }
  }

  document.querySelectorAll(".producto").forEach((producto) => {
    producto.addEventListener("dblclick", (event) => {
      const imagen = event.target;
      imagen.style.opacity = "1";
      productos = productos.filter((producto) => producto !== imagen);
      mostrarimagenes();
    });
  });
  function mostrarimagenes() {
    const modal = document.getElementById("modalBody");
    modal.innerHTML = "";
    productos.forEach((producto) => {
      const imagen = document.createElement("img");
      imagen.src = producto.src;
      imagen.width = 150;
      imagen.height = 150;
      modal.appendChild(imagen);
    });
  }
});
