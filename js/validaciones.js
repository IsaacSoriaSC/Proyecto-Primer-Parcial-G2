function validacion(valido){
    var valido=true;

    var txtCedula= document.getElementById("cedula");
    var txtNombres = document.getElementById("nombres");
    var txtApellidos = document.getElementById("apellidos");
    var txtTelefono = document.getElementById("telefono");
    var txtemail = document.getElementById("correo");
    var txtfecha = document.getElementById("fecha")
    var nosoyunrobotCheck = document.getElementById("nosoyunrobot")



    var cedulareg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros
    if (txtCedula.value === "") {
        resultado = false;
        mensaje("Cedula es requerido", txtCedula);
    } else if (!cedulareg.test(txtCedula.value)) {
        resultado = false;
        mensaje("Cedula debe ser de 10 digitos", txtCedula);
    }

    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    if (txtNombres.value === '') {
        resultado = false;
        mensaje("Nombre es requerido", txtNombres);
    } else if (!letra.test(txtNombres.value)) { //letra.test(txtNombres.value)
        resultado = false;
        mensaje("Nombre solo debe contener letras", txtNombres);
    } else if (txtNombres.value.length > 20) {
        resultado = false;
        mensaje("Nombre maximo 20 caracteres", txtNombres);
    }

    
    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    if (txtApellidos.value === '') {
        resultado = false;
        mensaje("apellido es requerido", txtApellidos);
    } else if (!letra.test(txtApellidos.value)) { //letra.test(txtNombres.value)
        resultado = false;
        mensaje("apellido solo debe contener letras", txtApellidos);
    } else if (txtApellidos.value.length > 20) {
        resultado = false;
        mensaje("apellido maximo 20 caracteres", txtApellidos);
    }

    var telefonoreg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros
    if (txtTelefono.value === "") {
        resultado = false;
        mensaje("Telefono es requerido", txtTelefono);
    } else if (!telefonoreg.test(txtTelefono.value)) {
        resultado = false;
        mensaje("Telefono debe ser de 10 digitos", txtTelefono);
    }

    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (txtemail.value === "") {
        resultado = false;
        mensaje("Email es requerido", txtemail);
    } else if (!correo.test(txtemail.value)) {
        resultado = false;
        mensaje("Email no es correcto", txtemail);
    }

        // validacion de fecha
        var dato=  txtfecha.value;
        var fechaN = new Date(dato);
        var anioN=fechaN.getFullYear();
        
        var fechaActual = new Date();// fecha actual
        var anioA =fechaActual.getFullYear();    
        if(fechaN > fechaActual){
            valido = false;
            mensaje("Fecha no puede ser superior a la actual",txtfecha);
       }else if(anioN < 1930){
            valido = false;
            mensaje("Anio de nacimiento no puede ser menor a 1930",txtfecha);
       }else if((anioA - anioN) <18){
           valido = false;
            mensaje("debe ser mayor de 18 años",txtfecha);
       }
       
       //validacion select
        if (selectEstado.value === null || selectEstado.value === '0') {
            resultado = false;
            mensaje("EDebe seleccionar estado civil", selectEstado);
        }
    
        //validacion de un checkbox
        if(!nosoyunrobotCheck.checked){
            resultado=false;
            mensaje("Debe seleccionar la opcion", nosoyunrobotCheck);
        }
    
} function mensaje(cadenaMensaje, elemento) {
    window.alert(cadenaMensaje);
    elemento.focus();
 
 }
