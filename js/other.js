
$(document).ready(function(){
      $('.parallax').parallax();
      $(".button-collapse").sideNav();
    });


var options = [
    {selector: '#about', offset: 50, callback: function() {

      Materialize.toast("Lol awesome bro", 1500 );
    } }
    ];
  Materialize.scrollFire(options);


  