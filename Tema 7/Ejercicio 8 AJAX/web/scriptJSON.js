/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var READY_STATE_COMPLETE = 4;
var peticion_http = null;

/*function inicializa_xhr() {
 if (window.XMLHttpRequest) {
 return new XMLHttpRequest();
 } else if (window.ActiveXObject) {
 return new ActiveXObject("Microsoft.XMLHTTP");
 }
 }*/

window.onload = inicializar;

function inicializar() {
    document.getElementById("boton").addEventListener("click", cargarPeliculas, false);
    document.getElementById("categorias").addEventListener("change", consultaVideoclubs, false);
    cargaCategoria();
}

function cargaCategoria() {
    selectCategorias = document.getElementById("categorias");
    selectVideoclubs = document.getElementById("videoclubs");
    celdaPeliculas = document.getElementById("peliculasEncontradas");
    selectCategorias.innerHTML = selectCategoriasOpcion1;
    selectVideoclubs.innerHTML = selectVideoclubsOpcion1;
    consultaCategorias();

}

var selectCategoriasOpcion1 = "<option value=''>- Selecciona -</option>";
var selectVideoclubsOpcion1 = "<option value=''>- Selecciona -</option>";

function consultaCategorias() {
    peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.onreadystatechange = procesaCategorias;
        peticion_http.open("GET", "cargarCategoriasJSON.jsp", true);
        peticion_http.send(null);
    }
}

function procesaCategorias() {
    if (peticion_http.readyState == READY_STATE_COMPLETE && peticion_http.status == 200) {
        var respuesta_json = peticion_http.responseText;
        var categorias = eval("(" + respuesta_json + ")");
        for (var i = 0; i < categorias.length; i++) {
            var codigo = categorias[i].codigo;
            var nombre = categorias[i].nombre;
            var opcion = "<option value=" + codigo + ">" + nombre + "</option>";
            selectCategorias.innerHTML += opcion;
        }
    }
}

function consultaVideoclubs() {
    peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.onreadystatechange = procesaVideoclubs;
        peticion_http.open("GET", "cargarVideoclubsJSON.jsp", true);
        peticion_http.send(null);
    }
}

function procesaVideoclubs() {
    if (peticion_http.readyState == READY_STATE_COMPLETE && peticion_http.status == 200) {
        selectVideoclubs.innerHTML = selectVideoclubsOpcion1;
        var respuesta_json = peticion_http.responseText;
        var videoclubs = eval("(" + respuesta_json + ")");
        for (var i = 0; i < videoclubs.length; i++) {
            var codigo = videoclubs[i].codigo;
            var nombre = videoclubs[i].nombre;
            var opcion = "<option value=" + codigo + ">" + nombre + "</option>";
            selectVideoclubs.innerHTML += opcion;
        }
    }
}

function cargarPeliculas() {


    peticion_http = new XMLHttpRequest();


    peticion_http.onreadystatechange = muestraPeliculas;

    peticion_http.open("POST", "cargarPeliculasJSON.jsp", true);
    peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var query = crearQuery();
    peticion_http.send(query);
}

function crearQuery() {
    var categoria = document.getElementById("categorias").value;
    var videoclub = document.getElementById("videoclubs").value;

    return "categoria=" + encodeURIComponent(categoria) + "&videoclub=" + encodeURIComponent(videoclub);
}

function muestraPeliculas() {
    if (peticion_http.readyState == READY_STATE_COMPLETE && peticion_http.status == 200) {
        var respuesta_json = peticion_http.responseText;
        var peliculas = eval("(" + respuesta_json + ")");
        for (var i = 0; i < peliculas.length; i++) {
            var titulo = peliculas[i].titulo;
            celdaPeliculas.innerHTML += titulo + "<br/>";
        }
    }
}

