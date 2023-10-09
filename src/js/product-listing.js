import ExternalServices from './ExternalServices.mjs';
import ProductList from './ProductList.mjs';
import { loadHeaderFooter, getParam, itemsCart } from './utils.mjs';

loadHeaderFooter();

const category = getParam('category');
const dataSource = new ExternalServices();
const listElement = document.querySelector('.product-list');
const myList = new ProductList(category, dataSource, listElement);
myList.init();

itemsCart();

const urlParams = new URLSearchParams(window.location.search);
const categorys = urlParams.get('category');
document.querySelector('.title').textContent = categorys;
