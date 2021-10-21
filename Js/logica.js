 
function cifrado(){
    var radios = document.getElementsByName('radios');
    //verificamos que radio button esta seleccionado
    if(radios[0].checked){
      
      cifrar();
      
    }
    else if(radios[1].checked){
      
      descifrar();
      
    }
}
function validarAscii(caracter, tamAlfa,alfabeto){
    for (var i = 0; i <tamAlfa; i++) {
        if(caracter==alfabeto[i]){
            
            return true; //comprobamos que sea una letra lo que se ingresa
        
        }
    }
    return false;

}

function cifrar(){
    var tamAlfabe =27;
    var texto=(document.getElementById('texto').value).toLowerCase();
    var tamTexto = texto.length;
    var clave =(document.getElementById('clave').value).toLowerCase();
    var contClave=0;
    
    //creamos el array del abecedario
    var alfaIng = new Array();
    var contEs =0;
    for(var i=0; i<tamAlfabe; i++){
        if(i==14){
          
          alfaIng[i]= String.fromCharCode(241);
        
        }
        else{
          
          alfaIng[i]=String.fromCharCode(97+contEs);
          contEs++;

        }
        
    }

    var valorClave =new Array();
    var tamClave = clave.length;
    var contaClave=0;
    //verificamos el tamaño de la clave
    for(var i=0;i<tamClave; i++){
        for (var j=0; j <tamAlfabe; j++) {
            if(clave[i]==alfaIng[j]) {
                
                valorClave[contaClave]=j;
                contaClave++;

            }   
        }

    }
    //Asignando el valor ascii al texto
    var valorTexto =new Array();
    for (var i = 0; i < tamTexto; i++) {
        for (var j = 0; j < tamAlfabe; j++) {
            if(texto[i]==" "){
                
                valorTexto[i]=" ";

            }
            else if(texto[i]==alfaIng[j]){
                
                valorTexto[i]=j;

            }
          
        }

    }

    //cifrado
    var textoCifrado= new Array();
    for(var i=0;i<tamTexto;i++){
        //espacio
        if(validarAscii(texto[i], tamAlfabe,alfaIng)){

            textoCifrado[i]=alfaIng[(valorTexto[i]+valorClave[contClave])%tamAlfabe];
            contClave++; 

        }
        else{

            textoCifrado[i]=texto[i];

        }

        if(contClave==(valorClave.length)){

            contClave=0;

        }
    }
    //mostramos el resultado en  el h4
    div = document.getElementById("resultado");
    var cadena = "";
    for(var i = 0; i < tamTexto; i++){
        
        cadena += textoCifrado[i];

    }
    div.textContent = cadena;

}

function descifrar(){
    //variables
    var tamAlfabe =27;
    var texto=(document.getElementById('texto').value).toLowerCase();
    var tamTexto = texto.length;
    var clave =(document.getElementById('clave').value).toLowerCase();
    var contClave=0;
    
    //creamos el array del abecedario
    var alfaIng = new Array();
    var contEs =0;
    for(var i=0; i<tamAlfabe; i++){
        if(i==14){

            alfaIng[i]= String.fromCharCode(241);

        }
        else{

            alfaIng[i]=String.fromCharCode(97+contEs);
            contEs++;

        }
    }

    // asignamos el valor ascii a la clave
    var valorClave =new Array();
    var tamClave = clave.length;
    var contaClave=0;
    for(var i=0;i<tamClave; i++){
        for (var j=0; j <tamAlfabe; j++) {
            if(clave[i]==alfaIng[j]) {

                valorClave[contaClave]=j;
                contaClave++;
            }   
        }
        

    }
    //Asignando el valor ascii al texto
    var valorTexto =new Array();
    for (var i = 0; i < tamTexto; i++) {
        for (var j = 0; j < tamAlfabe; j++) {
            if(texto[i]==" "){
                
                valorTexto[i]=" ";

            }
            else if(texto[i]==alfaIng[j]){
                
                valorTexto[i]=j;
            }
          
        }

    }

    //descifrando
    var textoCifrado= new Array();
    for(var i=0;i<tamTexto;i++){
        //espacio
        if(validarAscii(texto[i], tamAlfabe,alfaIng) && (valorTexto[i]-valorClave[contClave])>=0){
            
            textoCifrado[i]=alfaIng[(valorTexto[i]-valorClave[contClave])%tamAlfabe];
            contClave++;

        }
        else if (validarAscii(texto[i], tamAlfabe,alfaIng) && (valorTexto[i]-valorClave[contClave])<0) {
            
            textoCifrado[i]=alfaIng[(valorTexto[i]-valorClave[contClave]+tamAlfabe)%tamAlfabe];
            contClave++;

        }
        else{
            
            textoCifrado[i]=texto[i];

        }
        if(contClave==valorClave.length){
            
            contClave=0;

        }
    }
    
    //mostramos el resultado en el h4
    div = document.getElementById("resultado");
    var cadena = "";
    for(var i = 0; i < tamTexto; i++){
        cadena += textoCifrado[i];
    }
    div.textContent = cadena;

}

//funcion para que validar lo que el usuario ingresa como mensaje
function validarn(e){
  
  var teclado = (document.all)?e.keyCode:e.which;
  if (teclado == 8) return true;
  var patron = /([a-zA-Z\u00f1\u00d1\s])/;
  var tec = String.fromCharCode(teclado);
  return patron.test(tec); 
}