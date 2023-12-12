// Iluminación del título del aside, acorde a su sección correspondiente
    $(document).ready(function() {
        $(window).scroll(function() {
            $('aside li a').each(function() {
                var scrollTop = $(window).scrollTop();
                var target = $(this).attr('href');
                var elementOffset = $(target).offset() ? $(target).offset().top : null;
                var distance = (elementOffset - scrollTop);
                if (distance < 30 && distance > -$(target).height()) {
                    $(this).css('color', '#DB0000');
                } else {
                    $(this).css('color', 'black');
                }
            });
        });
    });

// Flecha para volver al top del artículo
$(document).ready(function() {
  // Mostrar/ocultar la flecha al hacer scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#scrollToTopButtonRed').fadeIn();
    } else {
      $('#scrollToTopButtonRed').fadeOut();
    }
  });

  // Volver al inicio de la página al hacer clic en la arrow
  $('#scrollToTopButtonRed').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
});
