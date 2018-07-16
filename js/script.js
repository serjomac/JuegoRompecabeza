//var item = document.getElementById( 'e1' );
const mainDiv = $( 'elementos' );
const tab = $( 'tablero' );
//const days = [].slice.call(document.querySelectorAll( '.day' ), 0 );
let currentlyDragging = null;
var contadorAciertos = 0;
var contadorErrores = 0;
var id2 = 0;

var strDatos = '{"tablero":[{"cuadros": [{"id": "101","posx": "25px","posy": "25px","url": "img/imagen11.png"},{"id": "102","posx": "25px","posy": "125px","url": "img/imagen12.png"},{"id": "103","posx": "25px","posy": "225px","url": "img/imagen13.png"},{"id": "104","posx": "125px","posy": "25px","url": "img/imagen14.png"},{"id": "105","posx": "125px","posy": "125px","url": "img/imagen15.png"},{"id": "106","posx": "125px","posy": "225px","url": "img/imagen16.png"},{"id": "107","posx": "225px","posy": "25px","url": "img/imagen17.png"},{"id": "108","posx": "225px","posy": "125px","url": "img/imagen18.png"},{"id": "109","posx": "225px","posy": "225px","url": "img/imagen19.png"}]},{"cuadros": [{"id": "101","posx": "25px","posy": "25px","url": "img/imagen21.png"},{"id": "102","posx": "25px","posy": "125px","url": "img/imagen22.png"},{"id": "103","posx": "25px","posy": "225px","url": "img/imagen23.png"},{"id": "104","posx": "125px","posy": "25px","url": "img/imagen24.png"},{"id": "105","posx": "125px","posy": "125px","url": "img/imagen25.png"},{"id": "106","posx": "125px","posy": "225px","url": "img/imagen26.png"},{"id": "107","posx": "225px","posy": "25px","url": "img/imagen27.png"},{"id": "108","posx": "225px","posy": "125px","url": "img/imagen28.png"},{"id": "109","posx": "225px","posy": "225px","url": "img/imagen29.png"}]},{"cuadros": [{"id": "101","posx": "25px","posy": "25px","url": "img/imagen31.png"},{"id": "102","posx": "25px","posy": "125px","url": "img/imagen32.png"},{"id": "103","posx": "25px","posy": "225px","url": "img/imagen33.png"},{"id": "104","posx": "125px","posy": "25px","url": "img/imagen34.png"},{"id": "105","posx": "125px","posy": "125px","url": "img/imagen35.png"},{"id": "106","posx": "125px","posy": "225px","url": "img/imagen36.png"},{"id": "107","posx": "225px","posy": "25px","url": "img/imagen37.png"},{"id": "108","posx": "225px","posy": "125px","url": "img/imagen38.png"},{"id": "109","posx": "225px","posy": "225px","url": "img/imagen39.png"}]}],"imagenes":[{"elementos": [{"id": "103", "ubicado":"1","posx": "25px","posy": "25px","url": "img/imagen13.png"},{"id": "105", "ubicado":"2","posx": "135px","posy": "25px","url": "img/imagen15.png"},{"id": "109", "ubicado":"3","posx": "245px","posy": "25px","url": "img/imagen19.png"},{"id": "107", "ubicado":"4","posx": "25px","posy": "135px","url": "img/imagen17.png"},{"id": "102", "ubicado":"5","posx": "135px","posy": "135px","url": "img/imagen12.png"},{"id": "101", "ubicado":"6","posx": "245px","posy": "135px","url": "img/imagen11.png"},{"id": "108", "ubicado":"7","posx": "25px","posy": "245px","url": "img/imagen18.png"},{"id": "104", "ubicado":"8","posx": "135px","posy": "245px","url": "img/imagen14.png"},{"id": "106", "ubicado":"9","posx": "245px","posy": "245px","url": "img/imagen16.png"}]},{"elementos": [{"id": "106","ubicado":"1","posx": "25px","posy": "25px","url": "img/imagen26.png"},{"id": "105","ubicado":"2","posx": "135px","posy": "25px","url": "img/imagen25.png"},{"id": "109","ubicado":"3","posx": "245px","posy": "25px","url": "img/imagen29.png"},{"id": "101","ubicado":"4","posx": "25px","posy": "135px","url": "img/imagen21.png"},{"id": "103","ubicado":"5","posx": "135px","posy": "135px","url": "img/imagen23.png"},{"id": "108","ubicado":"6","posx": "245px","posy": "135px","url": "img/imagen28.png"},{"id": "102","ubicado":"7","posx": "25px","posy": "245px","url": "img/imagen22.png"},{"id": "107","ubicado":"8","posx": "135px","posy": "245px","url": "img/imagen27.png"},{"id": "104","ubicado":"9","posx": "245px","posy": "245px","url": "img/imagen24.png"  }]},{"elementos": [{"id": "105","ubicado":"1","posx": "25px","posy": "25px","url": "img/imagen35.png"},{"id": "107","ubicado":"2","posx": "135px","posy": "25px","url": "img/imagen37.png"},{"id": "104","ubicado":"3","posx": "245px","posy": "25px","url": "img/imagen34.png"},{"id": "102","ubicado":"4","posx": "25px","posy": "135px","url": "img/imagen32.png"},{"id": "109","ubicado":"5","posx": "135px","posy": "135px","url": "img/imagen39.png"},{"id": "101","ubicado":"6","posx": "245px","posy": "135px","url": "img/imagen31.png"},{"id": "108","ubicado":"7","posx": "25px","posy": "245px","url": "img/imagen38.png"},{"id": "103","ubicado":"8","posx": "135px","posy": "245px","url": "img/imagen33.png"},{"id": "106","ubicado":"9","posx": "248px","posy": "245px","url": "img/imagen36.png"}]}]}'
var jsonRompecabezas = JSON.parse(strDatos);

var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
//console.log(queryString)
var queries = queryString.split("&");
//console.log(queries)
for (var i = 0; i < queries.length; i++)
{
  console.log(queries[i]);
}
var varGlobal = parseInt(queries);


class Juego {
	constructor(tableros, imagenes){
		this.tableros = tableros;
		this.imagenes = imagenes;
	}
}
class Tablero {

    constructor(cuadros){
        this.cuadros = cuadros;
    }

}
class Cuadro {
    constructor(id, posx, posy, url){
        this.id = id;
        this.posx = posx;
        this.posy = posy;
        this.url = url;
    }
}

class Imagen {

    constructor(elementos){
        this.elementos = elementos;
    }

}
class Elemento {
    constructor(id, ubicado, posx, posy, url){
        this.id = id;
        this.ubicado = ubicado;
        this.posx = posx;
        this.posy = posy;
        this.url = url;
    }
}

let arregloTablero = [];
let arregloCuadros = [];
let arregloImagen = [];
let arregloElementos = [];


function abrirJuego(variab){

  //console.log("usted seleccionó" + variab)
  //window.location.assign("main.html")

};

try {
    cargarArreglo();
}
catch(err) {
    //console.log(err.message);
}

	function downloadJson(){
		var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(localStorage.getItem('objetoJuego')));
		var dlAnchorElem = document.getElementById('downloadAnchorElem');
		dlAnchorElem.setAttribute("href",     dataStr     );
		dlAnchorElem.setAttribute("download", "juego.json");
		dlAnchorElem.click();
	}

	 $("#tocame").click(function(){
      downloadJson();
    });



  function cargarArreglo() {
    
    jsonRompecabezas.tablero.forEach(function(objeto) {

        for (var i = 0; i < objeto.cuadros.length; i++) {
          let id = objeto.cuadros[i].id;
          let posx = objeto.cuadros[i].posx;
          let posy = objeto.cuadros[i].posy;
          let url = objeto.cuadros[i].url;
          var cuadro_tmp = new Cuadro(id, posx, posy, url);
          arregloCuadros.push(cuadro_tmp)
        };

        let tablero_tmp = new Tablero(arregloCuadros);
        arregloTablero.push(tablero_tmp);
        arregloCuadros = [];
        

    });
    //console.log(arregloTablero)

    jsonRompecabezas.imagenes.forEach(function(objeto) {

        for (var i = 0; i < objeto.elementos.length; i++) {
          let id = objeto.elementos[i].id;
          let ubicado = objeto.elementos[i].ubicado;
          let posx = objeto.elementos[i].posx;
          let posy = objeto.elementos[i].posy;
          let url = objeto.elementos[i].url;
          var elementos_tmp = new Elemento(id, ubicado, posx, posy, url);
          arregloElementos.push(elementos_tmp)
        };

        let imagenes_tmp = new Imagen(arregloElementos);
        arregloImagen.push(imagenes_tmp);
        arregloElementos = [];

    });
    //console.log(arregloImagen)
    let juego_tmp = new Juego(arregloTablero, arregloImagen);
    var jsonJuego = JSON.stringify(juego_tmp);
    localStorage.setItem('objetoJuego', jsonJuego);
    //console.log(jsonJuego);
    dibujar(varGlobal);
    
    
    
}




/*
for (var i = 0; i < obj.tablero.length; i++){

  for (var j = 0; j < obj.tablero[i].cuadros.length; j++){

      var cuadros = {
        id: obj.tablero[i].cuadros[j].id,
        posx: obj.tablero[i].cuadros[j].posx,
        posy: obj.tablero[i].cuadros[j].posy,
        url: obj.tablero[i].cuadros[j].url
      };

      arrayCuadros[j] = tableros;
      arrayTableros[i] = arrayCuadros;
  }
}
*/

function dibujar(variable){
  $("#audio"+variable)[0].play();
  arregloTablero[variable].cuadros.forEach( function(cuadro){
    //console.log(cuadro.id + " " + cuadro.posx + " " + cuadro.posy + " " + cuadro.url);
    id = "t"+cuadro.id;
    id2 = "t"+cuadro.ubicado;
    temp_div = $('<div/>', { 'id': id});
    temp_div2 = $('<img/>', { 'id': "e"+id});
    temp_div2.attr("src",cuadro.url);
    temp_div2.css('width', "100px");
    temp_div2.css('height',"100px");
    temp_div2.css('opacity',"0.4");
    //console.log(id);

    temp_div.css('backgroundColor', "white");
    
    temp_div2.css({"border-color": "#C1E0FF", 
             "border-width":"1px", 
             "border-style":"dashed"});
             
    //temp_div.html(espacio.color)
    temp_div.css('left', cuadro.posx);
    temp_div.css('top', cuadro.posy);
    temp_div.css('width', "100px");
    temp_div.css('height', "100px");

      temp_div.append(temp_div2);
     $('#tablero').append(temp_div);

  });
  arregloImagen[variable].elementos.forEach( function(elemento){
    //console.log(cuadro.id + " " + cuadro.posx + " " + cuadro.posy + " " + cuadro.url);

    id = ""+elemento.id;
    id2 = ""+elemento.ubicado;
    temp_div = $('<div/>', { 'id': id });
    temp_div2 = $('<img/>', { 'id': id});
    temp_div.attr("class", id2);
    temp_div2.attr("class", id2);
    temp_div.css('left', elemento.posx);
    temp_div.css('top', elemento.posy);
    temp_div.css('width', elemento.width+ "px");
    temp_div.css('height', elemento.height+ "px");
    temp_div2.attr("src",elemento.url);
    temp_div2.css('width', "100px");
    temp_div2.css('height',"100px");
    //temp_div2.css('opacity',"0.4");
    //temp_div.css( "zIndex", 1000 );
      temp_div.append(temp_div2);
     $('#elementos').append(temp_div);
      $(temp_div2).on('touchstart',handleStart);
      $(temp_div2).on('touchend',handleEnd);
      $(temp_div2).on('touchmove',handleMove);
  });
};


  function handleStart(e){
//      console.log("Hola mundo")
    currentlyDragging = e.target;
    item  = $(""+e.target.id);



  }
  function handleEnd(e){
    currentlyDragging = e.target;
    //console.log("Currentry "+currentlyDragging.id)
    item  = $("#"+e.target.id);
    tabl  = $("#t"+e.target.id);

    //console.log("item tiene  " + item);
    //console.log("Movio a " + item.css("background-color"));
    //console.log("Movio a " + tabl.css("background-color"));


    var movimiento = (parseInt($("#elementos").width()) - parseInt(item.css("left")) + 30)*-1;
    //console.log("mov: "  + item.css("left"))
    //console.log("mov: "  + item.css("top"))
    //console.log(movimiento);
    posxElemento = movimiento;
    posyElemento = parseInt(item.css("top"));
    posxRecuadro = parseInt(tabl.css("left"));
    posyRecuadro = parseInt(tabl.css("top"));

    posfinal = posxRecuadro + parseInt($("#elementos").width()) + 30;


    if (((posxRecuadro -10) <= posxElemento) && ((posxRecuadro + 10) >= posxElemento) && ((posyRecuadro -10) <= posyElemento) && ((posyRecuadro + 10) >= posyElemento)){
      console.log("Bien hecho!");
      item.css("left",  posfinal + 'px') ;
      item.css("top",  posyRecuadro + 'px') ;
      item.children().off("touchstart", handleStart, false);
      item.children().off("touchend", handleEnd, false);
      item.children().off("touchcancel", handleCancel, false);
      item.children().off("touchmove", handleMove, false);
      contadorAciertos++;
      if (contadorAciertos == 9){
        try {
            contadorVictorias = localStorage.getItem('victorias');
            contadorVictorias++;
            localStorage.setItem('victorias', contadorVictorias);
            console.log("EN EL TRY " + contadorVictorias);
            $('#miVariable').text(contadorVictorias);
        }
        catch(err) {
            console.log(err.message);
            var contadorVictorias = 0;
            localStorage.setItem('victorias', contadorVictorias);
            console.log("EN EL CATCH " + contadorVictorias);
            
        }
        
        
        //console.log(localStorage.getItem('victorias'));
        $('#myModal1').modal('show', contadorVictorias);
        //window.location.href = "index.html";

      }

    }else{
      console.log("mal hecho!");
      //currentlyDragging.parentNode.removeChild( currentlyDragging );
      //elementos.appendChild( currentlyDragging );
      //item.style.left = 1 + 'px';
      //item.style.top = 1 + 'px';
      //console.log(e.target.id);
      //console.log(e.target.className);
      item.css("left", arregloImagen[varGlobal].elementos[e.target.className-1].posx);
      item.css("top", arregloImagen[varGlobal].elementos[e.target.className-1].posy) ;
      contadorErrores++;
      if (contadorErrores == 15){
        localStorage.setItem('juegoActual', varGlobal);
        //alert("PERDISTE");
       $('#myModal').modal('show');
        //window.location.href = "index.html";
      }
    }




      //console.log("End " +e);
    }
    function handleCancel(e){
      //console.log("Cancel " +e);
    }
    function handleMove(e){
        //console.log(e.target.id);

        var touchLocation = e.targetTouches[0];
        //console.log("touche es: " + touchLocation)
        //console.log(touchLocation.clientX)
        $("#"+ e.target.id).css("left", touchLocation.clientX + 'px');
        //console.log(item.css("left", touchLocation.clientX + 'px'))
        $("#"+ e.target.id).css("top", touchLocation.clientY + 'px');

    }
