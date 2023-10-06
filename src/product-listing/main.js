import ExternalServices from "../js/ExternalServices.mjs";
import ProductList from "../js/ProductList.mjs";
import { loadHeaderFooter } from "../js/utils.mjs";

loadHeaderFooter();


const dataSource = new ExternalServices("tents");


const element = document.querySelector(".product-list");


const listing = new ProductList("tents", dataSource, element);




listing.init()
