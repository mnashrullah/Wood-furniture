window.onload = function () {
    var addtocartbtns = document.getElementsByClassName("addtocartbutton");
    var shoppingcart = document.getElementById("shoppingcart");
    var cartitem = document.querySelectorAll("#shoppingcart ul")[0];
    var emptyCart = document.getElementById("emptyCart");
    // var currentCart = new Array();
    currentCart = JSON.parse(localStorage.getItem('cart'));
    if (!currentCart) {
        currentCart = new Array();
    }
    UpdateShoppingCartUI();
 
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
        console.log(currentCart);
        console.log(JSON.stringify(currentCart));
        localStorage.setItem('cart', JSON.stringify(currentCart));
        console.log(JSON.parse(localStorage.getItem('cart')));
    };
    emptyCart.addEventListener("click", function (ev) {
        currentCart = new Array();
        UpdateShoppingCartUI();
    });
}
