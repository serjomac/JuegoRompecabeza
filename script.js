//var item = document.getElementById( 'e1' );
const mainDiv = document.getElementById( 'elementos' );
const tab = document.getElementById( 'tablero' );
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
  temp_div = document.createElement("div");

  temp_div.style.backgroundColor = "white";
   temp_div.style.borderColor = ""+espacio.color;
  temp_div.innerHTML =""+espacio.color;
  /*temp_div.style.width = elemento.width+ "px";
  temp_div.style.height = elemento.height+ "px";*/
  temp_div.style.left = espacio.x+ "px";
  temp_div.style.top = espacio.y+ "px";
  temp_div.setAttribute("id", "t"+espacio.id);
  console.log(espacio);
  tab.appendChild(temp_div);

});

elementos.forEach( function(elemento){
  temp_div = document.createElement("div");
  temp_div.style.backgroundColor = ""+elemento.color;
  /*temp_div.style.width = elemento.width+ "px";
  temp_div.style.height = elemento.height+ "px";*/
  temp_div.style.left = elemento.x+ "px";
  temp_div.style.top = elemento.y+ "px";
  temp_div.setAttribute("id", ""+elemento.id);
  console.log(elemento);
  mainDiv.appendChild(temp_div);
  temp_div.addEventListener("touchstart", handleStart, false);
  temp_div.addEventListener("touchend", handleEnd, false);
  temp_div.addEventListener("touchmove", handleMove, false);

});


/*
  item.addEventListener("touchstart", handleStart, false);
  item.addEventListener("touchend", handleEnd, false);
  //item.addEventListener("touchcancel", handleCancel, false);
  item.addEventListener("touchmove", handleMove, false);
*/
  function handleStart(e){
    currentlyDragging = e.target;
    item  = document.getElementById(""+e.target.id);

    console.log("Start " + e.target.id + " " + e);

  }
  function handleEnd(e){
    currentlyDragging = e.target;
    item  = document.getElementById(""+e.target.id);
    tabl  = document.getElementById("t"+e.target.id);
    console.log("Movió a " + item.style.backgroundColor);
    console.log("Movió a " + tabl.style.borderColor);
    //currentlyDragging.parentNode.removeChild( currentlyDragging )
    //t1.appendChild( currentlyDragging );
    //console.log("tamaño del cuadro " + mainDiv.offsetWidth);
    
    var movimiento = (parseInt(mainDiv.offsetWidth) - parseInt(item.style.left) + 30)*-1;
    //console.log(movimiento);
    posxElemento = movimiento;
    posyElemento = parseInt(item.style.top);
    posxRecuadro = parseInt(tabl.style.left);
    posyRecuadro = parseInt(tabl.style.top);

    posfinal = posxRecuadro + parseInt(mainDiv.offsetWidth) + 30;


    if (((posxRecuadro -10) <= posxElemento) && ((posxRecuadro + 10) >= posxElemento) && ((posyRecuadro -10) <= posyElemento) && ((posyRecuadro + 10) >= posyElemento)){
      console.log("Bien hecho!");
      item.style.left = posfinal + 'px';
      item.style.top = posyRecuadro + 'px';
      item.removeEventListener("touchstart", handleStart, false);
      item.removeEventListener("touchend", handleEnd, false);
      item.removeEventListener("touchcancel", handleCancel, false);
      item.removeEventListener("touchmove", handleMove, false);
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
      item.style.left = elementos[e.target.id-1].x + 'px';
      item.style.top = elementos[e.target.id-1].y + 'px';
      contadorErrores++;
      if (contadorErrores == 15){
        alert("PERDISTE");
      }
    }



    //var x = parseInt(item.style.left);
    //var y = parseInt(item.style.top);

      //currentlyDragging.parentNode.removeChild(currentlyDragging );
      //elementos.appendChild( currentlyDragging );
      



      console.log("End " +e);
    }
    function handleCancel(e){
      console.log("Cancel " +e);
    }
    function handleMove(e){


        var touchLocation = e.targetTouches[0];
        item.style.left = touchLocation.clientX + 'px';
        item.style.top = touchLocation.clientY + 'px';



        //console.log(touchLocation);

      //console.log("Move " +e.target);
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
