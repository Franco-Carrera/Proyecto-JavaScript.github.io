$(() => {
  console.log("El DOM esta listo");
});

$("#btn").click(function (e) {
  e.preventDefault();
  //Animamos sus propiedades CSS con animate
  $("html,body").animate(
    {
      scrollTop: $("#h1").offset().top,
    },
    1000
  );
});

const slideArriba = () => {
  $("#box1").slideUp(1000);
  $("#box1").delay(1000);
  $("#box1").slideToggle(2000);

  $("#box").slideUp(1000);
  $("#box").delay(1000);
  $("#box").slideToggle(2000);

  $("#box2").slideUp(1000);
  $("#box2").delay(1000);
  $("#box2").slideToggle(2000);
};

/////////////Dark Mode////////////////////////////////
const theme = () => {
  if (localStorage.getItem("modo") == "dark") {
    aclarar();
  } else {
    oscurecer();
  }
};

const oscurecer = () => {
  $("body").css("background-color", "#222");
  $("p").css("color", "#ccc");
  $("h1").css("color", "#ccc");
  $("h3").css("color", "#ccc");
  $("a").css("color", "--second-color");

  document.getElementById("theme").textContent = "☀️";
  //document.getElementById("theme").style.backgroundColor.hover = "gold";
  localStorage.setItem("modo", "dark");
};

const aclarar = () => {
  $("body").css("background-color", "white");
  $("p").css("color", "#222");
  // ver selectores avanzados de header, remodel api, seo, color tabla, subida al server y fin.
  $("h1").css("color", "#333");
  $("h3").css("color", "#333");
  $("header").css("color", "#a85c7e");
  document.getElementById("theme").textContent = "🌙";
  localStorage.setItem("modo", "light");
};

$("#theme").click(theme);

if (localStorage.getItem("modo") == "dark") {
  oscurecer();
} else {
  aclarar();
}

///////////////////////////////////////////////
// METODO GET PETICION CON AJAX

// Declaramos la url que vamos a usar para el GET
const URL = "https://jsonplaceholder.typicode.com";

$("#infoDates").prepend(
  '<div id="users" class="btn">GET USERS registrados</div>'
);
$("#infoDates").prepend(`<p class="pAjax">Doble click para ver usuarios</p>`);

$("#users").dblclick(() => {
  $.get(`${URL}/users`, function (res, state) {
    if (state === "success") {
      console.log(res);
      for (const { name, phone, website } of res) {
        $(".row").append(`
                                <div class="card col-sm-3 m-1">
                                    <div class="h3">${name}</div>
                                    <div>Phone : ${phone}</div>
                                    <div>Dato: ${website}</div>
                                </div>`);
      }
    }
  });
});

$("#users").click(() => {
  $(".row").toggle("slow");
});

slideArriba();

/*
https://http.cat/[status_code]*/
