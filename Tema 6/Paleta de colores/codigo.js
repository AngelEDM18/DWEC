function iniciar() {
    dibujarTableroDibujo();
}

var colorActivo="";
pintarActivado=false;

function color1() {
    document.getElementById("color1").className='color1 seleccionado';
    document.getElementById("color2").className='color2';
    document.getElementById("color3").className='color3';
    document.getElementById("color4").className='color4';
    document.getElementById("color5").className='color5';
    document.getElementById("color6").className='color6';
    colorActivo="#FF0";
}

 function color2() {
    document.getElementById("color1").className='color1';
    document.getElementById("color2").className='color2 seleccionado';
    document.getElementById("color3").className='color3';
    document.getElementById("color4").className='color4';
    document.getElementById("color5").className='color5';
    document.getElementById("color6").className='color6';
    colorActivo="#0F0";
}

function color3() {
    document.getElementById("color1").className='color1';
    document.getElementById("color2").className='color2';
    document.getElementById("color3").className='color3 seleccionado';
    document.getElementById("color4").className='color4';
    document.getElementById("color5").className='color5';
    document.getElementById("color6").className='color6';
    colorActivo="#000";
    }

function color4() {
    document.getElementById("color1").className='color1';
    document.getElementById("color2").className='color2';
    document.getElementById("color3").className='color3';
    document.getElementById("color4").className='color4 seleccionado';
    document.getElementById("color5").className='color5';
    document.getElementById("color6").className='color6';
    colorActivo="#F00";
}

function color5() {
    document.getElementById("color1").className='color1';
    document.getElementById("color2").className='color2';
    document.getElementById("color3").className='color3';
    document.getElementById("color4").className='color4';
    document.getElementById("color5").className='color5 seleccionado';
    document.getElementById("color6").className='color6';
    colorActivo="#06C";
}

function color6() {
    document.getElementById("color1").className='color1';
    document.getElementById("color2").className='color2';
    document.getElementById("color3").className='color3';
    document.getElementById("color4").className='color4';
    document.getElementById("color5").className='color5';
    document.getElementById("color6").className='color6 seleccionado';
    colorActivo="#FFF";
}

function dibujarTableroDibujo() {

	var nuevaTabla=document.createElement("table");
	nuevaTabla.setAttribute("border","1");
	nuevaTabla.setAttribute("id","tablero");
    nuevaTabla.setAttribute("class","tablerodibujo");
    nuevaTabla.setAttribute("onclick","activar(this)");

	var tituloTabla=document.createElement("caption");
	var contenidoTitulo=document.createTextNode("Haga click en cualquier celda para activar/desactivar el pincel.");
	tituloTabla.appendChild(contenidoTitulo);
	nuevaTabla.appendChild(tituloTabla);

	for (let i = 1; i < 35; i++) {
        var nuevaFila=document.createElement("tr");
                
		for (let x = 1; x < 35; x++) {
            var nuevaCelda=document.createElement("td");
            nuevaCelda.setAttribute("id","celdita");
            nuevaCelda.setAttribute("onmouseover","pintarCelda(this)");
            nuevaCelda.setAttribute("onclick","this.style.backgroundColor=colorActivo");
			nuevaFila.appendChild(nuevaCelda);
		}
		nuevaTabla.appendChild(nuevaFila);
	}
	document.getElementById("zonadibujo").appendChild(nuevaTabla);
}

function activar(objeto) {

    if (pintarActivado==true){
        pintarActivado=false;
        document.getElementById("pincel").innerHTML="PINCEL DESACTIVADO.";
    } else {
        pintarActivado=true;
        document.getElementById("pincel").innerHTML="PINCEL ACTIVADO.";
    } 

}

function pintarCelda(objeto) {
    if (pintarActivado){
        objeto.style.backgroundColor=colorActivo;
    }
}




