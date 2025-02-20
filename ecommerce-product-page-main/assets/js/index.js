import Cart from "./cart.js"

let cartModal = document.getElementById('cart');
let iconCart = document.getElementById('icon-cart');
let avatar = document.getElementById('avatar');

iconCart.addEventListener("click", () => {

    if(!cartModal.classList.contains("cart-active")){
        cartModal.style.display = "block";

        let id = setTimeout(() => {
            cartModal.classList.toggle("cart-active");
            clearTimeout(id);
        }, 10)

    }else {
        cartModal.classList.toggle("cart-active");
        let id = setTimeout(() => {
            cartModal.style.display = "none";
            clearTimeout(id);
        }, 500)
    }

})

avatar.addEventListener("click", () => {
    if(!cartModal.classList.contains("cart-active")){
        cartModal.style.display = "block";

        let id = setTimeout(() => {
            cartModal.classList.toggle("cart-active");
            clearTimeout(id);
        }, 10)

    }else {
        cartModal.classList.toggle("cart-active");
        let id = setTimeout(() => {
            cartModal.style.display = "none";
            clearTimeout(id);
        }, 500)
    }
})

let cart = new Cart();
let minusButton = document.getElementById("minus-button");
let plusButton = document.getElementById("plus-button");
let addButton = document.getElementById("add-cart-button");
let lengthDisplay = document.getElementById("length-display");
let length = 0;

plusButton.addEventListener("click", () => {
    if(length >= 100) {
        return;
    }
    length += 1;
    lengthDisplay.innerHTML = length;
})

minusButton.addEventListener("click", () => {
    if(length === 0) {
        return;
    }
    length -= 1;
    lengthDisplay.innerHTML = length;
})

addButton.addEventListener("click", () => {
    cart.add(length);
    length = 0;
    lengthDisplay.innerHTML = 0;
})


/* Responsive Menu */

let menuOpenButton = document.getElementById("menu-open-menu");
let menuCloseButton = document.getElementById("menu-close-button");
let menuBG = document.getElementById("menu-bg");

menuOpenButton.addEventListener("click", () => {
    menuBG.style.display = "block";
    document.body.style.overflow = 'hidden';
});

menuCloseButton.addEventListener("click", () => {
    menuBG.style.display = "none";
    document.body.style.overflow = 'auto';
});
