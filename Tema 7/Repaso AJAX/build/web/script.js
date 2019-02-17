window.onload = inicializar;

function inicializar() {
    document.getElementById("btn").addEventListener("click", cargarPedidosCliente, false);
    selectClientes = document.getElementById("clientes");
    selectPedidos = document.getElementById("pedidos");
    nodoRespuesta = document.getElementById("respuesta");
    selectClientes.addEventListener("change", cargarPedidos, false);
    iniciarSelects();
    cargarClientes();
}

function iniciarSelects() {
    var defC = document.createElement("option");
    var txtDefC = document.createTextNode("Selecciona un cliente");
    defC.appendChild(txtDefC);
    selectClientes.appendChild(defC);

    var defP = document.createElement("option");
    var txtDefP = document.createTextNode("Por favor, selecciona un cliente");
    defP.appendChild(txtDefP);
    selectPedidos.appendChild(defP);
}

function cargarClientes() {
    peticion_http = new XMLHttpRequest();
    peticion_http.open("GET", "cargarClientes.jsp", true)
    peticion_http.send(null);
    peticion_http.onreadystatechange = mostrarClientes;
}

function mostrarClientes() {
    if (peticion_http.status == 200 && peticion_http.readyState == 4) {
        respuesta = peticion_http.responseXML;
        var clientes = respuesta.getElementsByTagName("cliente");
        for (var i = 0; i < clientes.length; i++) {
            var cod = clientes[i].getElementsByTagName("codigo")[0].firstChild.nodeValue;
            var nombre = clientes[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
            var txt = document.createTextNode(nombre)
            var opcion = document.createElement("option");
            opcion.appendChild(txt)
            opcion.setAttribute("value", cod);
            selectClientes.appendChild(opcion);
        }
    }
}

function cargarPedidos() {
    var cliente = selectClientes.value;
    peticion_http = new XMLHttpRequest();
    peticion_http.open("POST", "cargarPedidos.jsp", true);
    peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion_http.send("codigo=" + cliente);
    peticion_http.onreadystatechange = mostrarPedidos;
}

function mostrarPedidos() {
    if (peticion_http.status == 200 && peticion_http.readyState == 4) {
        respuesta = peticion_http.responseXML;
        var pedidos = respuesta.getElementsByTagName("pedido");

        for (var i = 0; i < pedidos.length; i++) {
            var opcion = document.createElement("option");
            var txt = document.createTextNode(pedidos[i].getElementsByTagName("fecha")[0].firstChild.nodeValue);
            opcion.appendChild(txt);
            opcion.setAttribute("value", pedidos[i].getElementsByTagName("codigo")[0].firstChild.nodeValue);
            selectPedidos.appendChild(opcion);
        }
    }
}

function cargarPedidosCliente() {
    var codigo = selectPedidos.value;
    peticion_http = new XMLHttpRequest();
    peticion_http.open("POST", "cargarPedidosCliente.jsp", true);
    peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion_http.send("codigo=" + codigo);
    peticion_http.onreadystatechange = mostrarPedidosCliente;
}

function mostrarPedidosCliente() {
    if (peticion_http.status == 200 && peticion_http.readyState == 4) {
        var respuesta = peticion_http.responseXML;
        var pedido = respuesta.getElementsByTagName("pedido");
        var tabla = document.createElement("table");
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var txt = document.createTextNode("Nombre del producto");
        td.appendChild(txt);
        tr.appendChild(td);
        var txt = document.createTextNode("Cantidad");
        td = document.createElement("td");
        td.appendChild(txt);
        tr.appendChild(td);
        var txt = document.createTextNode("Precio");
        td = document.createElement("td");
        td.appendChild(txt);
        tr.appendChild(td);
        var txt = document.createTextNode("Descuento");
        td = document.createElement("td");
        td.appendChild(txt);
        tr.appendChild(td);
        var txt = document.createTextNode("Total");
        td = document.createElement("td");
        td.appendChild(txt);
        tr.appendChild(td);
        tabla.appendChild(tr);
        txt = document.createTextNode(pedido[0].getElementsByTagName("nombre")[0].firstChild.nodeValue);
        tr = document.createElement("tr");
        td = document.createElement("td");
        td.appendChild(txt);
        tr.appendChild(td);
        txt = document.createTextNode(pedido[0].getElementsByTagName("cantidad")[0].firstChild.nodeValue);
        td = document.createElement("td");
        td.appendChild(txt);
        tr.appendChild(td);
        txt = document.createTextNode(pedido[0].getElementsByTagName("precio")[0].firstChild.nodeValue);
        td = document.createElement("td");
        td.appendChild(txt);
        tr.appendChild(td);
        txt = document.createTextNode(pedido[0].getElementsByTagName("descuento")[0].firstChild.nodeValue);
        td = document.createElement("td");
        td.appendChild(txt);
        tr.appendChild(td);
        txt = document.createTextNode(pedido[0].getElementsByTagName("total")[0].firstChild.nodeValue);
        td = document.createElement("td");
        td.appendChild(txt);
        tr.appendChild(td);
        tabla.appendChild(tr);
        nodoRespuesta.appendChild(tabla);
    }
}