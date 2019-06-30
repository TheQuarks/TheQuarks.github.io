var src;
var title;
var price;
var descr;
var html;

// Load header and footer from html files
$(document).ready(function () {
  $('header').load("components/small_header.html", function () {
    // init sidenav
    $('.sidenav').sidenav();

    // init dropdown menu options (desktop)
    $('.dropdown-trigger').dropdown();

    // init collapsible menu options (mobile)
    $('.collapsible').collapsible();
  });
  $('footer').load("components/footer.html");
});

//Build Shop
$.get("json/shop.json", function (data) {
  $(".result").html(data);
  for (var element in data) {
    src = "img/" + data[element]["src"];
    title = data[element]["title"];
    price = data[element]["price"];
    descr = data[element]["descr"];
    html = `
<div class="col s12 m6">
  <div class="card hoverable">
    <div class="card-image">
      <img class="product-img" src="${src}">
    </div>
    <div class="card-content">
      <span class="card-title">${title}</span>
      <p>${descr}<p>
    </div>
    <div class="flex-shop">
      <div class="flex-element"><span class="price black-text">${price}€</span><span class="black-text disclaimer"> + postage</span></div>
      <a class="btn red darken-3 waves-effect waves-light flex-element" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XXUMTBP4ENKPC" target="_blank" rel="noopener noreferrer">Buy now</a>
    </div>
  </div>
</div>`
    $("#shop").append(html);
  }
});