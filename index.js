let formulario = document.getElementById("form")
formulario.addEventListener("submit",(event)=>{
    event.preventDefault()

    let rutina = document.getElementById("number").value
    console.log(rutina)


   let opciones = document.getElementById("opciones").value
   console.log(opciones)
   
   alert( `
   Su rutina durara ${rutina} semanas
        ${opciones} a la semana

`)

} )

