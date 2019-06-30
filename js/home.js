var html;
var day;
var icon;
var type;
var place;
var link;

// Load header and footer from html files, and initialize dropdown menu
$(document).ready(function () {
  $('header').load("/components/small_header.html", function(){
	  // init sidenav
	  $('.sidenav').sidenav();
  
	  // init dropdown menu options (desktop)
		  $('.dropdown-trigger').dropdown();
  
	  // init collapsible menu options (mobile)
	  $('.collapsible').collapsible();
	
	  // init image viewers
	  $('.materialboxed').materialbox();
	});

  $('footer').load("components/footer.html");
});

//Build events card

// Compare dates function. Source: http://stackoverflow.com/questions/497790
var dates = {
  convert: function (d) {
    // Converts the date in d to a date-object. The input can be:
    //   a date object: returned without modification
    //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
    //   a number     : Interpreted as number of milliseconds
    //                  since 1 Jan 1970 (a timestamp)
    //   a string     : Any format supported by the javascript engine, like
    //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
    //  an object     : Interpreted as an object with year, month and date
    //                  attributes.  **NOTE** month is 0-11.
    return (
      d.constructor === Date ? d :
        d.constructor === Array ? new Date(d[0], d[1], d[2]) :
          d.constructor === Number ? new Date(d) :
            d.constructor === String ? new Date(d) :
              typeof d === "object" ? new Date(d.year, d.month, d.date) :
                NaN
    );
  },
  compare: function (a, b) {
    // Compare two dates (could be of any type supported by the convert
    // function above) and returns:
    //  -1 : if a < b
    //   0 : if a = b
    //   1 : if a > b
    // NaN : if a or b is an illegal date
    // NOTE: The code inside isFinite does an assignment (=).
    return (
      isFinite(a = this.convert(a).valueOf()) &&
        isFinite(b = this.convert(b).valueOf()) ?
        (a > b) - (a < b) :
        NaN
    );
  },
  inRange: function (d, start, end) {
    // Checks if date in d is between dates in start and end.
    // Returns a boolean or NaN:
    //    true  : if d is between start and end (inclusive)
    //    false : if d is before start or after end
    //    NaN   : if one or more of the dates is illegal.
    // NOTE: The code inside isFinite does an assignment (=).
    return (
      isFinite(d = this.convert(d).valueOf()) &&
        isFinite(start = this.convert(start).valueOf()) &&
        isFinite(end = this.convert(end).valueOf()) ?
        start <= d && d <= end :
        NaN
    );
  }
}

$.get("json/events.json", function (data) {
  $(".result").html(data);
  for (var element in data) {
    day = new Date(element);
    today = new Date();
    if (dates.compare(day, today) == -1) {
      icon = "done";
    } else {
      icon = "today";
    }
    day = day.getDate(day) + '/' + (day.getMonth(day) + 1) + '/' + day.getFullYear(day);
    type = data[element]["type"];
    place = data[element]["location"];
    link = data[element]["link"];
    html = `<a href="${link}" target="_blank" rel="noopener noreferrer" class="collection-item avatar"><i class="material-icons circle">${icon}</i><span class="title">${type}</span><br>${place}<br>${day}</a>`;
    $("#events").append(html);
  }
});
// Load header and footer from html files, and initialize dropdown menu
$(document).ready(function(){
	$('header').load("components/big_header.html", function(){
    // init sidenav
    $('.sidenav').sidenav();

    // init dropdown menu options (desktop)
		$('.dropdown-trigger').dropdown();

    // init collapsible menu options (mobile)
    $('.collapsible').collapsible();
	});

	$('footer').load("components/footer.html");
});