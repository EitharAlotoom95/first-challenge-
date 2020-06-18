/*document.addEventListener('click', function (event) {
	// Do something...
	if (event.target.matches('#play-again')) {
		resetBoard();
	}

	// If a .game-square was clicked
	if (event.target.matches('.tic game') && !event.target.hasAttribute('disabled')) {
		renderTurn(event.target);
	}

}, false);*/


/*document.addEventListener("click",function (event) {
  document.getElementById("tic game").innerHTML = "x"
});*/

//appeare the x 

function addX (){
 myBtn
}


$(document).ready(function(){
  $(".myBtn").click(function(){
    $("x").show();
  });
});

//toggle 

var playerData = [
  {
    src: "cross",
    className: "kruis"},
  {
    src: "circle",
    className: "rondje"}
];


function player() {
   // "use strict";
    currentPlayer = (currentPlayer == 2) ? currentPlayer = 1 : currentPlayer = 2;

    document.getElementById("player").innerHTML = currentPlayer;
    window.alert("Speler "+currentPlayer+" is aan de beurt");
}