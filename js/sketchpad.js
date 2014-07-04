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

}); 