var src;
var title;
var price;
var descr;
var html;
//Initialize side nav
$(".button-collapse").sideNav();

//Build Shop
$.get("/json/shop.json", function(data) {
  $(".result").html(data);
  for (var element in data) {
    src = "img/" + data[element]["src"];
    title = data[element]["title"];
    price = data[element]["price"];
    descr = data[element]["descr"];
    html = `
<div class="col s12 m4">
  <div class="card">
    <div class="card-image">
      <img class="product-img" src="${src}">
    </div>
    <div class="card-content">
      <span class="card-title">${title}</span>
      <p>${descr}<p>
    </div>
    <div class="card-action valign-wrapper">
      <a href="#" class="card-title black-text">${price}€</a>
      <a href="#">Add to cart</a>
    </div>
  </div>
</div>`
    $("#shop").append(html);
  }
});