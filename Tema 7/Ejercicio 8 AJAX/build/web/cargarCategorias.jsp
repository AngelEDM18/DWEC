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
        String sentenciaSql = "select * from category";
        Statement stmt = conexion.createStatement();
        ResultSet rs = stmt.executeQuery(sentenciaSql);

        String codigo = "";
        String cate = "";

        out.print("<categorias>");
        while (rs.next()) {
            codigo = rs.getString("category_id");
            cate = rs.getString("name");
            out.print("<categoria><codigo>" + codigo + "</codigo><nombre>" + cate + "</nombre></categoria>");
        }
        out.print("</categorias>");

    } catch (ClassNotFoundException ex) {
        out.println(ex.getMessage());
    } catch (SQLException ex) {
        out.println(ex.getMessage());
    }
%>

