// Escape on About

function escapeAbout() {
  document.addEventListener("keydown", function(event) {
    if (event.which === 27) {
      event.preventDefault()
      console.log("Jack is the best");
      window.history.back();

    }
  })
}


// Collapser

var targetElements = document.getElementsByClassName("textarea")
console.log(targetElements);
Array.prototype.map.call(targetElements, function(element) {
  console.log("I love Jack");

  element.addEventListener("click", function(event) {
    console.log(event);

    var isExpanded = element.classList.contains("textarea-expand")

    if (isExpanded === true) {
      element.classList.remove("textarea-expand")
    } else {
      element.classList.add("textarea-expand")
    }

  })
})


// var speed = 'slow';
//
// $('html, body').hide();
//
// $(document).ready(function() {
//   $('html, body').fadeIn(speed, function() {
//     $('a[href], button[href]').click(function(event) {
//       var url = $(this).attr('href');
//       if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
//       event.preventDefault();
//       $('html, body').fadeOut(speed, function() {
//         window.location = url;
//       });
//     });
//   });
// });