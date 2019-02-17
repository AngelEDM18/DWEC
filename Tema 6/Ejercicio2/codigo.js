	function iniciar(){
		cont=0;
		totalFilas = 0;
		nodoTabla = document.getElementById("Tabla");
	}
	function agregar(){
			var nombre=document.getElementById("nombre");
			var apellidos=document.getElementById("apellidos");
			if (apellidos.value.trim()=="" || nombre.value.trim()=="") {

			} else {

				totalFilas++;
				nodoFila = document.createElement("tr");
				nodoFila.id=cont;
				nodoTabla.appendChild(nodoFila);
                cont++;

                nodoCelda= document.createElement("td");
				nodoFila.appendChild(nodoCelda);
				valorTexto = document.createTextNode(cont);
				nodoCelda.appendChild(valorTexto);

				nodoCelda= document.createElement("td");
				nodoFila.appendChild(nodoCelda);
				valorTexto = document.createTextNode(nombre.value);
				nodoCelda.appendChild(valorTexto);

                nodoCelda= document.createElement("td");
				nodoFila.appendChild(nodoCelda);
				valorTexto = document.createTextNode(apellidos.value);
				nodoCelda.appendChild(valorTexto);

                nodoCelda= document.createElement("td");
				nodoFila.appendChild(nodoCelda);
				valorTexto = document.createTextNode(curso.value);
				nodoCelda.appendChild(valorTexto);

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
	function eliminar(id){
		totalFilas--;
		document.getElementById(id).remove();
		if (totalFilas==0){
			cont=0;
		}
	}