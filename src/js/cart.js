import {  loadHeaderFooter  } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";
// import { getLocalStorage } from "./utils.mjs";


loadHeaderFooter();

const cart = new ShoppingCart("cart-select", ".product-list");
cart.renderCartContents();
