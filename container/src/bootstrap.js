import { mount as productSection } from "products/ProductsIndex";
import { mount as cardSection } from "cart/CartShow";

console.log("container running...");

productSection(document.querySelector("#productBox"));
cardSection(document.querySelector("#cartBox"));
