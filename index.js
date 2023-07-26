nombreUI = document.querySelector("#nombre");
procedimientoUI = document.querySelector("#procedimiento");
fechaUI = document.querySelector("#fecha");
observacionesUI = document.querySelector("#observaciones");
botonUI = document.querySelector(".button");
contenedorUI = document.querySelector(".contenedor");
formulario = document.querySelector("#formulario");

document.addEventListener("DOMContentLoaded", () => {
  let arreglo = JSON.parse(localStorage.getItem("citas"));

  if (arreglo !== null) {
    contenedorUI.innerHTML = arreglo.map((cita)=>{
        return `
        <h1>${cita.nombre}</h1>
        `
    }).join("")
  }
});

botonUI.addEventListener("click", (evt) => {
  evt.preventDefault();

  const objeto = {
    nombre: nombreUI.value,
    procedimiento: procedimientoUI.value,
    prioridad: document.querySelector("#prioridad:checked").value,
    fecha: fechaUI.value,
    observaciones: observacionesUI.value,
  };

  let arreglo = JSON.parse(localStorage.getItem("citas"));
  console.log(arreglo);
  arreglo !== null ? arreglo.push(objeto) : (arreglo = [objeto]);

  localStorage.setItem("citas", JSON.stringify(arreglo));
  formulario.reset();
});
