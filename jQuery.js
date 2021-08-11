$(() => {
  console.log("El DOM esta listo");
});

const slideArriba = () => {
  $("#box1").slideUp(1000);
  $("#box1").slideToggle(3000);
  $("#box").slideUp(1000);
  $("#box").slideToggle(3000);
  $("#box2").slideUp(1000);
  $("#box2").slideToggle(3000);
};
slideArriba();

$("#formularioPersonas").append(
  '<button class="btnComprar">Registrar Equipo</button>'
);

$("#formularioPersonasTwo").append(
  '<button class="btnComprar">Registrar Equipo</button>'
);

$(".btnComprar").on("mouseover", cambiarFondo);
$(".btnComprar").on("mouseleave", cambiarFondo);

function cambiarFondo() {
  $(this).toggleClass("fondoSeleccionado");
}
// $("p").on("mouseover", cambiarFondo);
// $("p").on("mouseleave", cambiarFondo);

// function cambiarFondo() {
//   $(this).toggleClass("fondoSeleccionado");
// }

// pasar a nuevo archivo
