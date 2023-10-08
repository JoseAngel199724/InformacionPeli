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
let btnterror= document.getElementById("btnterror")
let titendencia= document.getElementById("titendencia")
let tendecia= document.getElementById("tendecia")
let titeserie= document.getElementById("titeserie")
let series= document.getElementById("series")
let titeaccion= document.getElementById("titeaccion")
let accion= document.getElementById("accion")
let nadaesSimple = document.getElementById("nadaesSimple")
let titeterror = document.getElementById("titeterror")
let terror = document.getElementById("terror")

let carouselExampleCaptions = document.getElementById("carouselExampleCaptions")
let peliAccionOculta= document.getElementById("peliAccionOculta")
let peliTerrorOculta= document.getElementById("peliTerrorOculta")

btnaccion.addEventListener("click", peliAccion);
function peliAccion (){

  titendencia.classList.add("hide");
  tendecia.classList.add("hide");
  titeserie.classList.add("hide");
  series.classList.add("hide");
  titeterror.classList.add("hide");
  terror.classList.add("hide");
  carouselExampleCaptions.classList.add("hide");
  peliTerrorOculta.classList.add("hide")
  peliAccionOculta.classList.remove("hide")
  accion.classList.remove("hide")
   
}

btnterror.addEventListener("click", peliTerror);
function peliTerror (){

  titendencia.classList.add("hide");
  tendecia.classList.add("hide");
  titeserie.classList.add("hide");
  series.classList.add("hide");
  accion.classList.add("hide");
  titeaccion.classList.add("hide");
  carouselExampleCaptions.classList.add("hide");
  peliAccionOculta.classList.add("hide")
  peliTerrorOculta.classList.remove("hide")
  terror.classList.remove("hide")

   
}