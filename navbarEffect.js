(function($) {
    $(document).ready(function() {
        
      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $('.navbar').fadeOut(200);
          
        } else {
          $('.navbar').fadeIn(200);
        
          
        }
      });
    });
  })(jQuery);




