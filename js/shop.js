var src;
var title;
var price;
var descr;
var html;
//Initialize side nav
$(".button-collapse").sideNav();

//Build Shop
$.get("json/shop.json", function(data) {
  $(".result").html(data);
  for (var element in data) {
    src = "img/" + data[element]["src"];
    title = data[element]["title"];
    price = data[element]["price"];
    descr = data[element]["descr"];
    html = `
<div class="col s12 m6 l4">
  <div class="card">
    <div class="card-image">
      <img class="product-img" src="${src}">
    </div>
    <div class="card-content">
      <span class="card-title">${title}</span>
      <p>${descr}<p>
    </div>
    <div class="card-action valign-wrapper">
      <a href="#"><span class="card-title black-text">${price}€</span></a>
      <a href="#">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick">
          <input type="hidden" name="hosted_button_id" value="XXUMTBP4ENKPC">
          <input type="image" src="https://thequarks.github.io/img/buynow.png" border="0" name="submit" alt="Buy Now!">
          <img alt="" border="0" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1">
        </form>
      </a>
    </div>
    <div class="disclaimer">+ 3€ postage</div>
  </div>
</div>`
    $("#shop").append(html);
  }
});