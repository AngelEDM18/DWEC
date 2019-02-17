<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%
    String videoclub = request.getParameter("videoclub");
    String categoria = request.getParameter("categoria");
    String driver = "com.mysql.jdbc.Driver";
    String url = "jdbc:mysql://localhost/sakila";
    Connection conexion = null;
    try {
        Class.forName(driver);
        conexion = DriverManager.getConnection(url, "root", "");
        String sentenciaSql = "select distinct f.title from sakila.film f, sakila.film_category fc, sakila.inventory i "
                + "where f.film_id=fc.film_id and fc.category_id=" + categoria + " "
                + "and f.film_id=i.film_id and i.store_id=" + videoclub;
        Statement stmt = conexion.createStatement();
        ResultSet rs = stmt.executeQuery(sentenciaSql);

        String titulo = "";

        out.print("<peliculas>");
        while (rs.next()) {
            titulo = rs.getString("title");
            out.print("<pelicula><titulo>" + titulo + "</titulo></pelicula>");
        }
        out.print("</peliculas>");

    } catch (ClassNotFoundException ex) {
        out.println(ex.getMessage());
    } catch (SQLException ex) {
        out.println(ex.getMessage());
    }
%>

