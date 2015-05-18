<html>
    <head>
        <?php

            $dni = $_POST["DNI"];
                
            $nombre = $_POST["nombre-apellidos"];
            
            $direccion = $_POST["direccion"];

            $codigoPostal= $_POST["codigo-postal"];

            $email = $_POST["email"];
                
            $telefono = $_POST["telefono"];
            
            $instrumento = $_POST["instrumento"];

            $nivel= $_POST["nivel"];
           
            $observaciones = $_POST["observaciones"];

            $promociones = $_POST["promociones"];

            $pago = $_POST["pago"];

            if($pago=="En Metálico"){
                
                $contenido = "

                    DNI: $dni
                    Nombre: $nombre
                    Direccion: $direccion
                    Código Postal: $codigoPostal
                    Email: $email
                    Teléfono: $telefono

                    Instrumento: $instrumento
                    Nivel: $nivel

                    Pago: $pago
                    
                    Observaciones:
                    $observaciones
                    
                    Promociones: $promociones
                    ";
                
            }
            else{
                
                $titularTarjeta = $_POST["titular-tarjeta"];

                $numeroTarjeta = $_POST["numero-tarjeta"];

                $cvv= $_POST["cvv"];

                $mes= $_POST["mes"];

                $ano= $_POST["año"];
                
                $contenido = "

                    DNI: $dni
                    Nombre: $nombre
                    Direccion: $direccion
                    Código Postal: $codigoPostal
                    Email: $email
                    Teléfono: $telefono

                    Instrumento: $instrumento
                    Nivel: $nivel

                    Pago: $pago
                    Nº Tarjeta: $numeroTarjeta
                    CVV: $cvv
                    Caducidad: Mes: $mes Año: $ano
                    
                    Observaciones:
                    $observaciones
                    
                    Promociones: $promociones
                    ";
                
                
            }



            $archivo= fopen("datos/matriculas.txt","a");

            fwrite($archivo,$contenido);



        ?>
    </head>
    <body>
        
        <div align="center">
            <br>
            <h2>Su matrícula se ha realizado correctamente</h2>
            <img src="images/green-tick.png" style="height:228px">
            <h3>Recuerde elegir la hora en la acadaemia de forma presencial.</h3>
            <h5>Pulse <a href=matricula.html>aqui</a> para volver a la página anterior</h5>
        </div>
    
    </body>
</html>