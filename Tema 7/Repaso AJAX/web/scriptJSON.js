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
    peticion_http.open("GET", "cargarClientesJSON.jsp", true)
    peticion_http.send(null);
    peticion_http.onreadystatechange = mostrarClientes;
}

function mostrarClientes() {
    if (peticion_http.status == 200 && peticion_http.readyState == 4) {
        var respuesta = peticion_http.responseText;
        var clientes = eval("(" + respuesta + ")");
        for (var i = 0; i < clientes.length; i++) {
            var cod = clientes[i].codigo;
            var nombre = clientes[i].nombre;
            var txt = document.createTextNode(nombre)
            var opcion = document.createElement("option");
            opcion.appendChild(txt)
            opcion.setAttribute("value", cod);
            selectClientes.appendChild(opcion);
        }
    }
}

function cargarPedidos() {
    if (selectPedidos.hasChildNodes()) {
        selectPedidos.innerHTML="";
    }
    var cliente = selectClientes.value;
    peticion_http = new XMLHttpRequest();
    peticion_http.open("POST", "cargarPedidosJSON.jsp", true);
    peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion_http.send("codigo=" + cliente);
    peticion_http.onreadystatechange = mostrarPedidos;
}

function mostrarPedidos() {
    if (peticion_http.status == 200 && peticion_http.readyState == 4) {
        var respuesta = peticion_http.responseText;
        var pedidos = eval("(" + respuesta + ")");

        for (var i = 0; i < pedidos.length; i++) {
            var opcion = document.createElement("option");
            var txt = document.createTextNode(pedidos[i].fecha);
            opcion.appendChild(txt);
            opcion.setAttribute("value", pedidos[i].codigo);
            selectPedidos.appendChild(opcion);
        }
    }
}

function cargarPedidosCliente() {
    var codigo = selectPedidos.value;
    peticion_http = new XMLHttpRequest();
    peticion_http.open("POST", "cargarPedidosClienteJSON.jsp", true);
    peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion_http.send("codigo=" + codigo);
    peticion_http.onreadystatechange = mostrarPedidosCliente;
}

function mostrarPedidosCliente() {
    if (peticion_http.status == 200 && peticion_http.readyState == 4) {
        if (nodoRespuesta.hasChildNodes()) {
            nodoRespuesta.removeChild(nodoRespuesta.firstChild);
        }
        var respuesta = peticion_http.responseText;
        var pedido = eval("(" + respuesta + ")");
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
        txt = document.createTextNode(pedido[0].nombre);
        tr = document.createElement("tr");
        td = document.createElement("td");
        td.appendChild(txt);
        tr.appendChild(td);
        txt = document.createTextNode(pedido[0].cantidad);
        td = document.createElement("td");
        td.appendChild(txt);
        tr.appendChild(td);
        txt = document.createTextNode(pedido[0].precio);
        td = document.createElement("td");
        td.appendChild(txt);
        tr.appendChild(td);
        txt = document.createTextNode(pedido[0].descuento);
        td = document.createElement("td");
        td.appendChild(txt);
        tr.appendChild(td);
        txt = document.createTextNode(pedido[0].total);
        td = document.createElement("td");
        td.appendChild(txt);
        tr.appendChild(td);
        tabla.appendChild(tr);
        nodoRespuesta.appendChild(tabla);
    }
}