window.onload=inicializar;

function inicializar(){
	var nombre=document.getElementById("nombre");
	var telefono=document.getElementById("telefono");
	var edad=document.getElementById("edad");
	var email=document.getElementById("email");
	var box=document.getElementById("box");
	document.getElementById("enviar").addEventListener("click", validar, false);
	document.getElementById("nombre").addEventListener("blur", convertirMayusculas, false);
}

function validar(defaultEvent){
	if (validarCamposTexto() && validarTelefono() && validarEdad() && validarEmail()){
		return true
	} else {
		defaultEvent.preventDefault();
		return false;
	}
}

function convertirMayusculas(){
	nombre.value=nombre.value.toUpperCase();
}

function validarCamposTexto(){
	var patron=/^[a-zA-Z\s]{2,15}$/;
	if(patron.test(nombre.value)){
		return true;
	} else {
		box.innerHTML="Error en el nombre";
		box.className="error"
		return false;
	}
}

function validarTelefono(){
	var patron=/^(\(\+34\))?(6|9)((\d{2}-\d{3}-\d{3})|(\d{8})|(\d{2})-\d{2}-\d{2}-\d{2})$/;
	if(patron.test(telefono.value)){
		return true;
	} else {
		box.innerHTML="error en el telefono"
		box.className="error";
		return false
	}
}

function validarEdad(){
	var patron=/^\d{1,2}$/;
	if (patron.test(edad.value)){
		if (edad.value>6){
			return true;
		} else {
			box.innerHTML="Error. La edad es demasiado pequeña";
			box.className="error";
			return false;
		}
	} else {
		box.innerHTML="Error en la edad";
		box.className="error";
		return false;
	}
}

function validarEmail(){
	var patron=/^[a-zA-Z0-9]{1}[a-zA-Z0-9._-]{2,15}@[a-zA-Z0-9]{3,10}\.[a-zA-Z0-9]{3,10}$/;
	if (patron.test(email.value)){
		return true;
	} else {
		box.innerHTML="Email incorrecto";
		box.className="error";
		return false;
		
	}
}