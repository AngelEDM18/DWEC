
	function iniciar(){
		//Iniciamos el contador del ID, el total de filas y capturamos la tabla.
		cont=0;
		totalFilas = 0;
		nodoTabla = document.getElementById("tablaSolicitudes");
	}
	
	function agregar(){

		//Comprobamos el año de fabricación.
		var anoFabricacioncorrecto=false;
		var anoFabricacion=document.getElementById("anoFabricacion");
		if (anoFabricacion.value<1995 || anoFabricacion.value>2016){
			anoFabricacioncorrecto=false;
			alert("El año de fabricación es incorrecto.");
		} else {
			anoFabricacioncorrecto=true;
		}

		//Comprobamos los kilómetros.
		var kmsCorrecto=false;
		var kms=document.getElementById("kms").value;
		var patronKms = /^[0-9]+$/;
		if (patronKms.test(kms)){
			kmsCorrecto=true;
		} else {
			alert("Los kilómetros introducidos son incorrectos.");
			kmsCorrecto=false;
		}

		//Comprobamos la fecha de entrega.
		var fecha=document.getElementById("fechaEntrega");
		var patron_fecha = /^((0?[1-9])|(1\d)|(2\d)|(3[0-1]))[-|\/]((0?[1-9])|(1[0-2]))[-|\/]([1-2]\d{3})$/;
		
				if (fecha.value == null || fecha.value.length == 0 || /^\s+$/.test(fecha.value)) {
					alert("El campo 'Fecha de entrega' está vacío");
				  
					return false;
				} else if (fecha.value == null || fecha.value.length == 0 || /^\s+$/.test(fecha.value)) {
					alert("El campo 'Fecha de entrega' está vacío");
		
					return false;
				} else if (!patron_fecha.test(fecha.value)) {
					alert("El formato de la fecha no es el correcto.");
				   
					return false;
				} else if (!existeFecha(fecha.value)) {
					alert("El fecha de entrega debe estar comprendida entre MARZO y DICIEMBRE en 2016");
			   
					return false;
				}
		
				function existeFecha(date) {
					var fechaf = date.split("/");
					var day = fechaf[0];
					var month = fechaf[1];
					var year = fechaf[2];
					var diasDelMes = daysInMonth(month, year);
		
					if ((month >= 3 && month <= 12)
							&& (year >= 2016 && year <= 2016)
							&& (day > 0 && day <= diasDelMes)) {
			  
						return true;
					} else {
					
						return false;
					}
		
					function daysInMonth(month, year) {
						return new Date(year || new Date().getFullYear(), month, 0).getDate();
					}
				}		

		//Comprobamos que el correo electrónico es correcto.
		var correoCorrecto=false;
    	var correo=document.getElementById("correo");
    	var patronCorreo = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if (patronCorreo.test(correo.value)){
			correoCorrecto=true;
		} else {
			alert("El correo electrónico es incorrecto.");
			correoCorrecto=false;
		}

		//Comprobamos el teléfono.
		var telefonoCorrecto=false;
		var patronTelefono = /^\d{9}$/;
		var telefono=document.getElementById("telefono").value;
		if (patronTelefono.test(telefono)){
			telefonoCorrecto=true;
		} else {
			telefonoCorrecto=false;
			alert("El teléfono es incorrecto.");
		} 

			if (anoFabricacioncorrecto & kmsCorrecto & correoCorrecto & telefonoCorrecto) {

				//Sumamos uno al total de filas y creamos la fila (tr).
				totalFilas++;
				nodoFila = document.createElement("tr");

				//Le añadimos el identificador único a la fila, para luego poder eliminarla.
				nodoFila.id=cont;
				nodoTabla.appendChild(nodoFila);

				//Sumamos al contador de ID.
				cont++;

				//Creamos un Array con todos los datos introducidos.
				var datos = [];
				//Número del identificador.
				datos.push(cont);
				datos.push(document.getElementById("nombre").value);
				datos.push(document.getElementById("apellidos").value);
				datos.push(document.getElementById("correo").value);
				datos.push(document.getElementById("telefono").value);
				datos.push(document.getElementById("marca").value);
				datos.push(document.getElementById("modelo").value);
				datos.push(document.getElementById("anoFabricacion").value);
				datos.push(document.getElementById("kms").value);
				datos.push(document.getElementById("fechaEntrega").value);

				//Creamos las celdas con los datos introducidos.
				for (let i = 0; i < datos.length; i++) {
					nodoCelda= document.createElement("td");
					nodoFila.appendChild(nodoCelda);
					valorTexto = document.createTextNode(datos[i]);
					nodoCelda.appendChild(valorTexto);
				}

				//Celda con el botón para eliminar el registro.
				nodoCelda= document.createElement("td");
				nodoCelda.setAttribute('style','text-align :center;');
				nodoFila.appendChild(nodoCelda);
				boton= document.createElement("button");
				nodoCelda.appendChild(boton);
				valorTexto = document.createTextNode("Eliminar");
				boton.appendChild(valorTexto);
				boton.setAttribute("onclick","eliminar("+(cont-1)+")");
							
			}
					
		}
	
	//Función para eliminar la fila, pasándole el id del tr.
	function eliminar(id){

				//Restamos uno a las filas.
				totalFilas--;
				
				//Eliminamos el elemento.
				document.getElementById(id).remove();
			
				//Si borramos todas las filas, se reinicia el contador.
				if (totalFilas==0){
					cont=0;
				}

	}