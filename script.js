class Team {
  constructor(color, fecha, personas) {
      this.color = color;
      this.fecha = fecha;
      this.personas = personas;//array de personas
  }
  agregarPersona(persona) {
      this.personas.push(persona);
  }
}
class Persona {
  constructor(nombre, edad,) {
      this.nombre = nombre;
      this.edad = edad;
  }
}
let arrayTablaCompleta = [];

//***************LOCALSTORAGE*****************/
//funcion guardar
function guardarLocalStorage(clave, valor) {
  localStorage.setItem(clave,JSON.stringify(valor))
}
//funcion descargar
function descargarLocalStorage(clave) {
  return JSON.parse(localStorage.getItem(clave))
}
//*********************************/

function mostrarEquipos() {
  console.log('Equipos: ',(descargarLocalStorage('TablaCompleta')))
}

function anadirEquipo() {
  const color = prompt('Ingrese color del equipo');
  const fecha = prompt('ingrese fecha');
  const cantidadIntegrantes = parseInt(prompt('Ingrese cantidad de integrantes'));
  const personas = [];
  for (let index = 0; index < cantidadIntegrantes; index++) {
    const nombre = prompt(`Ingrese Nombre de la Persona N° ${index + 1}`);
    const edad = parseInt( prompt(`Ingrese Edad de la Persona N° ${index + 1}`));
    const persona = new Persona(nombre, edad);
    personas.push(persona);
  }
  const nuevoEquipo = new Team(color,fecha,personas);
  arrayTablaCompleta.push(nuevoEquipo);
  guardarLocalStorage('TablaCompleta', arrayTablaCompleta)
}
//------------------------------------------------------------------
//------------------------------------------------------------------

//SI NO HAY NADA GUARDADO SIGUE VACIO EL ARRAY arrayTablaCompleta
//PERO SI HAY DATOS GUARDADOS arrayTablaCompleta TOMA ESOS VALORES 
if (descargarLocalStorage('TablaCompleta') != null) {
  arrayTablaCompleta = descargarLocalStorage('TablaCompleta')
} 

let respuestaCrearEquipo = prompt('Quieres añadir equipo responder "si" para continuar')
while (respuestaCrearEquipo ==="si") {
  anadirEquipo();
  respuestaCrearEquipo = prompt('Quieres añadir OTRO equipo, responder "si" para continuar')
}
mostrarEquipos();




//documentación de temas y extensiones jon