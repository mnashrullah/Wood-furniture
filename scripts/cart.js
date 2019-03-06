window.onload = function () {
    var addtocartbtns = document.getElementsByClassName("addtocartbutton");
    var shoppingcart = document.getElementById("shoppingcart");
    var cartitem = document.querySelectorAll("#shoppingcart ul")[0];
    var emptyCart = document.getElementById("emptyCart");

    var currentCart = new Array();

    for (var i = 0; i < addtocartbtns.length; i++) {
        addtocartbtns[i].addEventListener("click", function (ev) {
            var furnitureId = this.getAttribute("data-item");
            var furniturePrice = this.getAttribute("data-price");
            // alert(furnitureId + ' ' + furniturePrice);
            var item = { id: furnitureId, price: furniturePrice };
            currentCart.push(item);
            UpdateShoppingCartUI();

        });
    }
    function UpdateShoppingCartUI() {
        cartitem.innerHTML = "";
        for (var i = 0; i < currentCart.length; i++) {
            var liElement = document.createElement('li');
            liElement.innerHTML =
                currentCart[i].id + " " + currentCart[i].price + "";
            cartitem.appendChild(liElement);
        }
    };

}
