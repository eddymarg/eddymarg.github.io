$(document).ready(function(){
  $('#myCarousel').carousel({
      interval: false, // Disable automatic cycling
      pause: false // Disable pause on hover
  });

  $('#myCarousel').hover(function(){
      $(this).carousel('next'); // When hovered, switch to the next slide
  }, function(){
      $(this).carousel('pause'); // When not hovered, pause the carousel
  });
});