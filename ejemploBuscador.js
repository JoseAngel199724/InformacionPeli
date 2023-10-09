document.addEventListener("keyup", e=>{
    if (e.target.matches( "#buscador")) {
        document.querySelectorAll(".articulo").forEach(function (peli){
            if (peli.textContent.toLowerCase() === e.target.value ) {
                peli.classList.remove(`${"filtro"}`)
                peli.classList.remove(`${"hide"}`)
            } else {
                peli.classList.add("filtro")
            }
         
        })
        
    }
})


document.addEventListener("keyup", e=>{
    if (e.target.matches( "#buscador")) {
        document.querySelectorAll(".articulo").forEach(function (peli){
          peli.textContent.toLowerCase().includes(e.target.value)
          ? peli.classList.remove(`${"filtro"}`) 
          : peli.classList.add("filtro")
        })
        
    }
})