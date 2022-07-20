var form = document.querySelector("form");
form.addEventListener('submit', Validar);

function Validar(event) {
    var txtNombre = document.querySelector(".formulario_registro #nombre");
    var txtApellido = document.querySelector(".formulario_registro #apellido");
    var txtEmail = document.querySelector(".formulario_registro #correo");
    var selectCiudad = document.querySelector(".formulario_registro #ciudad");
    var txtContraseña = document.querySelector(".formulario_registro #contraseña");

    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var telefonoreg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros
    var flag = true;

    limpiarMensajes();

    //  Validar Nombre      
    if (txtNombre.value === '') {
        flag = false;
        Mensaje("Debe Llenar este campo",txtNombre);    
    }else if(!letra.test(txtNombre.value)){
        flag = false;
        Mensaje("Solo letras", txtNombre);
    }

    //  Validar Apellido
    if (txtApellido.value === '') {
        flag = false;
        Mensaje("Debe Llenar este campo",txtApellido);    
    }else if(!letra.test(txtApellido.value)){
        flag = false;
        Mensaje("Solo letras", txtApellido);
    }

    //Validar comboBox
    if (selectCiudad.value === null || selectCiudad.value === '0') {
        flag = false;
        Mensaje("Debe seleccionar la ciudad", selectCiudad);
    }

    //Validar Contraseña
    if(txtContraseña.value ===''){
        flag = false;
        Mensaje("Debe ingresar una contraseña",txtContraseña);
    }

    //  Validar E-mail
    if (txtEmail.value === "") {
        flag = false;
        Mensaje("Email es requerido", txtEmail);
    } else if (!correo.test(txtEmail.value)) {
        flag = false;
        Mensaje("Email no es correcto", txtEmail);
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