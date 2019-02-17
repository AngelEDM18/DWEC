window.onload=iniciar;

function iniciar(){
	var nombre=document.getElementById("nombre");
	var apellidos=document.getElementById("apellidos");
	var edad=document.getElementById("edad");
	var matricula=document.getElementById("matricula");
	var provincia=document.getElementById("provincia");
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
	if(validarCamposTexto(this) && validarMatricula() && validarProvincia()){
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
	if (nombre.value.trim().length==0){
		alert("El campo nombre es incorrecto.");
		nombre.focus();
		return false;
	} else if(apellidos.value.trim().length==0) {
		alert("El campo apellidos es incorrecto.");
		apellidos.focus();
		return false;
	} else if (isNaN(edad.value) || edad.value<0 || edad.value>105){
		alert("El campo edad es incorrecto.");
		edad.focus();
		return false;
	} else {
		return true;
	}
	
}

function validarMatricula(){
	var patron=/^\d{4}\s?[A-Z]{3}$/;
	
	if(patron.test(matricula.value)){
		matricula.className="";
		return true;
	} else {
		alert("El campo matricula es incorrecto.");
		matricula.focus();
		matricula.className="error";
		return false;
	}
}

function validarProvincia(){
	if (provincia.value==0){
		alert("No ha seleccionado ninguna provincia.");
		provincia.focus();
		return false; 
	} else {
		return true;
	}
	
}