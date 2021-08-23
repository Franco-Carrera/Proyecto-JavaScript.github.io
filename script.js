//------------ENTIDADES-----------
class Team {
  constructor(color, personas, id) {
    this.color = color;
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
let botonPersonsThree = d.getElementById("btnInThree");

//let botonTable = d.getElementById("selects");

let mostrarMenu = d.getElementById("mostrarMenu"); //boton abre form 1 , 2 y 3

let botonOutPersons = d.getElementById("btnEliminar");
//elimina todo

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
*/ //// idea principal para que aparezca cada equipo.
//puede  ser un hidden

///
///

// // https://www.thecolorapi.com/id?hex=24B1E0

/*************Funciones***************** */

//añadir equipo uno
function anadirEquipo(e) {
  //guardamos los values de inputs.
  e.preventDefault();
  const color = d.getElementById("color").value;
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

    let div1 = d.createElement("div");
    div1.appendChild(p1);
    div1.appendChild(p2);

    let imprimir = d.getElementById("box1");
    imprimir.appendChild(div1);
    d.getElementById("formularioPersonas").reset();
  });

  const nuevoEquipo = new Team(color, personas);
  //luego nuevo TEAM, se suma al array y se guarda
  arrayTablaCompleta.push(nuevoEquipo);
  guardarLocalStorage("TablaCompleta", arrayTablaCompleta);
}

//Añadir equipo dos
function AñadirEquipoDos(e) {
  e.preventDefault();

  const color = d.getElementById("colorTwo").value;
  const cantidadIntegrantes = d.getElementById("integrantes2").value;
  const personas = [];

  for (let i = 0; i < cantidadIntegrantes; i++) {
    //de 0 a cant/integrantes le añadimos a persona nombre , edad , dato
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

    let div2 = d.createElement("div");
    div2.appendChild(p1);
    div2.appendChild(p2);

    let imprimirDos = d.getElementById("box");
    imprimirDos.appendChild(div2);
    d.getElementById("formularioPersonasTwo").reset();
  });

  const nuevoEquipo = new Team(color, personas); //luego nuevo TEAM, se suma al array y se guarda
  arrayTablaCompleta.push(nuevoEquipo);
  guardarLocalStorage("TablaCompleta", arrayTablaCompleta);
}
//Añadir equipo tres
function AñadirEquipoTres(e) {
  e.preventDefault();

  const color = d.getElementById("colorThree").value; //
  const cantidadIntegrantes = d.getElementById("integrantes3").value;
  const personas = [];

  for (let i = 0; i < cantidadIntegrantes; i++) {
    //de 0 a cant/integrantes le añadimos a persona nombre y edad
    const nombre = d.getElementById("nombreThree").value;
    const edad = d.getElementById("edadThree").value;
    const dato = d.getElementById("datoThree").value;
    personas.push(new Persona(nombre, edad, dato));
  }
  personas.forEach((personas) => {
    let p1 = d.createElement("p");
    p1.textContent = ` Nombre: ${personas.nombre} Edad: ${personas.edad}`;
    p1.setAttribute("class", "usuario");

    let p2 = d.createElement("p");
    p2.textContent = ` Dato: ${personas.dato}`;
    p2.setAttribute("class", "tarjeta");

    let div3 = d.createElement("div");
    div3.appendChild(p1);
    div3.appendChild(p2);

    let imprimirTres = d.getElementById("box2");
    imprimirTres.appendChild(div3);
    d.getElementById("formularioPersonasThree").reset();
  });

  const nuevoEquipo = new Team(color, personas);
  arrayTablaCompleta.push(nuevoEquipo);
  guardarLocalStorage("TablaCompleta", arrayTablaCompleta);
}
//-------------------------------------------------
// usar los id de c/ team para hacer una sola función.

function mostrarEquipos() {
  console.log("Equipos: ", descargarLocalStorage("TablaCompleta"));
}

//validar form, u api que reemplaza get users.
/*
if (color.value == "green" || color.value == "verde") {
  d.getElementById("box1").style.backgroundColor = "lightgreen";
} else {
  d.getElementById("box1").style.backgroundColor = "palegoldenrod";
}

function insertarColor() {
  let opt_1 = [];
  let opt_2 = [];
  let opt_3 = [];
  let opt_4 = [];
  let opt_5 = [];
}

function cambiaBox() {
  let option;
  option = document.firstChild.op;
}
/*     + BUSQUEDA  YOUTUBE CSS NODOS 
function colorBox() {
  document.getElementsByTagName("select");
  const valor = d.getElementById("violeta");

  if ((select = valor)) {
    document.getElementById("box1").style.backgroundColor = "purple";
  }
}
}*/
////////////////////////////////////////
const options = d.getElementsByTagName("option");
console.log(options);

function colorTable() {
  if (botonTable.firstElementChild.id == "violeta") {
    d.getElementById("box1").style.backgroundColor = "violet";
    console.log("es violeta");
  }
  if (botonTable.firstElementChild.nextElementSibling.id == "marino") {
    d.querySelector("#box1").setAttribute("class", "aqua");
    console.log("es aquaa");
  } else if (botonTable.lastElementChild.id == "verde");
  d.getElementById("box1").style.backgroundColor = "green";
  console.log("value es 3 green");
}

// se puede dividir en funciones seguir investigando, sino hablar tutor.
/*
botonTable.firstElementChild.nextElementSibling.value == "value2"
  ) {
    d.getElementById("box1").style.backgroundColor = "aquamarine";
    console.log("es aqua");
  }
*/
//funcion para mostrar menu formulario
function mostrarFormulario() {
  d.getElementById("menuAgregar").classList.toggle("hidden"); //así con cada tabla de team luego
}
function mostrarFormularioDos() {
  d.getElementById("menuAgregarTwo").classList.toggle("hidden");
} // agregar tercero
function mostrarFormularioTres() {
  d.getElementById("menuAgregarThree").classList.toggle("hidden");
}

// funcion elimina todo lo introducido
function borrarEquipos(id) {
  {
    if (descargarLocalStorage("TablaCompleta") != null) {
      let borrar = JSON.parse(localStorage.getItem("TablaCompleta"));
      let actualizo = borrar.filter((e) => e.id != id);
      localStorage.setItem("TablaCompleta", JSON.stringify(actualizo));
      location.reload();
    } else {
      let borrar = null;
    }
  }
}

// EVENTOS ------------------------------------------------------------------ boton y evento para añadir equipos
botonPersons.addEventListener("click", anadirEquipo);
botonPersonsTwo.addEventListener("click", AñadirEquipoDos);
botonPersonsThree.addEventListener("click", AñadirEquipoTres);

//boton y evento color
//colorTabla.addEventListener("focusin", insertarColor);

//----- boton y evento para mostrar formulario
mostrarMenu.addEventListener("mouseenter", mostrarFormulario);
mostrarMenu.addEventListener("mouseenter", mostrarFormularioDos);
mostrarMenu.addEventListener("mouseenter", mostrarFormularioTres);

botonOutPersons.addEventListener("click", borrarEquipos);

//botonTable.addEventListener("click", colorTable);
//botonModificar.addEventListener("click", modificar);

//LOGICA--------------------------------------------------
//colorBox();
mostrarEquipos();
//-----------------------------------------------------
// validar formulario
