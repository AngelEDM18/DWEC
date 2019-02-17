window.onload=iniciar;
var num=0;
function iniciar(){
	var nombre=document.getElementById("nombre");
	var apellidos=document.getElementById("apellidos");
	var edad=document.getElementById("edad");
	var nif=document.getElementById("nif");
	var provincia=document.getElementById("provincia");
	var fecha=document.getElementById("fecha");
	var hora=document.getElementById("hora");
	var telefono=document.getElementById("telefono");
	var errores=document.getElementById("errores");
	var intentos=document.getElementById("errores");
	document.getElementById("enviar").addEventListener("click",validar,false);
	document.getElementById("nombre").addEventListener("blur",convertirMayusculas,false);
	document.getElementById("apellidos").addEventListener("blur",convertirMayusculas,false);
}

function validar(defaultEvent){
	//alert(defaultEvent.type);
	/*var dato=0;
	if (dato==1){
		return true;
	} else {
		defaultEvent.preventDefault();
		alert("aaa");
		return false;
	}*/
	if(validarCamposTexto() && validarNIF() && validarProvincia() && validarEmail() && validarEdad() && validarFecha() && validarHora() && validarTelefono()){
		return true;
	} else {
		defaultEvent.preventDefault();
		return false;
	}
}

function convertirMayusculas(){
	nombre.value=nombre.value.toUpperCase();
	apellidos.value=apellidos.value.toUpperCase();
}

function validarCamposTexto(){
	var patronNombre=/^[a-zA-Z\s]{2,15}$/;
	if (!patronNombre.test(nombre.value)){
		//alert("El campo nombre es incorrecto.");
		errores.innerHTML="El campo nombre es incorrecto.";
		num++;
		intentos.innerHTML="Intentos: "+num;
		nombre.focus();
		return false;
	} else if(!patronNombre.test(apellidos.value)) {
		//alert("El campo apellidos es incorrecto.");
		errores.innerHTML="El campo apellidos es incorrecto.";
		num++;
		intentos.innerHTML="Intentos: "+num;
		apellidos.focus();
		return false;
	} else if (isNaN(edad.value) || edad.value<0 || edad.value>105){
		//alert("El campo edad es incorrecto.");
		errores.innerHTML="El campo edad es incorrecto.";
		num++;
		intentos.innerHTML="Intentos: "+num;
		edad.focus();
		return false;
	} else {
		return true;
	}
	
}

function validarNIF(){
	var patron=/^\d{8}\-?[a-zA-Z]{1}$/;
	
	if(patron.test(nif.value)){
		nif.className="";
		return true;
	} else {
		//alert("El campo nif es incorrecto.");
		errores.innerHTML="El campo nif es incorrecto.";
		num++;
		intentos.innerHTML="Intentos: "+num;
		nif.focus();
		return false;
	}
}

function validarEmail(){
	var patron=/^[a-z0-9._-]+@[a-z0-9]+\.[a-z]{2,4}$/;
	
	if(patron.test(email.value)){
		email.className="";
		return true;
	} else {
		alert("El campo email es incorrecto.");
		num++;
		intentos.innerHTML="Intentos: "+num;
		email.focus();
		return false;
	}
}

function validarEdad(){
	var patron=/^\d{1,2}$/;
	
	if(patron.test(edad.value)){
		edad.className="";
		return true;
	} else {
		alert("El campo edad es incorrecto.");
		num++;
		intentos.innerHTML="Intentos: "+num;
		edad.focus();
		return false;
	}
}

function validarFecha(){
	var patron=/^\d{1,2}((-)|(\/))\d{1,2}((-)|(\/))\d{4}$/;
	
	if(patron.test(fecha.value)){
		fecha.className="";
		return true;
	} else {
		alert("El campo fecha es incorrecto.");
		num++;
		intentos.innerHTML="Intentos: "+num;
		fecha.focus();
		return false;
	}
}

function validarHora(){
	var patron=/^\d{2}:\d{2}(:\d{2})?$/;
	
	if(patron.test(hora.value)){
		hora.className="";
		return true;
	} else {
		alert("El campo hora es incorrecto.");
		num++;
		intentos.innerHTML="Intentos: "+num;
		hora.focus();
		return false;
	}
}

function validarTelefono(){
	var patron=/^(\d{9})|(\d{3}-\d{3}-\d{3})|(\d{3}-\d{2}-\d{2}-\d{2})$/;
	
	if(patron.test(telfono.value)){
		telfono.className="";
		return true;
	} else {
		alert("El campo telfono es incorrecto.");
		num++;
		intentos.innerHTML="Intentos: "+num;
		telfono.focus();
		return false;
	}
}

function validarProvincia(){
	if (provincia.value==0){
		alert("No ha seleccionado ninguna provincia.");
		num++;
		intentos.innerHTML="Intentos: "+num;
		provincia.focus();
		return false; 
	} else {
		return true;
	}
}