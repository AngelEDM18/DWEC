window.onload=iniciar;

function iniciar(){
	genera=document.getElementById("genera");
	nodoPrimero=document.getElementById("primero");
	nodoSegundo=document.getElementById("segundo");
	suma=document.getElementById("suma");
	resta=document.getElementById("resta");
	nodoResultado=document.getElementById("resultado");
	
	genera.addEventListener("click", generar, false);
	suma.addEventListener("click", sumar, false);
	resta.addEventListener("click", restar, false);
}

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
	
	elemento1=document.createElement("p");
	txt1=document.createTextNode(num1);
	elemento1.appendChild(txt1);
	nodoPrimero.appendChild(elemento1);
	
	elemento2=document.createElement("p");
	txt2=document.createTextNode(num2);
	elemento2.appendChild(txt2);
	nodoSegundo.appendChild(elemento2);
}

function sumar(){
	if(nodoResultado.hasChildNodes()){
		nodoResultado.removeChild(nodoResultado.firstChild);
	}
	
	res=num1+num2;
	
	elementoR=document.createElement("p");
	txtR=document.createTextNode(res);
	elementoR.appendChild(txtR);
	nodoResultado.appendChild(elementoR);
}

function restar(){
	if(nodoResultado.hasChildNodes()){
		nodoResultado.removeChild(nodoResultado.firstChild);
	}
	
	res=num1-num2;
	
	elementoR=document.createElement("p");
	txtR=document.createTextNode(res);
	elementoR.appendChild(txtR);
	nodoResultado.appendChild(elementoR);
}