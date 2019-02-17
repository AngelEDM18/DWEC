<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%
    String codigo = request.getParameter("codigo");
    String nombreProducto = "";
    String idProducto = "";
    String cantidad = "";
    String precio = "";
    String descuento = "";
    Double total = 0.0;
    Connection cnn = null;
    Class.forName("com.mysql.jdbc.Driver");
    String url = "jdbc:mysql://localhost/movedb";
    cnn = DriverManager.getConnection(url, "root", "");
    String sql = "select * from detalle_pedido where idPedido='" + codigo + "';";
    PreparedStatement smt = cnn.prepareStatement(sql);
    ResultSet rs = smt.executeQuery();

    while (rs.next()) {
        idProducto = rs.getString(2);
        precio = rs.getString(3);
        cantidad = rs.getString(4);
        descuento = rs.getString(5);
    }

    sql = "select * from productos where idProducto=" + idProducto;
    smt = cnn.prepareStatement(sql);
    rs = smt.executeQuery();
    while (rs.next()) {
        nombreProducto = rs.getString(2);
    }
    Double precioD = Double.parseDouble(precio)*Double.parseDouble(cantidad);
    Double descuentoD = Double.parseDouble(descuento);

    Double totalDescuento = precioD * descuentoD;
    total = precioD - totalDescuento;
    out.print("<pedido>"
            + "<nombre>" + nombreProducto + "</nombre>"
            + "<cantidad>" + cantidad + "</cantidad>"
            + "<precio>" + precio + "</precio>"
            + "<descuento>" + descuento + "</descuento>"
            + "<total>" + total + "</total>"
            + "</pedido>");
%>