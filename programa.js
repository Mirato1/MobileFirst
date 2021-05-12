// Meses
let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

let diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

let f =new Date();

let fecha = document.getElementsByClassName("fechaActual");

for (var i = 0; i < fecha.length; i++) {
  fecha[i].innerHTML = (diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
}

// Tablas con sus flechas

const nextBtn = document.getElementById('arrow-right');
const prevBtn = document.getElementById('arrow-left');
const card = document.querySelectorAll('.main__currency-table');

nextBtn.addEventListener('click', function() {
  card.forEach(function(item) {
    item.classList.toggle('active');
  })
})

prevBtn.addEventListener('click', function() {
  card.forEach(function(item) {
    item.classList.toggle('active');
  })
})

// Scroll Top Botton

const d = document,
  w = window;

const $scrollBtn = d.querySelector(".scroll-top-btn");

w.addEventListener("scroll", (e) => {
  let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

  if(scrollTop > 800){
    $scrollBtn.classList.remove("hidden");
  }
  else{
    $scrollBtn.classList.add("hidden");
  }
});

d.addEventListener("click", (e) => {
  if(e.target.matches(".scroll-top-btn")){
    w.scrollTo({
      behavior: "smooth",
      top: 0
    });
  }
});

