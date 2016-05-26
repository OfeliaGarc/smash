var numeroAlAzar;
// var puntuacion = 0;
var puntos = 0;
var intentos = 0;


var imagenes = [
 "Ana.JPG", "Analy.JPG", 
 "Areli.JPG", "Beatriz.JPG", 
 "Cecilia.JPG", "Claudia.JPG", 
 "Daniela.JPG", "Elisa.JPG", 
 "Evelyn.JPG", "Gabriela.JPG", 
 "Grissel.JPG", "Guadalupe.JPG", 
 "Johana.JPG", "Joyce.JPG", 
 "Ofelia.JPG", "Patricia.JPG", 
 "Sharon.JPG", "Heredia.JPG", 
 "Karen.JPG", "Monica.JPG",  
 "Karla.JPG", "Leslie.JPG", 
 "Mishel.JPG", "Milca.JPG", 
 "Tayde.JPG", "Naibit.JPG", 
 "Nayeli.JPG", "Nelly.JPG", 
 "Reyna.JPG", "Adriana.JPG", 
 "Ruth-Lopez.JPG","Ruth-Vega.JPG",
 "Sandra-Bollo.JPG","Sandra-Diaz.JPG", 
 "Vianey.JPG", "Zazil.JPG"];

 var nombres = [ 
 "Anita", "Analy", 
 "Areli", "Bet",
 "Cecy", "Claudia", 
 "Daniela", "Elisa", 
 "Eve", "Gaby", 
 "Griss", "Lupita", 
 "Joy", "Joyce", 
 "Ofe", "Paty", 
 "Sharon", "Heredia", 
 "Karen", "Moni", 
 "Karla", "Leslie",
 "Mishel", "Milca", 
 "Tayde", "Naibit", 
 "Nayeli", "Nelly", 
 "Reyna", "Adri", 
 "DjRuth", "Ruth", 
 "Sandia", "San", 
 "Vian", "Zaz"];

function desplegarPuntos() {
  $('#spanPuntos').text(puntos);
};


function enteroRandomEnRango(min,max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;

};

function desplegarNuevaJugada() {
  var tamanoArreglo = nombres.length;
  numeroAlAzar = enteroRandomEnRango(0, tamanoArreglo);

    if (tamanoArreglo > 0) {
      	numeroAlAzar = enteroRandomEnRango(0, tamanoArreglo);
      	imagen = 'fotos/' + imagenes[numeroAlAzar];
      	$('#imagenPersona').attr('src', imagen);
    } else {
      	alert('Ganaste!!! el puntaje total es de : ' + puntuacion);
    }
};

$(document).ready(function() {

  $('#btnClick').click(function() {
    var nombre =$('#inputNombre').val();
    console.log('El usuario escribio:' + nombre);

    var nombreAdivinar = nombres[numeroAlAzar];
    // var puntPositiva = parseInt(5);  
    //el input queda vacío con el click de confirmación del nombre
      if (nombre === nombreAdivinar) {
      	alert('El nombre es correcto :  ' + nombreAdivinar);
        puntos = puntos + 5;

        //Quitamos el el elemento que ya no queremos
        nombres.splice(numeroAlAzar, 1);
        imagenes.splice(numeroAlAzar, 1);
        nombre =$('#inputNombre').val("");
         desplegarNuevaJugada();
      } else {
        alert('Error 500!');
        puntos = puntos -1;         //puntos--;
        intentos =  intentos +1;    //intentos++;
        nombre =$('#inputNombre').val("");
          if (intentos >= 5) {
            alert('5 intentos fallidos \n Recuerda el nombre e intentalo de nuevo mas tarde');
            desplegarNuevaJugada();
          }
          
      }

      desplegarPuntos();

  });
// cuando inicia la pagina despliega una nueva jugada
    desplegarNuevaJugada();

});