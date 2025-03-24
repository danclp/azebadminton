//Filter News
$('#sgtable').change(function() {
  var sgfilter = $(this).val()
  filterListSg(sgfilter);
});

//News filter function
function filterListSg(value) {
  var list = $(".sgplace");
  $(list).fadeOut("fast");
  if (value == "All") {
    $("#sgTimetable").find("article").each(function (i) {
      $(this).slideDown();
    });
  } else {
    //Notice this *=" <- This means that if the data-category contains multiple options, it will find them
    //Ex: data-category="Cat1, Cat2"
    $("#sgTimetable").find("article[data-category*=" + value + "]").each(function (i) {
      $(this).slideDown();
    });
  }
}

$('#mytable').change(function() {
  var myfilter = $(this).val()
  filterListMy(myfilter);
});

//News filter function
function filterListMy(value) {
  var list = $(".myplace");
  $(list).fadeOut("fast");
  if (value == "All") {
    $("#myTimetable").find("article").each(function (i) {
      $(this).slideDown();
    });
  } else {
    //Notice this *=" <- This means that if the data-category contains multiple options, it will find them
    //Ex: data-category="Cat1, Cat2"
    $("#myTimetable").find("article[data-category*=" + value + "]").each(function (i) {
      $(this).slideDown();
    });
  }
}

// Slide down location timetable
$('.schedule-list h4').click(function(e) {
  $('.schedule-list h4').not(this).parent().removeClass('open');
  $(this).parent().toggleClass('open');
});

// jQuery UI
$("#tabs").tabs({
  show: {
    effect: "slide",
    direction: "left",
    duration: 800
  },
  hide: {
    effect: "slide",
    direction: "right",
    duration: 800
  }
});

// // Magnific Popup
// $(document).ready(function() {
//   $('.rButton a').magnificPopup({
//     type:'inline',
//     mainClass: 'mfp-with-fade',
//     midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
//     closeOnBgClick: false
//   });
// });