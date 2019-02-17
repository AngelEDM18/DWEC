window.onload=iniciar;

function iniciar(){
	filas=0;
	totalFilas=0;
}

function validar(){
	marca=document.getElementById("marca");
	modelo=document.getElementById("modelo");
	fabricacion=document.getElementById("fabricacion");
	kms=document.getElementById("kms");
	entrega=document.getElementById("entrega");
	nombre=document.getElementById("nombre");
	dni=document.getElementById("dni");
	email=document.getElementById("email");
	telefono=document.getElementById("telefono");
	nodoTabla=document.getElementById("tablaRegistro");
	
	if(comprobarTxt() && comprobarFabricacion() && comprobarKms() && comprobarEntrega()
		&& comprobarDni() && comprobarNombre() && comprobarEmail() && comprobarTelefono()){
		agregar();
	}
}

function agregar(){
	fila=document.createElement("tr");
	fila.setAttribute("id","fila"+filas);
	
	celda=document.createElement("td");
	txt=document.createTextNode(filas);
	celda.appendChild(txt);
	fila.appendChild(celda);
	nodoTabla.appendChild(fila);
	
	celda=document.createElement("td");
	txt=document.createTextNode(dni.value);
	celda.appendChild(txt);
	fila.appendChild(celda);
	nodoTabla.appendChild(fila);
	
	celda=document.createElement("td");
	txt=document.createTextNode(nombre.value);
	celda.appendChild(txt);
	fila.appendChild(celda);
	nodoTabla.appendChild(fila);
	
	celda=document.createElement("td");
	txt=document.createTextNode(email.value);
	celda.appendChild(txt);
	fila.appendChild(celda);
	nodoTabla.appendChild(fila);
	
	celda=document.createElement("td");
	txt=document.createTextNode(telefono.value);
	celda.appendChild(txt);
	fila.appendChild(celda);
	nodoTabla.appendChild(fila);
	
	celda=document.createElement("td");
	txt=document.createTextNode(marca.value);
	celda.appendChild(txt);
	fila.appendChild(celda);
	nodoTabla.appendChild(fila);
	
	celda=document.createElement("td");
	txt=document.createTextNode(modelo.value);
	celda.appendChild(txt);
	fila.appendChild(celda);
	nodoTabla.appendChild(fila);
	
	celda=document.createElement("td");
	txt=document.createTextNode(fabricacion.value);
	celda.appendChild(txt);
	fila.appendChild(celda);
	nodoTabla.appendChild(fila);
	
	celda=document.createElement("td");
	txt=document.createTextNode(kms.value);
	celda.appendChild(txt);
	fila.appendChild(celda);
	nodoTabla.appendChild(fila);
	
	celda=document.createElement("td");
	txt=document.createTextNode(entrega.value);
	celda.appendChild(txt);
	fila.appendChild(celda);
	nodoTabla.appendChild(fila);
	
	celda=document.createElement("td");
	btn=document.createElement("button");
	txt=document.createTextNode("eliminar");
	btn.appendChild(txt);
	btn.setAttribute("onclick","eliminar("+filas+")");
	celda.appendChild(btn);
	fila.appendChild(celda);
	nodoTabla.appendChild(fila);
	
	filas++;
	totalFilas++;
}

function eliminar(id){
	document.getElementById("fila"+id).remove();
	totalFilas--;
	if(totalFilas==0){
		filas=0;
	}
}

function comprobarTxt(){
	var patron=/^[a-zA-ZÁ-Úá-ú0-9\s]{2,15}$/;
	
	if(patron.test(marca.value)){
		if(patron.test(modelo.value)){
			return true;
		} else {
			alert("Error. El campo modelo es incorrecto");
			modelo.focus();
			return false;
		}
	} else {
		alert("Error. El campo marca es incorrecto");
		marca.focus();
		return false;
	}
}

function comprobarFabricacion(){
	var patron=/^\d{4}$/;
	
	if(patron.test(fabricacion.value)){
		if(fabricacion.value<1995 || fabricacion.value>2019){
			alert("Error. año de fabricacion debe estar comprendido entre 1995 y 2019");
			fabricacion.focus();
			return false;
		} else {
			return true;
		}
	} else {
		alert("Error. El campo año de fabricacion es incorrecto");
		fabricacion.focus();
		return false;
	}
}

function comprobarKms(){
	var patron=/^\d{1,6}$/;
	
	if(patron.test(kms.value)){
		if(kms.value>250000){
			alert("Error. los kilometros no pueden ser superiores a 250.000");
			kms.focus();
			return false;
		} else {
			return true;
		}
	} else {
		alert("Error. El campo kilometros es incorrecto");
		kms.focus();
		return false;
	}
}

function comprobarEntrega(){
	var patron=/^\d{2}\/\d{2}\/\d{4}$/;
	
	if(patron.test(entrega.value)){
		var month=entrega.value.substr(3,2);
		var year=entrega.value.substr(6);
		if (year==2019 && month>02 && month <13){
			return true;
		} else {
			alert("Error. La fecha indicada debe estar comprendida entre marzo y diciembre de 2019");
			entrega.focus();
			return false;
		}
	} else {
		alert("Error. La fecha indicada es incorrecta");
		entrega.focus();
		return false;
	}
}

function comprobarDni(){
	var patron=/^\d{8}[a-zA-Z]{1}$/;
	
	if(patron.test(dni.value)){
		var numDni=dni.value.substr(0,8);
		var letraDni=dni.value.substr(8).toUpperCase();
		var letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
		var num=numDni%23;
		var letraCalculada=letras[num];
		if(letraCalculada==letraDni){
			return true;
		} else {
			alert("Error. DNI incorrecto");
			dni.focus();
			return false;
		}
	} else {
		alert("Error. El campo DNI es incorrecto");
		dni.focus();
		return false;
	}
}

function comprobarNombre(){
	var patron=/^[a-zA-ZÁ-Úá-ú\s]{5,15}$/;
	
	if(patron.test(nombre.value)){
		return true;
	} else {
		alert("Error. El campo nombre y apellidos es incorrecto");
		nombre.focus();
		return false;
	}
}

function comprobarEmail(){
	var patron=/^[a-zA-Z0-9]{2,15}@[a-zA-Z0-9]{2,15}\.[a-zA-Z0-9]{2,4}$/;
	
	if(patron.test(email.value)){
		return true;
	} else {
		alert("Error. El campo email es incorrecto");
		email.focus();
		return false;
	}
}

function comprobarTelefono(){
	var patron=/^(\(\+34\))?[6|9]\d{8}$/; //El (+34) es opcional y el telefono debe empezar por 6 o 9
	
	if(patron.test(telefono.value)){
		return true;
	} else {
		alert("Error. El campo telefono es incorrecto");
		telefono.focus;
		return false;
	}
}