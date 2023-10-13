import {  loadHeaderFooter  } from './utils.mjs';
import ShoppingCart from './ShoppingCart.mjs';


loadHeaderFooter();

const cart = new ShoppingCart('cart-select', '.product-list');
cart.renderCartContents();
cart.disableButton()


