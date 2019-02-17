function generar(){
	num1 = parseInt(Math.random()*10);
	num2 = parseInt(Math.random()*10);
	nodoPrimero = document.getElementById("primero");
	nodoSegundo = document.getElementById("segundo");
	if(nodoPrimero.hasChildNodes()){
		nodoPrimero.removeChild(nodoPrimero.firstChild);
	}
	if(nodoSegundo.hasChildNodes()){
		nodoSegundo.removeChild(nodoSegundo.firstChild);
	}
	valorTexto1 = document.createTextNode(num1);
	valorTexto2 = document.createTextNode(num2);
	defaultTxt = document.createTextNode("");
	nodoPrimero.appendChild(valorTexto1);
	nodoSegundo.appendChild(valorTexto2);
}

function comparar(){
	nodoResultado=document.getElementById("resultado");
	if(nodoResultado.hasChildNodes()){
		nodoResultado.removeChild(nodoResultado.firstChild);
	}
	if(num1<num2){
		valortextoR=document.createTextNode(num2);
		nodoSegundo.removeChild(nodoSegundo.firstChild);
	} else {
		valortextoR=document.createTextNode(num1);
		nodoPrimero.removeChild(nodoPrimero.firstChild);
	}
	nodoResultado.appendChild(valortextoR);
}