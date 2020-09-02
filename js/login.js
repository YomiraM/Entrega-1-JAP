//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var user = document.getElementById('username')
var email = document.getElementById('email')
var password = document.getElementById('password')

document.addEventListener("DOMContentLoaded", function(e){

document.getElementById('button').addEventListener("click", function(e){
    valid = true;

        if (user.value == ''){
            alert("Ingrese su usuario");
            valid = false;
        }

        if (email.value == ''){
            alert("Ingrese su e-mail");
            valid = false;
        }

        if (password.value == ''){
            alert("Ingrese su contraseña");
            valid = false;
        }

        if (valid){
            localStorage.setItem("User-Logged", JSON.stringify({ email: user.value }));
            window.location = "cover.html";
        }
    });
});