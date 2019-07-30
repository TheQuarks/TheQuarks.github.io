// Load header and footer from html files
$(document).ready(function(){
	$('header').load("/components/small_header.html", function(){
	  // init sidenav
	  $('.sidenav').sidenav();
  
	  // init dropdown menu options (desktop)
		  $('.dropdown-trigger').dropdown();
  
	  // init collapsible menu options (mobile)
	  $('.collapsible').collapsible();
	});

	$('footer').load("/components/footer.html");
  });