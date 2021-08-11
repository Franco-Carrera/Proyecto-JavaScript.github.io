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
  constructor(nombre, edad, dato, eidr) {
    this.nombre = nombre;
    this.edad = edad;
    this.dato = dato;
    this.eidr = eidr;
  }
}
//-------------VARIABLES---------------
const d = document;
const ls = localStorage;
let arrayTablaCompleta = []; //array con TEAMS

let botonPersons = d.getElementById("btnIn"); //Agrega peronas 1 y 2
let botonPersonsTwo = d.getElementById("btnInTwo");

let botonTema = d.getElementById("colours"); //cambia tema
const colorTabla = d.getElementById("color");

let mostrarMenu = d.getElementById("mostrarMenu"); //boton abre form 1 y 2

// const botonRemoverPersonas = d.getElementById("eliminarDatos"); //Limpia local
//let botonModificar = d.getElementById("equipo4"); //modifica.

let botonQuitarPerson = d.getElementById("btnOut"); //elimina persona //sin uso

// let botonOutPersons = d.getElementById("btnEliminar"); //elimina todo

//***************LOCALSTORAGE*****************/
//funcion guardar
function guardarLocalStorage(clave, valor) {
  ls.setItem(clave, JSON.stringify(valor));
}
//funcion descargar
function descargarLocalStorage(clave) {
  return JSON.parse(ls.getItem(clave));
}
//*********************************/

//SI NO HAY NADA GUARDADO SIGUE VACIO EL ARRAY arrayTablaCompleta
//PERO SI HAY DATOS GUARDADOS arrayTablaCompleta TOMA ESOS VALORES
if (descargarLocalStorage("TablaCompleta") != null) {
  arrayTablaCompleta = descargarLocalStorage("TablaCompleta");
}
/*
let respuestaCrearEquipo =
  //idea de que aparezca primero que todo.
  'Quieres añadir equipo responder "si" para continuar';
while (respuestaCrearEquipo === "si") {
  anadirEquipo();
  respuestaCrearEquipo = prompt(
    'Quieres añadir OTRO equipo, responder "si" para continuar'
  );
}
*/
//---- Agregar fechas----

/*************Funciones***************** */

//añadir equipo uno
function anadirEquipo(e) {
  //guardamos los values de inputs.
  e.preventDefault();
  const color = d.getElementById("color").value;
  const fecha = d.getElementById("fechas").value;
  const cantidadIntegrantes = d.getElementById("integrantes").value;
  const personas = [];

  for (let i = 0; i < cantidadIntegrantes; i++) {
    //de 0 a cant/integrantes le añadimos a persona nombre y edad
    const nombre = d.getElementById("nombre").value;
    const edad = d.getElementById("edad").value;
    const dato = d.getElementById("dato").value;
    personas.push(new Persona(nombre, edad, dato));
  }
  personas.forEach((personas) => {
    // Para cada persona mostramos en html un <p> con nombre y edad (denrtro de div)
    let p1 = d.createElement("p");
    p1.textContent = ` Nombre: ${personas.nombre} Edad: ${personas.edad}`;
    p1.setAttribute("class", "usuario");

    let p2 = d.createElement("p");
    p2.textContent = ` Dato: ${personas.dato}`;
    p2.setAttribute("class", "tarjeta");

    let button = d.createElement("button");
    button.setAttribute("class", "secundary");
    button.setAttribute("onclick", `borrarDatos(${personas.eidr})`);
    button.textContent = "X";

    p2.appendChild(button);

    let div1 = d.createElement("div");
    div1.appendChild(p1);
    div1.appendChild(p2);

    let imprimir = d.getElementById("box1");
    imprimir.appendChild(div1);
    d.getElementById("formularioPersonas").reset();
  });

  const nuevoEquipo = new Team(color, fecha, personas); //luego nuevo TEAM, se suma al array y se guarda
  arrayTablaCompleta.push(nuevoEquipo);
  guardarLocalStorage("TablaCompleta", arrayTablaCompleta);
}

//Añadir equipo dos
function AñadirEquipoDos(e) {
  e.preventDefault();

  const color = d.getElementById("colorTwo").value;
  const fecha = d.getElementById("fechaTwo").value;
  const cantidadIntegrantes = d.getElementById("integrantes2").value;
  const personas = [];

  for (let i = 0; i < cantidadIntegrantes; i++) {
    //de 0 a cant/integrantes le añadimos a persona nombre y edad
    const nombre = d.getElementById("nombreTwo").value;
    const edad = d.getElementById("edadTwo").value;
    const dato = d.getElementById("datoTwo").value;
    personas.push(new Persona(nombre, edad, dato));
  }
  personas.forEach((personas) => {
    // Para cada persona mostramos en html un <p> con nombre y edad (denrtro de div)
    let p1 = d.createElement("p");
    p1.textContent = ` Nombre: ${personas.nombre} Edad: ${personas.edad}`;
    p1.setAttribute("class", "usuario");

    let p2 = d.createElement("p");
    p2.textContent = ` Dato: ${personas.dato}`;
    p2.setAttribute("class", "tarjeta");

    let button2 = d.createElement("button");
    button2.setAttribute("class", "secundary");
    button2.setAttribute("onclick", `borrarDatos(${personas.eidr})`);
    button2.textContent = "X";

    let div2 = d.createElement("div");
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(button2);

    let imprimirDos = d.getElementById("box");
    imprimirDos.appendChild(div2);
    d.getElementById("formularioPersonasTwo").reset();
  });

  const nuevoEquipo = new Team(color, fecha, personas); //luego nuevo TEAM, se suma al array y se guarda
  arrayTablaCompleta.push(nuevoEquipo);
  guardarLocalStorage("TablaCompleta", arrayTablaCompleta);
}
//-------------------------------------------------

function mostrarEquipos() {
  console.log("Equipos: ", descargarLocalStorage("TablaCompleta"));
}

//funcion para cambiar el color del menu y sus letras
function cambiarTema() {
  d.body.classList.toggle("colours1");
  d.querySelector("#h1").classList.toggle("hone");
  d.querySelector(".tabla-titles").classList.toggle("honeTwo");
}

//funcion para cambiar el color de tabla. Objetivo de que cambie en base a color elegido por el usuario
function insertarColor() {
  if (color.value == "green" || color.value == "verde") {
    d.getElementById("box1").style.backgroundColor = "lightgreen";
  } else {
    d.getElementById("box1").style.backgroundColor = "palegoldenrod";
  }
}

//funcion para mostrar menu formulario
function mostrarFormulario() {
  d.getElementById("menuAgregar").classList.toggle("hidden"); //así con cada tabla de team luego
}
function mostrarFormularioDos() {
  d.getElementById("menuAgregarTwo").classList.toggle("hidden");
} // agregar tercero


// usar una de estas dos para  eliminar persona u team
function eliminarPerson(eidr) {
  let arrayTablaCompleta = descargarLocalStorage();
  arrayTablaCompleta = arrayTablaCompleta.filter(
    (persona) => persona.eidr != eidr
  );
  guardarLocalStorage(arrayTablaCompleta);
} // sin uso esta por ahora.


// EVENTOS ------------------------------------------------------------------ boton y evento añadir equipo
botonPersons.addEventListener("click", anadirEquipo);
botonPersonsTwo.addEventListener("click", AñadirEquipoDos);

//boton y evento color
botonTema.addEventListener("click", cambiarTema);
//----- boton y evento para mostrar formulario
colorTabla.addEventListener("focusin", insertarColor);

mostrarMenu.addEventListener("mouseenter", mostrarFormulario);
mostrarMenu.addEventListener("mouseenter", mostrarFormularioDos);

// botonRemoverPersonas.addEventListener("click", removerPersons);

botonQuitarPerson.addEventListener("click", eliminarPerson);

// botonOutPersons.addEventListener("click", borrarDatos);

//botonModificar.addEventListener("click", modificar);

//LOGICA---------------------------------------------------
mostrarEquipos();
//-----------------------------------------------------
