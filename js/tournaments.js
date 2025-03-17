// Mobile Nav .site-nav is the trigger
$('.toggle').click(function() {
  $(this).toggleClass('active');
  $('.site-nav').toggleClass('active');
});

// Magnific Popup
$(document).ready(function() {
  $('.tournament-reg a').magnificPopup({
    type:'inline',
    mainClass: 'mfp-with-fade',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    closeOnBgClick: false
  });
});