//Validacion Formulario landing page
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); //esto evita enviar el formulario si falta por rellenar algun campo.

const fname = event.target.fname.value;
const lname = event.target.lname.value;
const email = event.target.email.value;
const color = event.target.color.value;
let msj = "";

if (fname.length < 2 || fname.length > 20) {
    console.log("Nombre con número de caracteres incorrecto.");
    msj += " Nombre con número de caracteres incorrecto.";
}


if (lname.length < 2 || lname.length > 20) {
    console.log("Apellido con número de caracteres incorrecto.");
    msj += " Apellido con número de caracteres incorrecto.";
}




if(email.match('@' && ".") === 0){
    console.log("Introduce un email válido.");
}
if (color.length < 3) {
    console.log("Eso no es un color.");
    msj += " Eso no es un color.";
}



//comprobacion de si hay errores
if (msj.length != 0) {
        alert(msj); //imprime mensaje final de error
        //document.body.innerHTML += msj;
        let p = document.createElement("pre");
        let mensaje = document.createTextNode(msj);
        p.style.color = "#DD1C1A";
        p.style.fontSize = "16px";
        p.appendChild(mensaje);
    
        document.getElementById("contact").appendChild(p); // dibuja resultado
      }  else {
        alert("Se han enviado correctamente tus respuestas, gracias! :)")
    event.target.submit();
    }
    });












