// document.getElementById('mydetails').addEventListener('click', function(e) {
//     e.preventDefault();
// });
//
//
//
// 	// Wait for window load
// 	$(window).load(function() {
// 		// Animate loader off screen
// 		$(".se-pre-con").fadeOut("slow");
// 	});



function escapeAbout() {
  document.addEventListener("keydown", function(event) {
    if (event.which === 27) {
      event.preventDefault()
      console.log("Jack is the best");
      window.history.back();

    }
  })
}


var speed = 'slow';

$('html, body').hide();

$(document).ready(function() {
  $('html, body').fadeIn(speed, function() {
    $('a[href], button[href]').click(function(event) {
      var url = $(this).attr('href');
      if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
      event.preventDefault();
      $('html, body').fadeOut(speed, function() {
        window.location = url;
      });
    });
  });
});