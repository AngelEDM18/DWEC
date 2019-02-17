window.onload=nivel2;


function nivel2(objeto){
    reiniciarNivel2();
    switch(objeto.id){
        case 'ESO':
            reiniciarNivel2();
            reiniciarNivel4();

            celda=document.createElement("td");  celda.innerHTML="1º ESO";
            celda.setAttribute("onmouseout", "this.style.background='WHITE';this.style.color='BLACK'");
            celda.setAttribute("onmouseover", "this.style.background='#008080';this.style.color='WHITE'");
            fila = document.createElement("tr");  fila.appendChild(celda);
            document.getElementById("tablaNivel2").appendChild(fila);

            celda=document.createElement("td");  celda.innerHTML="2º ESO";
            celda.setAttribute("onmouseout", "this.style.background='WHITE';this.style.color='BLACK'");
            celda.setAttribute("onmouseover", "this.style.background='#008080';this.style.color='WHITE'");
            fila = document.createElement("tr");  fila.appendChild(celda);
            document.getElementById("tablaNivel2").appendChild(fila);

            celda=document.createElement("td");  celda.innerHTML="3º ESO";
            celda.setAttribute("onmouseout", "this.style.background='WHITE';this.style.color='BLACK'");
            celda.setAttribute("onmouseover", "this.style.background='#008080';this.style.color='WHITE'");
            fila = document.createElement("tr");  fila.appendChild(celda);
            document.getElementById("tablaNivel2").appendChild(fila);

            celda=document.createElement("td");  celda.innerHTML="4º ESO";
            celda.setAttribute("onmouseout", "this.style.background='WHITE';this.style.color='BLACK'");
            celda.setAttribute("onmouseover", "this.style.background='#008080';this.style.color='WHITE'");
            fila = document.createElement("tr");  fila.appendChild(celda);
            document.getElementById("tablaNivel2").appendChild(fila);

        break;
        
        case 'CFGM':
            reiniciarNivel3();
            reiniciarNivel4();

            celda=document.createElement("td");  celda.innerHTML="1º GM";
            celda.setAttribute("onmouseout", "this.style.background='WHITE';this.style.color='BLACK'");
            celda.setAttribute("onmouseover", "this.style.background='#008080';this.style.color='WHITE'");
            fila = document.createElement("tr");  fila.appendChild(celda);
            document.getElementById("tablaNivel2").appendChild(fila);

            celda=document.createElement("td");  celda.innerHTML="2º GM";
            celda.setAttribute("onmouseout", "this.style.background='WHITE';this.style.color='BLACK'");
            celda.setAttribute("onmouseover", "this.style.background='#008080';this.style.color='WHITE'");
            fila = document.createElement("tr");  fila.appendChild(celda);
            document.getElementById("tablaNivel2").appendChild(fila);
        break;
		
		case 'CFGS':
			reiniciarNivel3();
            reiniciarNivel4();
			celda=document.createElement("td");  celda.innerHTML="Imagen para el Diagnostico";
            celda.setAttribute("onmouseout", "this.style.background='WHITE';this.style.color='BLACK'");
            celda.setAttribute("onmouseover", "this.style.background='#008080';this.style.color='WHITE'");
            fila = document.createElement("tr");  fila.appendChild(celda);
            document.getElementById("tablaNivel2").appendChild(fila);

            celda=document.createElement("td");  celda.innerHTML="Desarrollo de Aplicaciones Web";
            celda.setAttribute("onmouseout", "this.style.background='WHITE';this.style.color='BLACK'");
            celda.setAttribute("onmouseover", "this.style.background='#008080';this.style.color='WHITE'");
            fila = document.createElement("tr");  fila.appendChild(celda);
            document.getElementById("tablaNivel2").appendChild(fila);
			break;
    }
	posicionarNivel2(objeto);
}

function reiniciarNivel2(){
    var tablaNivel2 = document.getElementById("tablaNivel2");
    var indice = tablaNivel2.childNodes.length;
    for(var i = indice - 1; i>=0 ; i--){
        tablaNivel2.removeChild(tablaNivel2.childNodes[i]);
    }
}

function reiniciarNivel3(){
    var tablaNivel2 = document.getElementById("tablaNivel2");
    var indice = tablaNivel2.childNodes.length;
    for(var i = indice - 1; i>=0 ; i--){
        tablaNivel2.removeChild(tablaNivel2.childNodes[i]);
    }
}

function reiniciarNivel4(){
    var tablaNivel2 = document.getElementById("tablaNivel2");
    var indice = tablaNivel2.childNodes.length;
    for(var i = indice - 1; i>=0 ; i--){
        tablaNivel2.removeChild(tablaNivel2.childNodes[i]);
    }
}

function getAbsoluteElementPosition(element){
    if(typeof element == "string")
        element = document.getElementById(element)
    if(!element) return {top:0,left:0};

    var y=0;
    var x=0;
    while (element.offsetParent){
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    }
    return {top:y,left:x};
}

function posicionarNivel2(objeto){
    var pos = getAbsoluteElementPosition(objeto);
    var x = pos.top;
    var y = pos.left;

    var ventanita = document.getElementById("ventanaNivel2");
    ventanita.style.top = x+objeto.offsetTop+"px";
    ventanita.style.left = y+"px";
}

function posicionarNivel3(objeto){
    var pos = getAbsoluteElementPosition(objeto);
    var x = pos.top;
    var y = pos.left;

    var ventanita = document.getElementById("ventanaNivel3");
    ventanita.style.top = x+objeto.offsetTop+"px";
    ventanita.style.left = y+"px";
}

function nivel3(objeto){
	reiniciarNivel3();
	switch(objeto.id){
		case "DAW":
			celda=document.createElement("td");
			celda.innerHTML="1º DAW";
			celda.setAttribute("id","1DAW");
			celda.setAttribute("onmouseover","nivel4(this);this.style.background='#008080';this.style.color='WHITE'");
			celda.setAttribute("onmouseout","this.style.background='WHITE'; this.style.color='BLACK'");
			fila=document.createElement("tr");
			fila.appendChild(celda);
			document.getElementById("tablaNivel3").appendChild(fila);
			
			celda=document.createElement("td");
			celda.innerHTML="2º DAW";
			celda.setAttribute("id","2DAW");
			celda.setAttribute("onmouseover","nivel4(this);this.style.background='#008080';this.style.color='WHITE'");
			celda.setAttribute("onmouseout","this.style.background='WHITE'; this.style.color='BLACK'");
			fila=document.createElement("tr");
			fila.appendChild(celda);
			document.getElementById("tablaNivel3").appendChild(fila);
			break;
	}
}