/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = inicializar;

function inicializar() {
    document.getElementById("boton").addEventListener("click", cargarPeliculas, false);
    document.getElementById("categorias").addEventListener("change", cargaVideoclub, false);
    cargaCategoria();
}

function cargaCategoria() {

    peticion_http = new XMLHttpRequest();
    peticion_http.onreadystatechange = muestraCategoria;

    peticion_http.open("GET", "cargarCategorias.jsp", true);
    peticion_http.send(null);

}

function muestraCategoria() {
    var codigo = "";
    var nombre = "";
    var txt = "<option value='nulo'>--------</option>";
    var longitud = 0;
    if (peticion_http.readyState == 4) {
        if (peticion_http.status == 200) {
            var document_xml = peticion_http.responseXML;
            var x = document_xml.getElementsByTagName("categoria");

            longitud = x.length;

            for (i = 0; i < longitud; i++) {
                codigo = document_xml.getElementsByTagName("codigo")[i].firstChild.nodeValue;
                nombre = document_xml.getElementsByTagName("nombre")[i].firstChild.nodeValue;
                txt = txt + "<option value=" + codigo + ">" + nombre + "</option>";
            }
            document.getElementById("categorias").innerHTML = txt;
        }
    }
}

function cargaVideoclub() {
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else if (window.ActiveXobject) {
        peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }

    peticion_http.onreadystatechange = muestraVideoclub;

    peticion_http.open("GET", "cargarVideoclub.jsp", true);
    peticion_http.send(null);

}

function muestraVideoclub() {
    var codigo = "";
    var nombre = "";
    var txt = "";
    var longitud = 0;
    if (peticion_http.readyState == 4) {
        if (peticion_http.status == 200) {
            var document_xml = peticion_http.responseXML;
            var x = document_xml.getElementsByTagName("videoclub");

            longitud = x.length;

            for (i = 0; i < longitud; i++) {
                codigo = document_xml.getElementsByTagName("codigo")[i].firstChild.nodeValue;
                nombre = document_xml.getElementsByTagName("nombre")[i].firstChild.nodeValue;
                txt = txt + "<option value=" + codigo + ">" + nombre + "</option>";
            }
            document.getElementById("videoclubs").innerHTML = txt;
        }
    }
}

function cargarPeliculas() {

    peticion_http = new XMLHttpRequest();


    peticion_http.onreadystatechange = muestraPeliculas;

    peticion_http.open("POST", "cargarPeliculas.jsp", true);
    var categoria = document.getElementById("categorias").value;
    var videoclub = document.getElementById("videoclubs").value;
    peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //var query = crearQuery();
    peticion_http.send("categoria="+categoria+"&videoclub="+videoclub);
}

function crearQuery() {
    var categoria = document.getElementById("categorias").value;
    var videoclub = document.getElementById("videoclubs").value;

    return "categoria=" + encodeURIComponent(categoria) + "&videoclub=" + encodeURIComponent(videoclub);
}

function muestraPeliculas() {
    var titulo = "";
    var txt = "";
    var longitud = 0;
    if (peticion_http.readyState == 4) {
        if (peticion_http.status == 200) {
            var document_xml = peticion_http.responseXML;
            var x = document_xml.getElementsByTagName("pelicula");

            longitud = x.length;

            for (i = 0; i < longitud; i++) {
                titulo = document_xml.getElementsByTagName("titulo")[i].firstChild.nodeValue;
                txt = txt + titulo + "<br/>";
            }
            document.getElementById("peliculasEncontradas").innerHTML = txt;
        }
    }
}