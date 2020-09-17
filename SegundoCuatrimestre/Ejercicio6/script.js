
function btnGuardar(){

    var inputEdad = document.getElementById("edad");
    var inputNombre = document.getElementById("nombre");
    var abrir = document.getElementById("abrir");
    var contenedor = document.getElementById("contenedor");


    //alert(inputNombre.className);
    if(inputNombre.value == ""){

        inputNombre.className = "error";

    }else{

        inputNombre.className = "sinError";
    }
    if(inputEdad.value == ""){

        inputEdad.className = "error";

    }else{

        if(inputEdad.value < 18){

            inputEdad.className = "menor";

        }else{

            inputEdad.className = "sinError";

        }

        
    }

}

