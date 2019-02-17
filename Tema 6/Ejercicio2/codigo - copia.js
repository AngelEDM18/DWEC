
	function iniciar(){
		cont=0;
		totalFilas = 0;
		nodoTabla = document.getElementById("Tabla");
	}
	
	function agregar(){
	
			var nombre=document.getElementById("nombre");
			var apellidos=document.getElementById("apellidos");

			//Si los campos están vacíos, no los introducimos.
			if (apellidos.value.trim()=="" || nombre.value.trim()=="") {
					
			} else {

			totalFilas++;
			nodoFila = document.createElement("tr");
			//Le añadimos el identificador único a la fila, para luego poder eliminarla.
			nodoFila.id=cont;
			nodoTabla.appendChild(nodoFila);
			
				//Sumamos al contador.
                cont++;

				//Celda del ID.
                nodoCelda= document.createElement("td");
				nodoFila.appendChild(nodoCelda);
				valorTexto = document.createTextNode(cont);
				nodoCelda.appendChild(valorTexto);

				//Celda del nombre.
				nodoCelda= document.createElement("td");
				nodoFila.appendChild(nodoCelda);
				valorTexto = document.createTextNode(nombre.value);
				nodoCelda.appendChild(valorTexto);

				//Celda de los apellidos.
                nodoCelda= document.createElement("td");
				nodoFila.appendChild(nodoCelda);
				valorTexto = document.createTextNode(apellidos.value);
				nodoCelda.appendChild(valorTexto);

				//Celda del curso.
                nodoCelda= document.createElement("td");
				nodoFila.appendChild(nodoCelda);
				valorTexto = document.createTextNode(curso.value);
				nodoCelda.appendChild(valorTexto);

				//Celda con el botón para eliminar el registro.
                nodoCelda= document.createElement("td");
				nodoCelda.setAttribute('style','text-align :center;');
				nodoFila.appendChild(nodoCelda);
				boton= document.createElement("button");
				nodoCelda.appendChild(boton);
				valorTexto = document.createTextNode("Borrar solicitud");
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