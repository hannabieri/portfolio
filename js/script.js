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