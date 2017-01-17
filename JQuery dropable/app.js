var myArray = [];

$(".draggable").draggable({ cursor: "crosshair", revert: "invalid"});

$("#drop").droppable({ accept: ".draggable", 
           drop: function(event, ui) 
		   {
				console.log("drop");
			    $(this).removeClass("border").removeClass("over");
				var dropped = ui.draggable;
				var droppedOn = $(this);
				myArray.push(dropped);
				$(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);      
		   }, 
           over: function(event, elem) 
		   {
				$(this).addClass("over");
				console.log("over");
           },
		   out: function(event, elem) {
				$(this).removeClass("over");
                }
		   });
		   
// No se que hace porque se ordena igual quitando y poniendo esto		   
$("#drop").sortable();

$("#origin").droppable({ accept: ".draggable", drop: function(event, ui) {
	console.log("drop");
    $(this).removeClass("border").removeClass("over");
	var dropped = ui.draggable;
    var droppedOn = $(this);
	var index = myArray.indexOf(dropped);
	myArray.splice(index, 1);
    $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);               
	}
});