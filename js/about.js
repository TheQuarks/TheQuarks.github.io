// Load header and footer from html files
$(document).ready(function(){
  $('header').load("components/small_header.html");
  $('footer').load("components/footer.html");
});

//Initialize side nav
$(".button-collapse").sideNav();
