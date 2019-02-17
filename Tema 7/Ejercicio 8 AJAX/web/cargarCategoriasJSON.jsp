<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    String driver = "com.mysql.jdbc.Driver";
    String url = "jdbc:mysql://localhost/sakila";
    Connection conexion = null;
    try {
        Class.forName(driver);
        conexion = DriverManager.getConnection(url, "root", "");
        String sentenciaSql = "select * from category";
        Statement stmt = conexion.createStatement();
        ResultSet rs = stmt.executeQuery(sentenciaSql);

        String codigo = "";
        String cate = "";
        String cadena = "[";
        while (rs.next()) {
            codigo = rs.getString("category_id");
            cate = rs.getString("name");
            if (rs.isLast()) {
                cadena += "{codigo:'" + codigo + "',nombre:'" + cate + "'}";
            } else {
                cadena += "{codigo:'" + codigo + "',nombre:'" + cate + "'},";
            }
        }
        cadena += "]";

        out.println(cadena);
    } catch (ClassNotFoundException ex) {
        out.println(ex.getMessage());
    } catch (SQLException ex) {
        out.println(ex.getMessage());
    }
%>