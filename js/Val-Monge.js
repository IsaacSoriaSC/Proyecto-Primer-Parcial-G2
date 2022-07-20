var form = document.querySelector(".login__container--form");
form.addEventListener('submit', Validar);

function Validar(event) {
    var txtEmail = document.querySelector(".login__container--form #email");
    var txtContraseña = document.querySelector(".login__container--form #password");

    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    var flag = true;

    limpiarMensajes();


    //Validar Contraseña
    if(txtContraseña.value ===''){
        flag = false;
        Mensaje("Ingrese una contraseña",txtContraseña);
    }
    //  Validar E-mail
    if (txtEmail.value === "") {
        flag = false;
        Mensaje("Correo es requerido", txtEmail);
    } else if (!correo.test(txtEmail.value)) {
        flag = false;
        Mensaje("Correo no es correcto", txtEmail);
    }

    
    
    event.preventDefault();
}
function Mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("p");
    nodoMensaje.setAttribute("class", "mensajeError"); 
    nodoMensaje.textContent = cadenaMensaje; 
    nodoMensaje.style.color = "red";
    nodoMensaje.display = "block";
    nodoMensaje.style.fontWeight = "bold";
    nodoMensaje.style.fontSize = "20px";
    nodoPadre.appendChild(nodoMensaje);
}

function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensajeError");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }
}