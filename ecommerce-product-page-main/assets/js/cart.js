class Cart {

    #countCart = document.getElementById('count-cart');
    #cartContent = document.getElementById('cart-content');
    #amount = 0;

    add(amount) {
        if(amount === 0) {
            return;
        }
        this.#amount = amount;
        this.#cartContent.innerHTML = "";
        this.#cartContent.appendChild(this.#buildItem());
        this.#cartContent.appendChild(this.#buildButton());
        this.#countCart.style.display = "block";
        this.#countCart.innerHTML = this.#amount;
    }

    getLength() {
        return this.#amount;
    }

    getTotal() {
        return this.#amount * 125.00;
    }

    #buildItem() {
        let item = document.createElement("div");
        item.classList.add("cart__item");

        let img = document.createElement("img");
        img.src = "./assets/images/image-product-1.jpg";
        item.appendChild(img);

        let h3 = document.createElement("h3");
        h3.innerHTML = "Fall Limited Edition Sneakers";
        item.appendChild(h3);

        let span = document.createElement("span");
        span.innerHTML = `R$125.00 x ${this.#amount} <b style="color:black;">R$${this.getTotal().toFixed(2)}</b>`
        item.appendChild(span);

        let icon = document.createElement("img");
        icon.classList.add("icon");
        icon.src = "./assets/images/icon-delete.svg";
        icon.addEventListener("click", this.#remove.bind(this));
        item.appendChild(icon);

        return item;
    }

    #buildButton() {
        let button = document.createElement("button");
        button.classList.add("button");
        button.innerHTML = "Checar";
        return button;
    }

    #remove() {
        console.log("mingau");
        this.#cartContent.innerHTML = "<span>Seu carrinho está vazio.</span>";
        this.#amount = 0;
        this.#countCart.style.display = "none";
        this.#countCart.innerHTML = this.#amount;
    }

}

export default Cart;