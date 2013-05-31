if(!Modernizr.backgroundsize) {
  $('.hero-unit').backstretch('images/hero-bg.jpg');
  $('#contact').backstretch('images/contact-bg.jpg');
}

$('a').smoothScroll();

$('.navbar').scrollspy();

var $container = $('.wrapper');

$container.isotope({
  itemSelector : '.element',
  masonry : {
    columnWidth : 155
  },
  masonryHorizontal : {
    rowHeight: 155
  },
  cellsByRow : {
    columnWidth : 300,
    rowHeight : 300
  },
  cellsByColumn : {
    columnWidth : 300,
    rowHeight : 300
  }
});

$('#filters a').click(function(e){
  e.preventDefault();

  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
});

$('.dropdown-toggle').dropdown()