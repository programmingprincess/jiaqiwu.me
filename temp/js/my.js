jQuery(document).ready(function($) {

	var menu = $('.menu .navbar');
	var offset = menu.offset().top;

  //make navbar fixed when the top of screen hits
	$(window).bind('scroll', function() {
		$('.menu').addClass('fixfix');
		if($(window).scrollTop() >= offset) {
			$('.menu .navbar').addClass('navbar-fixed-top');
		} else {
			$('.menu .navbar').removeClass('navbar-fixed-top');
		}
	});

  //add active class to navbar clicked links
  $('.menu a').on('click', function() {
    $('.menu a').removeClass('current-demo');
    $(this).addClass('current-demo');
  });


});



//animate page transitions
$(function() {
  $('a').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
}); 

/*

//transition function one: speed 500

$('a').click(function() {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
  return false;
});

//transition function two: speed 750

$(function() {
  $('.js-nav a, .js-connect').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});

*/