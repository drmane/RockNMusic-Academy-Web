<html>
    <head>
        <?php

            $nombre = $_POST["nombre-apellidos"];
                
            $email = $_POST["email"];
            
            $mensaje = $_POST["mensaje"];

            $numero= $_POST["number"];

            $contenido = "
            
            Nombre: $nombre
            Email: $email
            Mensaje: $mensaje
            Número: $numero 
            ";

            $archivo= fopen("datos/contacto.txt","a");
            fwrite($archivo,$contenido);

        ?>
    </head>
    <body>
        
        <div align="center">
            <br>
            <h2>Su mensaje ha sido enviado correctamente</h2>
            <img src="images/green-tick.png" style="height:228px">
            <h5>Pulse <a href=contacto.html>aqui</a> para volver a la página anterior</h5>
        </div>
    
    </body>
</html>