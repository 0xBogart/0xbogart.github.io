// IluminaciÃ³n del tÃ­tulo del aside, acorde a su secciÃ³n correspondiente
    $(document).ready(function() {
        $(window).scroll(function() {
            $('aside li a').each(function() {
                var scrollTop = $(window).scrollTop();
                var target = $(this).attr('href');
                var elementOffset = $(target).offset() ? $(target).offset().top : null;
                var distance = (elementOffset - scrollTop);
                if (distance < 30 && distance > -$(target).height()) {
                    $(this).css('color', '#1e8c00');
                } else {
                    $(this).css('color', 'black');
                }
            });
        });
    });

// Flecha para volver al top del artÃ­culo
$(document).ready(function() {
  // Mostrar/ocultar la flecha al hacer scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#scrollToTopButtonGreen').fadeIn();
    } else {
      $('#scrollToTopButtonGreen').fadeOut();
    }
  });

  // Volver al inicio de la pÃ¡gina al hacer clic en la flecha
  $('#scrollToTopButtonGreen').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
});
