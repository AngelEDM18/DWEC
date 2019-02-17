
<%@page contentType="text/xml" pageEncoding="UTF-8"%>

<%

    String dato1 = request.getParameter("fecha_nacimiento");
    String dato2 = request.getParameter("codigo_postal");
    String dato3 = request.getParameter("telefono");
    out.println("<respuesta>"
            + "<mensaje></mensaje>"
            + "<parametros>"
            + "<telefono>" + dato3 + "</telefono>"
            + " <codigo_postal>" + dato2 + "</codigo_postal>"
            + " <fecha_nacimiento>" + dato1 + "</fecha_nacimiento>"
            + " </parametros> "
            + "</respuesta> "
    );
%>




