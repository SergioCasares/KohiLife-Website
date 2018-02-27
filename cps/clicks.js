$(document).ready(function() {

	var start;
	var countdown;
	var clicks = 0;
	var active = false;

	$( "#clicker" ).click(function() {

		if(!active){

			start = $.now();
			active = true;
			countdown = setInterval(function(){
				timer()
			}, 50);
			clicks = 0;

		}

		clicks++;
		$('#clicks').html('Calculando ' + clicks + ' clicks...');

	});

	$( "#reset" ).click(function() {

		if(!active){

			$('#reset').hide();
			$('#clicker').show();
			$('.progress').show();
			$('#clicks').html('Esperando clicks...');

			clearInterval(countdown);
			cuenta = 0;
			$('#countdown').html(cuenta + '.000');

		}

	});

	function timer() {

		if(($.now() - start) > 10000){

			$('#clicker').hide();
			$('.countdown').hide();
			$('#countdown').html('10.000');
			$('#reset').show();

			$('#clicks').html('Has logrado hacer ' + (clicks / 10) + ' clicks por segundo!');

			active = false;
			document.getElementById("clicker").innerHTML = 'Click aquí';
			return;

		}

		var t = (start - $.now()) / 1000
		$('#countdown').html(Math.abs(t));

	}

});
