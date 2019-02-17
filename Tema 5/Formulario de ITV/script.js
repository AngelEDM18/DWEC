window.onload=iniciar;

function iniciar(){
	var nombre=document.getElementById("nombre");
	var apellidos=document.getElementById("apellidos");
	var nif=document.getElementById("nif");
	var matricula=document.getElementById("matricula");
	var marca=document.getElementById("marca");
	var fecha=document.getElementById("fecha");
	var provincia=document.getElementById("provincia");
	document.getElementById("enviar").addEventListener("click",validar,false);
	document.getElementById("nombre").addEventListener("blur",convertirMayusculas,false);
	document.getElementById("apellidos").addEventListener("blur",convertirMayusculas,false);
	document.getElementById("marca").addEventListener("blur",convertirMayusculas,false);
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
	if(validarCamposTexto(this) && validarMatricula() && validarProvincia() && validarNIF() && validarFecha()){
		return true;
	} else {
		defaultEvent.preventDefault();
		return false;
	}
}

function convertirMayusculas(){
	nombre.value=nombre.value.toUpperCase();
	apellidos.value=apellidos.value.toUpperCase();
	marca.value=marca.value.toUpperCase();
}

function validarCamposTexto(){
	var patronNombre=/^.[a-zA-Z\s]*$/;
	if (!patronNombre.test(nombre.value)){
		alert("El campo nombre es incorrecto.");
		nombre.focus();
		return false;
	} else if(!patronNombre.test(apellidos.value)) {
		alert("El campo apellidos es incorrecto.");
		apellidos.focus();
		return false;
	} else if(!patronNombre.test(marca.value)) {
		alert("El campo marca es incorrecto.");
		marca.focus();
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

function validarFecha(){
	var patron=/^\d{2}\/\d{2}\/\d{4}$/;
	if(patron.test(fecha.value)){
		alert("El campo fecha es incorrecto.");
		provincia.focus();
		return true; 
	} else {
		return false;
	}
	
}

function validarNIF(){
	var patron=/^\d{8}\-?[a-zA-Z]{1}$/;
	
	if(patron.test(nif.value)){
		nif.className="";
		return true;
	} else {
		alert("El campo nif es incorrecto.");
		nif.focus();
		return false;
	}
}