if(!Modernizr.backgroundsize) {
  $('.hero-unit').backstretch('images/hero-bg.jpg');
  $('#contact').backstretch('images/contact-bg.jpg');
}

$('a').smoothScroll();

$('.navbar').scrollspy();

