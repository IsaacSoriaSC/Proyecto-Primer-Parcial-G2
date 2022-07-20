var form = document.querySelector("form");
form.addEventListener('submit', Validar);

function Validar(event) {
    var txtNombre = document.querySelector(".formulario_registro #nombre");
    var txtApellido = document.querySelector(".formulario_registro #apellido");
    var txtEmail = document.querySelector(".formulario_registro #correo");
    var selectCiudad = document.querySelector(".formulario_registro #ciudad");

    var txtPlaca = document.querySelector(".formulario_registro #placa");

    var chMarca = document.getElementsByName("marca");

    var selectAniofab = document.querySelector(".formulario_registro #aniofab");

    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var placa = /[A-Z]{3}[-][0-9]{3}/;

    limpiarMensajes();

    //  Validar Nombre      
    if (txtNombre.value === '') {
        flag = false;
        Mensaje("Debe Llenar este campo", txtNombre);
    } else if (!letra.test(txtNombre.value)) {
        flag = false;
        Mensaje("Solo letras", txtNombre);
    }
    //  Validar Apellido
    if (txtApellido.value === '') {
        flag = false;
        Mensaje("Debe Llenar este campo", txtApellido);
    } else if (!letra.test(txtApellido.value)) {
        flag = false;
        Mensaje("Solo letras", txtApellido);
    }
    //Validar comboBox Ciudad
    if (selectCiudad.value === null || selectCiudad.value === '0') {
        flag = false;
        Mensaje("Debe seleccionar la ciudad", selectCiudad);
    }

    //Validar comboBox Aniofab
    if (selectAniofab.value === null || selectAniofab.value === '0') {
        flag = false;
        Mensaje("Debe seleccionar un año", selectAniofab);
    }


    //  Validar E-mail
    if (txtEmail.value === "") {
        flag = false;
        Mensaje("Email es requerido", txtEmail);
    } else if (!correo.test(txtEmail.value)) {
        flag = false;
        Mensaje("Email no es correcto", txtEmail);
    }

    //Validar Placa Vehiculo
    if (txtPlaca.value === '') {
        flag = false;
        Mensaje("Debe Llenar este campo", txtPlaca);
    } else if (!placa.test(txtPlaca.value)) {
        flag = false;
        Mensaje("Solo caracteres de una placa", txtPlaca);
    }



    //Validar radio  Marca Vehiculo
    var sel = false;
    for (let i = 0; i < chMarca.length; i++) {
        if (chMarca[i].checked) {
            sel = true;
            let res = chMarca[i].value;
            break;
        }
    }

    if (!sel) {
        resultado = false;
        Mensaje("Debe seleccionar una marca", chMarca[0]);
    }

    
    event.preventDefault();
    form.reset();
}

function Mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("p");
    nodoMensaje.setAttribute("class", "mensajeError");
    nodoMensaje.textContent = cadenaMensaje;
    nodoMensaje.style.color = "red";
    nodoMensaje.style.fontStyle = "italic";
    nodoMensaje.display = "block";
    nodoMensaje.style.fontWeight = "bold";
    nodoMensaje.style.fontSize = "12px";
    nodoPadre.appendChild(nodoMensaje);
}

function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensajeError");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }
}

