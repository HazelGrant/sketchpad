$(document).ready(function() {
	for(var i=0; i<16; i++) {
		$('table').append('<tr></tr>');
		};

	for(var j=0; j<16; j++) {
		$('tr').append('<td><div class="pixel"></div></td>');
	};

	$('.pixel').mouseenter(function() {
		$(this).addClass('color');
	});

	$('button').click(function() {
		var table = document.getElementById("table");
		table.remove();

		$('.container').append('<table class="table"></table>');

		var rows = prompt("Enter a number");
		var cells = prompt("Enter another number");

		for(var i=0; i<rows; i++) {
			$('table').append('<tr></tr>');
		};

		for(var j=0; j<cells; j++) {
			$('tr').append('<td><div class="pixel"></div></td>');
		};

		$('.pixel').mouseenter(function() {
			$(this).addClass('color');
		});

	});
}); 