// Coaches Filter
$('.cfilter').on('click', function() {
  var $location = $(this).attr('data-location');

  if($('.list-filter li').hasClass('filtering')) {
    $('.list-filter li').removeClass('filtering');
    $(this).parent().addClass('filtering');
  }

  if ($location == 'all') {
    $('.cfilter-content').removeClass('is-hidden').fadeIn(1000); 
  } else {
    $('.cfilter-content').addClass('is-hidden').fadeOut(1000);
    $('.cfilter-content[data-location=' + $location + ']').removeClass('is-hidden').fadeIn(
      1000);
  }
})

// Magnific Popup
$(document).ready(function() {
  $('.details a').magnificPopup({
    type:'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    closeOnBgClick: false
  });
});