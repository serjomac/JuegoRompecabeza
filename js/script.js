//var item = document.getElementById( 'e1' );
const mainDiv = $( 'elementos' );
const tab = $( 'tablero' );
//const days = [].slice.call(document.querySelectorAll( '.day' ), 0 );
let currentlyDragging = null;
var contadorAciertos = 0;
var contadorErrores = 0;
var elementos = [
{id: 1, x: 5, y:5, color: "red"},
{id: 2,x: 5,y:105,color: "green"},
{id: 3,x: 5,y:205,color: "blue"},
{id: 4,x: 105,y:5,color: "white"},
{id: 5,x: 105,y:105,color: "black"},
{id: 6,x: 105,y:205,color: "yellow"},
{id: 7,x: 205,y:5,color: "orange"},
{id: 8,x: 205,y:105,color: "skyblue"},
{id: 9,x: 205,y:205,color: "magenta"}
];

var espacios = [
{id: 9, x: 5, y:5, color: "magenta"},
{id: 8,x: 5,y:105,color: "skyblue"},
{id: 7,x: 5,y:205,color: "orange"},
{id: 6,x: 105,y:5,color: "yellow"},
{id: 5,x: 105,y:105,color: "black"},
{id: 4,x: 105,y:205,color: "white"},
{id: 3,x: 205,y:5,color: "blue"},
{id: 2,x: 205,y:105,color: "green"},
{id: 1,x: 205,y:205,color: "red"}
];

espacios.forEach( function(espacio){
  id = "t"+espacio.id;
  temp_div = $('<div/>', { 'id': id });
 
    
  temp_div.css('backgroundColor', "white");
  //temp_div.html(espacio.color)
  temp_div.css('borderColor', espacio.color );
  temp_div.css('left', espacio.x+ "px");
  temp_div.css('top', espacio.y+ "px");
  temp_div.css('width', espacio.width+ "px");
  temp_div.css('height', espacio.height+ "px");
  
    

   $('#tablero').append(temp_div);

});

elementos.forEach( function(elemento){
  temp_div = $('<div/>', { 'id': elemento.id });
  
  temp_div.css('backgroundColor', elemento.color);
  temp_div.css('left', elemento.x+ "px");
  temp_div.css('top', elemento.y+ "px");
  temp_div.css('width', elemento.width+ "px");
  temp_div.css('height', elemento.height+ "px");
  
  $('#elementos').append(temp_div);

    $(temp_div).on('touchstart',handleStart);
    $(temp_div).on('touchend',handleEnd);
    $(temp_div).on('touchmove',handleMove);
    


});



  function handleStart(e){
//      console.log("Hola mundo")
    currentlyDragging = e.target;
    item  = $(""+e.target.id);
      


  }
  function handleEnd(e){
    currentlyDragging = e.target;
      console.log("Currentry "+currentlyDragging.id)
    item  = $("#"+e.target.id);
    tabl  = $("#t"+e.target.id);
    console.log("item tiene  " + item);
    console.log("Movio a " + item.css("background-color"));
    console.log("Movio a " + tabl.css("border-color"));
    
    
    var movimiento = (parseInt($("#elementos").width()) - parseInt(item.css("left")) + 30)*-1;
    console.log("mov: "  + item.css("left"))
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
      item.off("touchstart", handleStart, false);
      item.off("touchend", handleEnd, false);
      item.off("touchcancel", handleCancel, false);
      item.off("touchmove", handleMove, false);
      contadorAciertos++;
      if (contadorAciertos == 9){
        alert("GANASTE");
      }

    }else{
      console.log("mal hecho!");
      //currentlyDragging.parentNode.removeChild( currentlyDragging );
      //elementos.appendChild( currentlyDragging );
      //item.style.left = 1 + 'px';
      //item.style.top = 1 + 'px';
      item.css("left", elementos[e.target.id-1].x + 'px');
      item.css("top", elementos[e.target.id-1].y + 'px') ;
      contadorErrores++;
      if (contadorErrores == 15){
        alert("PERDISTE");
      }
    }




      console.log("End " +e);
    }
    function handleCancel(e){
      console.log("Cancel " +e);
    }
    function handleMove(e){
        
        
        var touchLocation = e.targetTouches[0];
        //console.log("touche es: " + touchLocation)
        console.log(touchLocation.clientX)
        $("#"+ e.target.id).css("left", touchLocation.clientX + 'px');
        //console.log(item.css("left", touchLocation.clientX + 'px'))
        $("#"+ e.target.id).css("top", touchLocation.clientY + 'px');
        
    }


  // Helper function to get an element's exact position
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;
  while (el) {
    if (el.tagName == "BODY") {
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {

      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

/*
item.addEventListener('touchmove', function (ev) {
    var touchLocation = ev.targetTouches[0];

        item.style.left = (touchLocation.pageX -25) + 'px';
        item.style.top = (touchLocation.pageY -10) + 'px';
    })

    item.addEventListener('touchend', function (ev) {

        var x = parseInt(item.style.left);
        var y = parseInt(item.style.top);

        if (x < 0 || x > 300) {
            item.style.left = '0px';
            item.style.top = '0px';
        }
        if (y < 100 || y > 300) {
            item.style.left = '0px';
            item.style.top = '0px';
        }

        console.log("fuuuuuullll...");
    })
*/

/*
let currentlyDragging = null;

//item.setAttribute( 'draggable', true );

item.ondragstart = function( ev ) {
    console.log(ev);
  ev.dataTransfer.effectAllowed = 'move';
  ev.dataTransfer.setData( 'text/html', this.innerHTML )
  currentlyDragging = ev.target;
}




days.forEach( day => {

  day.ondragenter = day.ondragover = function( ev ) {
    ev.preventDefault();
    day.classList.add( 'hovering' );
  };

  day.ondragleave = function() {
    day.classList.remove( 'hovering' );
  };

  day.ondrop = function( ev ) {

    //currentlyDragging.parentNode.removeChild( currentlyDragging );
    day.appendChild( currentlyDragging );
    day.classList.remove( 'hovering' );
    currentlyDragging = null;

  };

});*/
