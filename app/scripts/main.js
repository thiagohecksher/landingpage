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

$('#contact-form').submit(function(e){
  e.preventDefault();

  var   name = $(this).find('input[name="name"]').val(),
        email = $(this).find('input[name="email"]').val(),
        message = $(this).find('textarea[name="message"]').val(),
        dataString = 'name=' + name + '&email=' + email + '&message=' + message;


  console.log(dataString);

  $.ajax({

    type: 'POST',
     url: 'send.php',
    data: dataString,

    success: function(){
      console.log('Dados Enviados');
    },
    error: function(){
      console.log('Deu merda');
    },

  })
});