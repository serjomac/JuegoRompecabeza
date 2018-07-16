const item = document.getElementById( 'e1' );
const elementos = document.getElementById( 'elementos' );
const tab = document.getElementById( 't1' );
//const days = [].slice.call(document.querySelectorAll( '.day' ), 0 );
let currentlyDragging = null;


  item.addEventListener("touchstart", handleStart, false);
  item.addEventListener("touchend", handleEnd, false);
  item.addEventListener("touchcancel", handleCancel, false);
  item.addEventListener("touchmove", handleMove, false);
  item.addEventListener("touchleave", handleLeave, false);

  function handleLeave(e){

    currentlyDragging = e.target;
    console.log("Leave " + e);
  }

  function handleStart(e){

	  currentlyDragging = e.target;
	  console.log("Start " + e);
	}
	function handleEnd(e){

  currentlyDragging.parentNode.removeChild( currentlyDragging )
  t1.appendChild( currentlyDragging );
  console.log("POSICION " + item.style.left);
  //item.style.left = (parseInt(item.style.left) - 275) + 'px';
  //item.style.top = (parseInt(item.style.top) - 75) + 'px';
  console.log("POSICION " + item.style.left);

		var x = parseInt(item.style.left);
    var y = parseInt(item.style.top);

    var myElement = document.getElementById('e1');
    var position = getPosition(myElement);
    var posicionEX = position.x;
    var posicionEY = position.y;

    console.log("POSICION EX    " + posicionEX);
    console.log("POSICION EY    " + posicionEY);

    var myElement = document.getElementById('t1');
    var position = getPosition(myElement);
    var posicionTX = position.x;
    var posicionTY = position.y;

    console.log("POSICION TX     " + posicionTX);
    console.log("POSICION TY     " + posicionTY);

    if (((posicionTX -25) <= posicionEX) && ((posicionTX + 25) >= posicionEX) && ((posicionTY -25) <= posicionEY) && ((posicionTY + 25) >= posicionEY)){
      console.log("Bien hecho!");
      item.style.left = 1 + 'px';
      item.style.top = 1 + 'px';
      item.removeEventListener("touchstart", handleStart, false);
      item.removeEventListener("touchend", handleEnd, false);
      item.removeEventListener("touchcancel", handleCancel, false);
      item.removeEventListener("touchmove", handleMove, false);

    }else{
      currentlyDragging.parentNode.removeChild( currentlyDragging );
      elementos.appendChild( currentlyDragging );
      item.style.left = 1 + 'px';
      item.style.top = 1 + 'px';

    }


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
