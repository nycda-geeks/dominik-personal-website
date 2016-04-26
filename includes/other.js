
$(document).ready(function(){
	$('.parallax').parallax();
	// $('.slider').slider({full_width: true});
	$('#navi').hide();
	$('#about').scrollSpy();
	$('#intro').scrollSpy();

	$('#about').on('scrollSpy:enter', function() {
		$('#navi').fadeIn(500);
	});
	
	$('#intro').on('scrollSpy:enter', function() {
		$('#navi').fadeOut(500);
	});

	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 100
				}, 1000);
				return false;
			}
		}
	});
});

/*
var options = [
    {selector: '#about', offset: 50, callback: function() {

      Materialize.toast("Lol awesome bro", 1500 );
    } }
    ];
  Materialize.scrollFire(options);
  */


  