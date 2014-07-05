$(document).ready(function() {
	var container = 600;

	var setTable = function(rows, cells) {
		$('.container').append('<table id="table"></table>');

		for(var i=0; i<rows; i++) {
			$('table').append('<tr></tr>');
		};

		for(var j=0; j<cells; j++) {
			$('tr').append('<td><div class="pixel"></div></td>');
		};

		/*Setting .pixel height and width,
		plus the mouseenter and click functions
		want refactoring somehow?*/

		$('.pixel').height(container/rows);
		$('.pixel').width(container/cells);

		$('.pixel').mouseenter(function() {
			$(this).addClass('color');
		});

		$('.pixel').click(function() {
			$(this).removeClass('color');
		});
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