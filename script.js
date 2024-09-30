
//Validacion Formulario landing page
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); //esto evita enviar el formulario si falta por rellenar algun campo.

const fname = event.target.fname.value;
const lname = event.target.lname.value;
const email = event.target.email.value;
const color = event.target.color.value;
const pw = event.target.pw.value;
let msj = "";

if (fname.length < 2 || fname.length > 20) {
    console.log("Nombre con número de caracteres incorrecto.");
    msj += " Nombre con número de caracteres incorrecto.";
}


if (lname.length < 2 || lname.length > 20) {
    console.log("Apellido con número de caracteres incorrecto.");
    msj += " Apellido con número de caracteres incorrecto.";
}



//validacion con regExp

/*
Que empiece por letra o número, y tenga al menos un carácter Para el dominio (ej. @hotmail @gmail):
Que tenga @
Que tenga sólo letras, y al menos tres caracteres Para el dominio padre (ej. .es .com .org)
Podrá tener dos (.es, .fr, .it,…) o tres letras (.com, .net, .org,..) o cuatro (.mobi, info,…)
Debe ir al final, detrás de un punto
*La expresión regular sería algo como: expresionregular@expresionregular.expresionregular. Ej: elena@gmail.com; pepe03@hotmail.es Crearemos un formulario que llamará a la función checkEmail. Esta función será la que ejecute la expresión regular. Se le pasará como argumento el valor del email recogido.
Patrón RegExp: expresionregular@expresionregular.expresionregular
*/
let regExp = new RegExp ( /^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+.[a-zA-Z]{2,}$/);
let regExpPw = new RegExp (/^[a-zA-Z0-9!@#$%&]{6,20}$/)
if(regExp.test(email) == false){
    console.log("Introduce un email válido.");
    msj += "Introduce un email válido; formato incorrecto.";
} if (color.length < 3) {
    console.log("Eso no es un color.");
    msj += " Eso no es un color.";
} if(regExpPw.test(pw)== false) {
    msj += "Introduce una contraseña válida; formato incorrecto.";
}



//comprobacion de si hay errores
if (msj.length != 0) {
        alert(msj); //imprime mensaje final de error
      } else {
        alert("Se han enviado correctamente tus respuestas, gracias! :)")
    event.target.submit();
    location.replace("postsubmit.html")
    }
});

// //boton para volver a home
// document.querySelector("button").addEventListener("submit", function(evento){
   
//     console.log("Click");
//     window.location.replace = href = "./index.html"
// });















