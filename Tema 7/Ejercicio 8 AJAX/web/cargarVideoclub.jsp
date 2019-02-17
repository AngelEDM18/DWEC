<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%
    String driver = "com.mysql.jdbc.Driver";
    String url = "jdbc:mysql://localhost/sakila";
    Connection conexion = null;
    try {
        Class.forName(driver);
        conexion = DriverManager.getConnection(url, "root", "");
        String sentenciaSql = "select * from Store";
        Statement stmt = conexion.createStatement();
        ResultSet rs = stmt.executeQuery(sentenciaSql);

        String codigo = "";
        String cate = "";

        out.print("<videoclubs>");
        while (rs.next()) {
            codigo = rs.getString("store_id");
            cate = rs.getString("Nombre");
            out.print("<videoclub><codigo>" + codigo + "</codigo><nombre>" + cate + "</nombre></videoclub>");
        }
        out.print("</videoclubs>");

    } catch (ClassNotFoundException ex) {
        out.println(ex.getMessage());
    } catch (SQLException ex) {
        out.println(ex.getMessage());
    }
%>

