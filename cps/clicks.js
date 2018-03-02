$(document).ready(function() {

	var start;
	var countdown;
	var clicks = 0;
	var active = false;

	$("#clicker").click(function() {
		if(!active){
			start = $.now();
			active = true;
			countdown = setInterval(function(){
				timer()
			}, 50);
			clicks = 0;
		}
		clicks++;
		$('#clicks').html(clicks);
	});

	$("#reset").click(function() {
		if(!active){
			$('#reset').hide();
			$('#clicker').show();
			$('.progress').show();
			$('#clicks').html('0');
			clearInterval(countdown);
			$('#countdown').html('Time: 0');
		}
	});

	function timer() {
		if(($.now() - start) > 10000){
			$('#clicker').hide();
			$('.countdown').hide();
			$('#countdown').html('Time: 10');
			$('#reset').show();
			$('#clicks').html((clicks / 10) + ' clicks per second.');
			active = false;
			document.getElementById("clicker").innerHTML = 'Click here';
			return;
		}
		var t = (start - $.now()) / 1000
		var ronda = Math.abs(t);
		$('#countdown').html('Time: '+Math.round(ronda));
	}

});
