// $(document).ready(function(){

//       $(window).scroll(function() { 
//         if ($(document).scrollTop() > 510) {
//           $(".navbar").css("background-color", "#233146"); 
//           $(".sand").css("color", "#dbcfbf"); 
//           $(".top_add").css("color", "#dbcfbf"); 
//         } else {
//           $(".navbar-fixed-top").css("background-color", "transparent");
//         }
//       });
//     });


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.nav_icon')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}