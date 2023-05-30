function validar(){
    let logica=true
    let nombre=document.getElementById("nombre").value 
    let apellido=document.getElementById("apellido").value 
    let direccion=document.getElementById("direccion").value 
    let ciudad=document.getElementById("ciudad").value
    let codigoPostal=document.getElementById("codigoPostal").value 
    let telefono=document.getElementById("telefono").value 
    let email=document.getElementById("email").value

    if (nombre.length === 0) {
      alert("nombre obligatorio")
      logica=false
    }
    if (apellido.length === 0) {
      alert("apellido obligatorio")
      logica=false
    }  
    if (direccion.length === 0) {
      alert("direccion obligatorio")
      logica=false
    }  
    if (ciudad.length === 0) {
      alert("ciudad obligatorio")
      logica=false
    }     
    if (codigoPostal.length === 0) {
      alert("codigoPostal obligatorio")
      logica=false
    }   
    if (telefono.length === 0) {
      alert("telefono obligatorio")
      logica=false
    }  
    if (email.length === 0) {
      alert("email obligatorio")
      logica=false
    }   
    

    if (logica) {
        grabar()
        

    }
    
}

function grabar(){
    alert("Grabando ....")
    document.getElementById("nombre").value=""
    document.getElementById("apellido").value=""
    document.getElementById("direccion").value=""
    document.getElementById("ciudad").value=""
    document.getElementById("codigoPostal").value=""
    document.getElementById("telefono").value=""
    document.getElementById("email").value=""
    
}