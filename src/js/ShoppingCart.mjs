import { getLocalStorage, setLocalStorage, itemsCart } from "./utils.mjs";

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <button class="delete" id="${item.Id}">x</button>
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryMedium}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p  id="" class="cart-card__quantity"> Cantidad: ${item.quantity}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
  return newItem;
}

export default class ShoppingCart {
  constructor(key, parentSelector) {
    this.key = key;
    this.parentSelector = parentSelector;
  }

  deleteFromCart(id) {
    return () => {
      const cart = getLocalStorage("cart-select") || {};
      if (cart[id].quantity > 1) {
        cart[id].quantity -= 1;
      } else {
        delete cart[id];
      }
      setLocalStorage("cart-select", cart);
      this.renderCartContents();
    };
  }

  renderCartContents() {
    const cartItems = getLocalStorage(this.key);
    if (!cartItems) {
      document.querySelector(this.parentSelector).innerHTML =
        "<p>No hay productos en el carrito</p>";
      return;
    }
    const htmlItems = Object.values(cartItems).map((item) =>
      cartItemTemplate(item)
    );
    document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");

    Object.values(getLocalStorage("cart-select")).forEach((item) => {
      document
        .getElementById(item.Id)
        .addEventListener("click", this.deleteFromCart(item.Id));
    });

    const cartTotal = Object.values(cartItems).reduce(
      (total, item) => total + item.FinalPrice * item.quantity,
      0
    ).toFixed(2);
    document.getElementById("total").textContent = `${cartTotal}`;

    itemsCart();
  }
}
