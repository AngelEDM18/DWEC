window.onload=iniciar();

function iniciar(){
	filas=0;
}

function agregar(){
	marca=document.getElementById("marca");
	modelo=document.getElementById("modelo");
	anoFabricacion=document.getElementById("anoFabricacion");
	kms=document.getElementById("kms");
	fechaEntrega=document.getElementById("fechaEntrega");
	nombre=document.getElementById("nombre");
	apellidos=document.getElementById("apellidos");
	correo=document.getElementById("correo");
	telefono=document.getElementById("telefono");
	nodoTabla=document.getElementById("tablaSolicitudes");
	
	if(comprobarTxt() && comprobarModelo() && comprobarFecha() && comprobarKms() && comprobarCorreo() && comprobarTelefono()){
		nuevaFila();
	}
}

function nuevaFila(){
	nodoFila=document.createElement("tr");
	nodoFila.setAttribute("id","fila"+filas);
	
	nodoColumna=document.createElement("td");
	txtId=document.createTextNode(filas);
	nodoColumna.appendChild(txtId);
	nodoFila.appendChild(nodoColumna);
	
	nodoColumna=document.createElement("td");
	txtMarca=document.createTextNode(marca.value);
	nodoColumna.appendChild(txtMarca);
	nodoFila.appendChild(nodoColumna);
	
	nodoColumna=document.createElement("td");
	txtModelo=document.createTextNode(modelo.value);
	nodoColumna.appendChild(txtModelo);
	nodoFila.appendChild(nodoColumna);
	
	nodoColumna=document.createElement("td");
	txtFabricacion=document.createTextNode(anoFabricacion.value);
	nodoColumna.appendChild(txtFabricacion);
	nodoFila.appendChild(nodoColumna);
	
	nodoColumna=document.createElement("td");
	txtKms=document.createTextNode(kms.value);
	nodoColumna.appendChild(txtKms);
	nodoFila.appendChild(nodoColumna);
	
	nodoColumna=document.createElement("td");
	txtFechaEntrega=document.createTextNode(fechaEntrega.value);
	nodoColumna.appendChild(txtFechaEntrega);
	nodoFila.appendChild(nodoColumna);
	
	nodoColumna=document.createElement("td");
	txtNombre=document.createTextNode(nombre.value);
	nodoColumna.appendChild(txtNombre);
	nodoFila.appendChild(nodoColumna);
	
	nodoColumna=document.createElement("td");
	txtApellidos=document.createTextNode(apellidos.value);
	nodoColumna.appendChild(txtApellidos);
	nodoFila.appendChild(nodoColumna);
	
	nodoColumna=document.createElement("td");
	txtCorreo=document.createTextNode(correo.value);
	nodoColumna.appendChild(txtCorreo);
	nodoFila.appendChild(nodoColumna);
	
	nodoColumna=document.createElement("td");
	txtTelefono=document.createTextNode(telefono.value);
	nodoColumna.appendChild(txtTelefono);
	nodoFila.appendChild(nodoColumna);
	
	nodoColumna=document.createElement("td");
	nodoBtn=document.createElement("button");
	txtBtn=document.createTextNode("eliminar");
	nodoBtn.setAttribute("onclick","eliminar("+filas+")");
	nodoBtn.appendChild(txtBtn);
	nodoColumna.appendChild(nodoBtn);
	nodoFila.appendChild(nodoColumna);
	
	nodoTabla.appendChild(nodoFila);
	filas++;
}

function eliminar(id){
	document.getElementById("fila"+id).remove();
}

function comprobarTxt(){
	var patronTxt=/^[a-zA-ZÁ-Úá-ú\s]{2,15}?/;
	if(patronTxt.test(marca.value)){
		if(patronTxt.test(nombre.value)){
			if(patronTxt.test(apellidos.value)){
				return true;
			} else {
				alert("El campo apellidos es incorrecto.");
				apellidos.focus();
				return false;
			}
		} else {
			alert("El campo nombre es incorrecto.");
			nombre.focus();
			return false;
		}
	} else{
		alert("El campo marca es incorrecto.");
		marca.focus();
		return false;
	}
}

function comprobarModelo(){
	var patronModelo=/^[a-zA-ZÁ-Úá-ú0-9\s]{2,15}?/;
	
	if(patronModelo.test(modelo.value)){
		return true;
	} else {
		alert("El campo modelo es incorrecto.");
		modelo.focus();
		return false;
	}
}

function comprobarFecha(){
	var patronFecha=/^\d{2}\/\d{2}\/\d{4}?/;
	
	if (patronFecha.test(anoFabricacion.value)){
		var year=anoFabricacion.value.substr(6,8);
		if (year>1994&&year<2017){
			if (patronFecha.test(fechaEntrega.value)){
				var month=fechaEntrega.value.substr(3,2);
				year=fechaEntrega.value.substr(6,8);
				if(year==2016 && month>02 && month <13){
					return true;
				} else {
					alert("La fecha de entrega seleccionada no esta disponible.");
					fechaEntrega.focus();
					return false;
				}
			} else {
				alert("La fecha de entrega es incorrecta.");
				fechaEntrega.focus();
				return false;
			}
		} else {
			alert("El año de fabricacion es incorrecto.");
			anoFabricacion.focus();
			return false;
		}
	} else {
		alert("El campo año de fabricacion es incorrecto.");
		anoFabricacion.focus();
		return false;
	}
}

function comprobarKms(){
	var patronKms=/^\d+?/;
	if(patronKms.test(kms.value)){
		return true;
	} else {
		alert("El campo kilometros es incorrecto.");
		kms.focus();
		return false;
	}
}

function comprobarCorreo(){
	var patronCorreo=/^.{2,15}@.{2,10}\.[a-zA-Z]{2,4}?/;
	if(patronCorreo.test(correo.value)){
		return true;
	} else {
		alert("El campo correo es incorrecto.");
		correo.focus();
		return false;
	}
}

function comprobarTelefono(){
	var patronTelefono=/^\d{9}?/;
	if(patronTelefono.test(telefono.value)){
		return true;
	} else {
		alert("El campo telefono es incorrecto.");
		telefono.focus();
		return false;
	}
}