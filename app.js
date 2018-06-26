function typed () {
  const options = {
  strings: ['programmer', 'leader', 'musician', 'marketer', 'mentor', 'analyst', 'problem solver'],
  typeSpeed: 50,
  showCursor: true,
  backDelay: 1000
}
  const typed = new Typed("#i-am-a-list", options);
}

function fadeInSkills () {
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
        
    /* Check the location of each desired element */
    $('.tech-skills-icon').each( function(i){
        
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            
          $(this).animate({'opacity':'1'},2000);
                
        }
        
    }); 

  });
}



$(document).ready(function () {
  typed();
  fadeInSkills();
});