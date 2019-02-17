<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    String codigo = request.getParameter("codigo");
    Connection cnn = null;
    Class.forName("com.mysql.jdbc.Driver");
    String url = "jdbc:mysql://localhost/movedb";
    cnn = DriverManager.getConnection(url, "root", "");
    String sql = "select * from pedidos where idCliente='" + codigo + "';";
    PreparedStatement smt = cnn.prepareStatement(sql);
    ResultSet rs = smt.executeQuery();

    String cadena = "[";

    while (rs.next()) {
        if (rs.isLast()) {
            cadena += "{codigo:'" + rs.getString(1) + "',fecha:'" + rs.getDate(4) + ": " + rs.getString(9) + "'}";
        } else {
            cadena += "{codigo:'" + rs.getString(1) + "',fecha:'" + rs.getDate(4) + ": " + rs.getString(9) + "'},";
        }

    }
    cadena += "]";

    out.println(cadena);
%>