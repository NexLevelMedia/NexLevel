$(function() {
	//initial window size analysis - if less than 768px, show the small navbar
	if ( $(window).width() < 768) { 
			shrink();
		}

	// If the window width is bigger than 768px, resize the navbar depending on scroll states
	else {
		$(window).scroll(function() {
		  if ($(document).scrollTop() > 150) {
		    shrink();
		  } 
		  else {
		    expand();
		  }
		});
	}
	//allow for changes in the navbar size depending on resizing of browser windows
	$(window).resize(function(){
	if ( $(window).width() < 768) { 
		shrink();
		//stop the expansion happening on small screens after re-size
		$(window).scroll(function() {
		  if ($(document).scrollTop() >= 0) {
		    shrink();
		  }
		});
		}
	else {
		expand();
		//ensure expansion does happen on large screens post re-size
		}
	});
});

function shrink() {
	$('#shrink').addClass('navbar-shrink');
    $('#logo').attr('src', "/images/white_logo_website_small.png");
    $('#brand').css('padding', '0px');
    $('#bs-example-navbar-collapse-1 > ul').css('marginTop', '10px');
    $('#topbuffer').css('height', '60px');
}

function expand() {
	$('#shrink').removeClass('navbar-shrink');
    $('#logo').attr('src', "/images/white_logo_website.png");
    $('#brand').css('paddingTop', '15px');
    $('#bs-example-navbar-collapse-1 > ul').css('marginTop', '110px');
    $('#topbuffer').css('height', '155px');
}
