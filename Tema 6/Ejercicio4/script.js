function iniciar(){
	arribaIzq=document.getElementById("arribaIzq");
	arribaDer=document.getElementById("arribaDer");
	abajoIzq=document.getElementById("abajoIzq");
	abajoDer=document.getElementById("abajoDer");
	
	arribaIzq.addEventListener("click",comprobar1,false);
	arribaDer.addEventListener("click",comprobar2,false);
	abajoIzq.addEventListener("click",comprobar3,false);
	abajoDer.addEventListener("click",comprobar4,false);
}

function comprobar1(){
	if(arribaIzq.hasChildNodes()){
		arribaIzq.removeChild(arribaIzq.firstChild);
	}
	valorTexto1 = document.createTextNode("Arriba izquierda");
	arribaIzq.appendChild(valorTexto1);
}
function comprobar2(){
	if(arribaIzq.hasChildNodes()){
		arribaIzq.removeChild(arribaIzq.firstChild);
	}
	valorTexto1 = document.createTextNode("Arriba derecha");
	arribaIzq.appendChild(valorTexto1);
}
function comprobar3(){
	if(arribaIzq.hasChildNodes()){
		arribaIzq.removeChild(arribaIzq.firstChild);
	}
	valorTexto1 = document.createTextNode("Abajo izquierda");
	arribaIzq.appendChild(valorTexto1);
}
function comprobar4(){
	if(arribaIzq.hasChildNodes()){
		arribaIzq.removeChild(arribaIzq.firstChild);
	}
	valorTexto1 = document.createTextNode("Abajo derecha");
	arribaIzq.appendChild(valorTexto1);
}

