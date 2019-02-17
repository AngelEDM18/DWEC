
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%

    String dato1 = request.getParameter("fecha_nacimiento");
    String dato2 = request.getParameter("codigo_postal");
    String dato3 = request.getParameter("telefono");

    out.print("{telefono: '" + dato3 + "', codigo_postal: '" + dato2 + "', fecha_nacimiento: '" + dato1 + "' }");
%>




