var tareas = [
  { tarea: "Pintar la fachada de la casa" },
  { tarea: "Comprar comida para el perro" },
  { tarea: "Pagar la tarjeta de crédito" },
];

mostrarlista(tareas);

function mostrarlista(lista) {
  var cuerpoTabla = document.getElementById("cuerpo-tabla");
  cuerpoTabla.innerHTML = "";
  for (let i = 0; i < lista.length; i++) {
    cuerpoTabla.innerHTML += `
        <tr>           
            <td>${lista[i].tarea}</td>
            <td>
                <button class="btn btn-danger" onclick="fintarea(${i})">Finalizar</button>
            </td>           
        </tr>`;
  }
}

function fintarea(indice) {
  tareas.splice(indice, 1);
  mostrarlista(tareas);
}

document.querySelector(".btn.btn-success").addEventListener("click", () => {
  document.getElementById("formulario").style.display = "block";
});

document.querySelector(".btn.btn-primary").addEventListener("click", () => {
  var nuevaTarea = document.getElementById("nuevaTarea").value;

  if (nuevaTarea.trim() !== "") {
    tareas.push({ tarea: nuevaTarea });
    mostrarlista(tareas); 
    document.getElementById("nuevaTarea").value = ""; 
    document.getElementById("formulario").style.display = "none"; 
  } else {
    alert("El campo de nueva tarea no puede estar vacío.");
  }
});
