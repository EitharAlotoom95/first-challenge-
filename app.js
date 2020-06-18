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
 

function addX (cell, currentClass){ //add x 
 myBtn.classList.add(currentClass)
}

                                        

$(document).ready(function(){                       
    $('td').click(function() {
    td = $(this);            
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


