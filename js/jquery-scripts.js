var matriculaLoad = function(){
    
    $(document).ready(function(){

        var textoM = $("#textoMetálico");
        textoM.hide();

        var datosTatjeta = $("#datosTarjeta");
        datosTatjeta.hide();

        $("#metalicoB").click(function(){
            textoM.show("slow");
            datosTatjeta.hide();
        });

        $("#tarjetaB").click(function(){
            textoM.hide();
            datosTatjeta.show("slow");
        });

    });
     
}

var indexLoad = function(){
    
    $(".articulo").hide();
    
    $(document).ready(function(){

        $("#b1").click(function(){
            $(".articulo").fadeOut("3000");
            
            $("#a1").fadeIn("3000");
            
        });

        $("#b2").click(function(){
            $(".articulo").fadeOut("3000");
            
            $("#a2").fadeIn("3000");
            
        });

    });
}
