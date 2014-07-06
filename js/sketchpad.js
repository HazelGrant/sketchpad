$(document).ready(function() {
	var container = 600;

	var setPixelDimensions = function(rows, cells) {
		$('.pixel').height(container/rows);
		$('.pixel').width(container/cells);
	};

	/*setPixelDimensions or similar method could contribute to optional challenges
	pixelSettings?*/

	var setActions = function() {
		$('.pixel').mouseenter(function() {
			$(this).addClass('color');
		});

		$('.pixel').click(function() {
			$(this).removeClass('color');
		});
	};

	var setTable = function(rows, cells) {
		$('.container').append('<table id="table"></table>');

		for(var i=0; i<rows; i++) {
			$('table').append('<tr></tr>');
		};

		for(var j=0; j<cells; j++) {
			$('tr').append('<td><div class="pixel"></div></td>');
		};

		setPixelDimensions(rows, cells);
		setActions();
	};

	var removeTable = function() {
		var table = document.getElementById("table");
		table.remove();
	};

	$('button').click(function() {
		var rows = prompt("Choose number for sketchpad height.");
		var cells = prompt("Choose number for sketchpad width.");

		removeTable();
		setTable(rows,cells);
	});

	setTable(16,16);
});