document.addEventListener("keyup", e=>{
    if (e.target.matches( "#buscador")) {
        document.querySelectorAll(".articulo").forEach(function (peli){
          peli.textContent.toLowerCase().includes(e.target.value)
          ? peli.classList.remove("filtro")
          : peli.classList.add("filtro")
        })
        
    }
})

let btnaccion= document.getElementById("btnaccion")
let titendencia= document.getElementById("titendencia")
let tendecia= document.getElementById("tendecia")
let titeserie= document.getElementById("titeserie")
let series= document.getElementById("series")
let titeaccion= document.getElementById("titeaccion")
let accion= document.getElementById("accion")
let nadaesSimple = document.getElementById("nadaesSimple")

let peliAccionOculta= document.getElementById("peliAccionOculta")

btnaccion.addEventListener("click", peliAccion);
function peliAccion (){

  titendencia.classList.add("hide");
  tendecia.classList.add("hide");
  titeserie.classList.add("hide");
  series.classList.add("hide");
  peliAccionOculta.classList.remove("hide")

   
}