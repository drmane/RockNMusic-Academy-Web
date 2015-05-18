function validateNIF(){
    
   var nif = document.getElementById("DNI");
    
   var nifValue = String(nif.value);
    
   if(nifValue.length != 9){
       
       alert("ERROR!! El NIF debe tener exactamente 9 caracteres (8 números más una letra)");
       
       nif.focus();
       
       //validation = false;
   }
   else{
        
       var position = 0;
       var error = false;
       
       while((!error)&&(position <= 8)){
           
           var c = nifValue.charAt(position);
           
           //console.log("Digit: " + c);
           
           if(position != 8){
               
               if(isNaN(parseInt(c))){
                  
                  alert("ERROR!! Los 8 primeros caracteres del NIF deben ser números");
               
                  error = true;
                  
                  nif.focus();
                  //validation = false;
               }
           }
           else{
               
               var letter = /^[a-zA-Z]+$/; 
               
               if(!c.match(letter)){
                   alert("ERROR!! El carácter nº 9 del NIF debe ser una letra");
                   
                   error = true;
                   
                   nif.focus();
               }
           }
           
           position++;
           
       }
   }
    
}

function validateName(){
    
    var name = document.getElementById("nombre-apellidos");
    
    var nameValue = name.value;
    
    var error = false;
    
    var position = 0
    
    //Validate name
    
    while((!error)&&(position < nameValue.length)){
        
        var c = nameValue.charAt(position);
        
        //console.log("Char: " + c);
        
        var letter = /^[a-zA-Z]+$/; 
         
        
        if(c != " "){
            if(!c.match(letter)){

                error = true;

                alert("ERROR!! El nombre y los apellidos no debe contener números");
                
                name.focus();
                
                correct = false;
            }
        }
        
        position++;
        
    }   
}

function validateCardName(){
    
    var name = document.getElementById("titular-tarjeta");
    
    var nameValue = name.value;
    
    var error = false;
    
    var position = 0
    
    //Validate name
    
    while((!error)&&(position < nameValue.length)){
        
        var c = nameValue.charAt(position);
        
        //console.log("Char: " + c);
        
        var letter = /^[a-zA-Z]+$/; 
         
        
        if(c != " "){
            if(!c.match(letter)){

                error = true;

                alert("ERROR!! El nombre y los apellidos del titular de la cuenta no debe contener números");
                
                name.focus();
                
                correct = false;
            }
        }
        
        position++;
        
    }   
}


function validateZipCode(){
    
    var zipCode = document.getElementById("codigo-postal");
    
    var zipCodeValue = zipCode.value;
    
    var error = false;
    
    var position = 0;
    
    if(zipCodeValue.length != 5){
     
            error = true;

            alert("ERROR!! El código postal debe tener exactamente 5 números");

            zipCode.focus();
    }
    
    while((!error)&&(position < zipCodeValue.length)){

        var c = zipCodeValue.charAt(position);
        
                       
       if(isNaN(parseInt(c))){

          alert("ERROR!! El código postal debe tener exactamente 5 números ");

          error = true;
           
          zipCode.focus();

          //validation = false;
       }
        
       position++;
        
    } 
}


function validatePhone(){
    
    var phone = document.getElementById("telefono")
    
    var phone_value = phone.value;
    
    var error = false;
    
    var position = 0;
    
    while((!error)&&(position < phone_value.length)){

        var c = phone_value.charAt(position);
        
                       
       if(isNaN(parseInt(c))){

          alert("ERROR!! El teléfono solo puede tener números ");

          error = true;

          phone.focus();
          //validation = false;
       }
        
        position++;
        
    } 
}

function validateEmail(){
    
    var email = document.getElementById("email");
    
    var emailValue = email.value;
    
    var error = false;
    
    var position = 0
    
    var aFind = false; //indicates an @ has been found
    
    var dominion = false; //Indicates if there es a letter (dominion) after @
    
    var dotDominion = false; //indicates an . has been found after dominion
    
    //Validate email
    
    //console.log("Email: " + email);
    
    while((!error)&&(position < emailValue.length)){
        
        var c = emailValue.charAt(position);
        
        //console.log("Char: " + c);
        
        if(!aFind){
            
            if(c == "@"){
                aFind = true;
            }
            
        }
        else if (!dominion){
            
            var letter = /^[a-zA-Z]+$/; 
            
            if(c.match){
                dominion = true;
            }
        }
        else if (!dotDominion){
            
            if(c == "."){
                dotDominion = true;
            }
        }
        position++;
        
    }  
    
    //console.log("AFind " + aFind);
    
    //Check errors
    if(!aFind){
        alert("ERROR!! Falta la @ en el email");
        email.focus();
    }
    else if(!dominion){
        alert("ERROR!! Falta especificar el dominio después del @");
        email.focus();
    }
    else if(!dotDominion){
        alert("ERROR!! Falta el . después en el dominio del email");
        email.focus();
    }
}

function validateCVV(){
    
    var cvv = document.getElementById("cvv");
    
    var cvv_value = cvv.value;
    
    var error = false;
    
    var position = 0;
    
    while((!error)&&(position < cvv_value.length)){

        var c = cvv_value.charAt(position);
        
                       
       if(isNaN(parseInt(c))){

          alert("ERROR!! El CVV solo puede tener números ");

          error = true;
           
           cvv.focus();

          //validation = false;
       }
        
        position++;
        
    } 
}

function validateCardNumber(){
    
    var cardNumber = document.getElementById("numero-tarjeta");
    
    var cardNumber_value = cardNumber.value;
    
    var error = false;
    
    var position = 0;
    
    var count = 1;
    
    while((!error)&&(position < cardNumber_value.length)){

        var c = cardNumber_value.charAt(position);
        
       if((count != 0)&&(count % 5 == 0)&&(c != "-")){
           
          alert("ERROR!! El formato de la tarjeta de crédito es el siguiente: 1111-1111-1111-1111");

          error = true;
           
          cardNumber.focus();
       }
        
       if((count % 5 != 0)&&isNaN(parseInt(c))){

          alert("ERROR!! El formato de la tarjeta de crédito es el siguiente: 1111-1111-1111-1111 ");

          error = true;
           
          cardNumber.focus();

          //validation = false;
       }
        
        count++;
        
        position++;
        
    } 
}

function validateNumber(){
    if(isNaN(document.getElementById("number").value)){
        alert("ERROR!! Esta respuesta debe ser un número"); 
        
        document.getElementById("number").focus();
    }
}

function finalValidation(){
    
    var status = true;
    
    if(document.getElementById("tarjetaB").value){
        var titularTarjeta = document.getElementById("titular-tarjeta").value;
        
        var numeroTarjeta = document.getElementById("numero-tarjeta").value;
        
        var cvv = document.getElementById("cvv").value;
        
        if(titularTarjeta=="" || numeroTarjeta=="" || cvv==""){
            
            status = false;
            
            alert("ERROR!! Al seleccionar pago con tarjeta, debes rellenaro los datos correspondientes");   
        }
        
    }
    
    return status;
}
