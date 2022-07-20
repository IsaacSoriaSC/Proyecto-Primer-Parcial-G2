function Validacion(valido){
    var valido = true;

    var ValNombres = document.getElementById("nombres");
    var ValApellidos = document.getElementById("apellidos");
    var ValTelefono = document.getElementById("telefono");
    var ValCorreo = document.getElementById("correo");
    var ValEntrega = document.getElementsByName("Entrega");
    var ValTarjeta = document.getElementById("TarjetaSelector");
    var ValNum = document.getElementById("tarjeta");
    var ValCVC = document.getElementById("tarjetaCVC");
    var ValFecha = document.getElementById("fecha");
    var ValRef = document.getElementById("Refe");

var Letras = /^[a-z ,.'-]+$/i;
var NumTel = /^[0-9]{10}$/g;
var CorreoTest = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var NumTarj = /^[0-9]{10}$/g;
var NumCVC = /^[0-9]{4}$/g;
var AlphaNum = /^[A-Za-z0-9\s]+$/g 


limpiarMensajes();

// Validar Nombres
if (ValNombres.value === ""){
    valido = false;
    mensaje("* Escriba sus nombres", ValNombres);
} else if (!Letras.test(ValNombres.value)){
    valido = false;
    mensaje("* Esta casilla solo puede contener letras y espacios", ValNombres);
} else if (ValNombres.value.length > 20){
    valido = false;
    mensaje("* Ingrese máximo 20 caracteres", ValNombres);
}


// Validar Apellidos
if (ValApellidos.value === ""){
    valido = false;
    mensaje("* Escriba sus apellidos", ValApellidos);
} else if (!Letras.test(ValApellidos.value)){
    valido = false;
    mensaje("* Esta casilla solo puede contener letras y espacios", ValApellidos);
} else if (ValApellidos.value.length > 20){
    valido = false;
    mensaje("* Ingrese máximo 20 caracteres", ValApellidos);
}


// Validar Telefono
if (ValTelefono.value === "") {
    valido = false;
    mensaje("* Ingrese su telefono", ValTelefono);
} else if (!NumTel.test(ValTelefono.value)) {
    valido = false;
    mensaje("* Telefono debe tener 10 números", ValTelefono);
}

// Validar Entrega del Producto
let Rad = false;
for (let i = 0; i < ValEntrega.length; i++) {
    if (ValEntrega[i].checked) {
        Rad = true;
        break;
    }
}
if (!Rad) {
    valido = false;
    mensaje("* Debe seleccionar un tipo de entrega", ValEntrega[0]);
}

// Validar Select Tarjeta
if(ValTarjeta.selectedIndex < 0 || ValTarjeta.value === '0'){
    valido = false;
    mensaje("* Debe seleccionar una tarjeta de crédito", ValTarjeta);
}


// Validar E-mail
if (ValCorreo.value === "") {
    valido = false;
    mensaje("* Ingrese su Email", ValCorreo);
} else if (!CorreoTest.test(ValCorreo.value)) {
    valido = false;
    mensaje("* Email está incompleto", ValCorreo);
}

// Validar Número de Tarjeta de Crédito Y Código de seguridad
if (ValNum.value === "" && ValCVC.value === "") {
    valido = false;
    mensaje("* Ingrese un CVC correcto", ValCVC);
    mensaje("* Ingrese 10 digitos", ValNum);
} else
  if (ValNum.value === ""){
    valido = false;
    mensaje("* Ingrese 10 digitos", ValNum);
} else if (ValCVC.value === ""){
    valido = false;
    mensaje("* Ingrese un CVC correcto", ValCVC);
} else if (!NumTarj.test(ValNum.value)){
    valido = false;
    mensaje("* Ingrese 10 dígitos", ValNum);
} else if (!NumCVC.test(ValCVC.value)){
    valido = false;
    mensaje("* Ingrese 4 dígitos", ValCVC);
}

// Validar Fecha de Expiración
var Fecha =  ValFecha.value;
var FechaExp = new Date(Fecha);
var AnioExp = FechaExp.getFullYear();

var FechaActual = new Date();
var AnioA = FechaActual.getFullYear();    
if(Fecha === "" || Fecha === null){
    valido = false;
    mensaje("* Ingrese fecha de expiración de la tarjeta",ValFecha);
} else if((AnioA - AnioExp) > 5){
   valido = false;
    mensaje("Su tarjeta ha expirado",ValFecha);
}

// Validar Referencia Domiciliaria
if (ValRef.value === ""){
    valido = false;
    mensaje("* Ingrese una referencia para llegar a su domicilio", ValRef);
} else if (!AlphaNum.test(ValRef.value)){
    valido = false;
    mensaje("**** Esta casilla solo puede contener letras y espacios", ValRef);
} else if (ValRef.value.length > 120){
    valido = false;
    mensaje("* Ingrese máximo 120 caracteres", ValRef);
}

return valido;
}

function mensaje(cadenaMensaje, elemento) {
    window.alert(cadenaMensaje);
    elemento.focus();
}

// Función Mensaje vista en clase
function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("p");
    nodoMensaje.textContent = cadenaMensaje;
    nodoMensaje.style.color = "red";
    nodoMensaje.display = "block";
    nodoMensaje.setAttribute("class", "mensajeError");
    nodoPadre.appendChild(nodoMensaje);}

// Función Limpiar vista en clase
function limpiarMensajes() {
        var mensajes = document.querySelectorAll(".mensajeError");
        for (let i = 0; i < mensajes.length; i++) {
            mensajes[i].remove();
        }
    }

