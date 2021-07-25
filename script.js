class Team {
  constructor(color, fecha, personas) {
    this.color = color;
    this.fecha = fecha;
    this.personas = personas; //array de personas
  }
  agregarPersona(persona) {
    this.personas.push(persona);
  }
}
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
let arrayTablaCompleta = [];

//***************LOCALSTORAGE*****************/
//funcion guardar
function guardarLocalStorage(clave, valor) {
  localStorage.setItem(clave, JSON.stringify(valor));
}
//funcion descargar
function descargarLocalStorage(clave) {
  return JSON.parse(localStorage.getItem(clave));
}
//*********************************/

function mostrarEquipos() {
  console.log("Equipos: ", descargarLocalStorage("TablaCompleta"));
}

function anadirEquipo(e) {
  e.preventDefault();

  const color = document.getElementById("color").value;
  const fecha = document.getElementById("fecha").value;
  const cantidadIntegrantes = document.getElementById("integrantes").value;
  const personas = [];

  for (let index = 0; index < cantidadIntegrantes; index++) {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    personas.push(new Persona(nombre, edad));
  }
  personas.forEach((personas) => {
    let p1 = document.createElement("p");
    p1.textContent = `${personas.nombre}`;
    p1.setAttribute("class", "text-danger");

    let p2 = document.createElement("p");
    p2.textContent = `${personas.edad}`;
    p2.setAttribute("class", "text-primary");

    let div1 = document.createElement("div");
    div1.appendChild(p1);
    div1.appendChild(p2);

    let imprimir = document.getElementById("aca");
    imprimir.appendChild(div1);
  });

  const nuevoEquipo = new Team(color, fecha, personas);
  arrayTablaCompleta.push(nuevoEquipo);
  guardarLocalStorage("TablaCompleta", arrayTablaCompleta);
}

let boton1 = document.getElementById("btnd");
boton1.addEventListener("click", anadirEquipo);

let mostrarMenu = document.getElementById("mostrarMenu");
mostrarMenu.addEventListener("click", mostrarFormulario);

//funcion para mostrar menu formulario
function mostrarFormulario() {
  document.getElementById("menuAgregar").classList.toggle("oculto");
}

//------------------------------------------------------------------

//SI NO HAY NADA GUARDADO SIGUE VACIO EL ARRAY arrayTablaCompleta
//PERO SI HAY DATOS GUARDADOS arrayTablaCompleta TOMA ESOS VALORES
if (descargarLocalStorage("TablaCompleta") != null) {
  arrayTablaCompleta = descargarLocalStorage("TablaCompleta");
}

let respuestaCrearEquipo = prompt(
  'Quieres añadir equipo responder "si" para continuar'
); //idea de que aparezca primero que todo.
while (respuestaCrearEquipo === "si") {
  anadirEquipo();
  respuestaCrearEquipo = prompt(
    'Quieres añadir OTRO equipo, responder "si" para continuar'
  );
}
mostrarEquipos();
////////////////////////////////////////////////////////////////

let contenedor = document.getElementsByTagName("div")[2];
contenedor.style.backgroundColor = "grey";

// let contenedor = document.getElementsByTagName("div")[2];
// contenedor.style.backgroundColor = "grey";

//ENTER para confirmar acción
