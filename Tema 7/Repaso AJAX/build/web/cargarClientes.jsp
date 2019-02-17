<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%
    Connection cnn = null;
    Class.forName("com.mysql.jdbc.Driver");
    String url = "jdbc:mysql://localhost/movedb";
    cnn = DriverManager.getConnection(url, "root", "");
    String sql = "select * from clientes";
    PreparedStatement smt = cnn.prepareStatement(sql);
    ResultSet rs = smt.executeQuery();
    
    String cadena = "<clientes>";
    while (rs.next()) {
        cadena += "<cliente><codigo>" + rs.getString(1) + "</codigo><nombre>" + rs.getString(2) + "</nombre></cliente>";
    }
    out.print(cadena + "</clientes>");
%>