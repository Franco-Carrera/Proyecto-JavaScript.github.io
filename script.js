//------------ENTIDADES-----------
class Team {
  constructor(color, fecha, personas, id) {
    this.color = color;
    this.fecha = fecha;
    this.personas = personas; //array de personas
    this.id = id;
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
//-------------VARIABLES---------------
let arrayTablaCompleta = []; //array con TEAMS
let boton1 = document.getElementById("btnd");
let boton2 = document.getElementById("colour");
let mostrarMenu = document.getElementById("mostrarMenu");
const botonRemoverPersonas = document.getElementById("eliminarDatos");
let contenedor = document.getElementsByTagName("div")[2];

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

//SI NO HAY NADA GUARDADO SIGUE VACIO EL ARRAY arrayTablaCompleta
//PERO SI HAY DATOS GUARDADOS arrayTablaCompleta TOMA ESOS VALORES
if (descargarLocalStorage("TablaCompleta") != null) {
  arrayTablaCompleta = descargarLocalStorage("TablaCompleta");
}

let respuestaCrearEquipo = prompt(
  //idea de que aparezca primero que todo.
  'Quieres añadir equipo responder "si" para continuar'
);
while (respuestaCrearEquipo === "si") {
  anadirEquipo();
  respuestaCrearEquipo = prompt(
    'Quieres añadir OTRO equipo, responder "si" para continuar'
  );
}

function anadirEquipo(e) {
  //guardamos los values de inputs.
  e.preventDefault();

  const color = document.getElementById("color").value;
  const fecha = document.getElementById("fecha").value;
  const cantidadIntegrantes = document.getElementById("integrantes").value;
  const personas = [];

  for (let i = 0; i < cantidadIntegrantes; i++) {
    //de 0 a cant/integrantes le añadimos a persona nombre y edad
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    personas.push(new Persona(nombre, edad));
  }
  personas.forEach((personas) => {
    // Para cada persona mostramos en html un <p> con nombre y edad (denrtro de div)
    let p1 = document.createElement("p");
    p1.textContent = `${personas.nombre}`;
    p1.setAttribute("class", "text-danger");

    let p2 = document.createElement("p");
    p2.textContent = `${personas.edad}`;
    p2.setAttribute("class", "text-primary");

    let div1 = document.createElement("div");
    div1.appendChild(p1);
    div1.appendChild(p2);

    let imprimir = document.getElementById("box1"); ///se suman imprimir 2 y 3
    imprimir.appendChild(div1);
  });

  const nuevoEquipo = new Team(color, fecha, personas); //luego nuevo TEAM, se suma al array y se guarda
  arrayTablaCompleta.push(nuevoEquipo);
  guardarLocalStorage("TablaCompleta", arrayTablaCompleta);
}

function mostrarEquipos() {
  console.log("Equipos: ", descargarLocalStorage("TablaCompleta"));
}

function añadirColor() {
  const $colour = document.getElementById("box1");
  $colour.style.backgroundColor = "lightgreen";
}
contenedor.style.backgroundColor = "grey";

//funcion para mostrar menu formulario
function mostrarFormulario() {
  document.getElementById("menuAgregar").classList.toggle("oculto");
}

function removerPersons() {
  localStorage.clear();
  mostrarEquipos(descargarLocalStorage());
}
function borrarDatos(id) {
  let borrar = JSON.parse(localStorage.getItem("TablaCompleta"));
  let actualizo = borrar.filter((e) => e.id != id);
  localStorage.setItem("TablaCompleta", JSON.stringify(actualizo));
  location.reload();
}

// EVENTOS ------------------------------------------------------------------ boton y evento añadir equipo
boton1.addEventListener("click", anadirEquipo);
//boton y evento color
boton2.addEventListener("click", añadirColor);
//----- boton y evento para mostrar formulario
mostrarMenu.addEventListener("click", mostrarFormulario);
botonRemoverPersonas.addEventListener("click", removerPersons);

//LOGICA---------------------------------------------------
mostrarEquipos();
////////////////////////////////////////////////////////////////

//ENTER para confirmar acción

// personas.forEach((persons) => {
//   $("#div").append;
// });
