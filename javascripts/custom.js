$(function() {
	$(window).scroll(function() {
	  if ($(document).scrollTop() > 150) {
	    $('#shrink').addClass('navbar-shrink');
	    $('#logo').attr('src', "/images/white_logo_website_small.png");
	    $('#brand').css('padding', '0px');
	    $('#bs-example-navbar-collapse-1 > ul').css('marginTop', '10px');
	  } else {
	    $('#shrink').removeClass('navbar-shrink');
	    $('#logo').attr('src', "/images/white_logo_website.png");
	    $('#brand').css('paddingTop', '15px');
	    $('#bs-example-navbar-collapse-1 > ul').css('marginTop', '110px');
	  }
	});
});
