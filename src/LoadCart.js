import { UI } from "./UI.js";
import { Products } from "./Products.js";
import { Storage } from "./Storage.js";
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const cartWrap = document.querySelector(".cartWrap");
const cartContent = document.querySelector(".cart-content");
const cartOverlay = document.querySelector(".cart-overlay");
export class RunCart {
  runCart() {
    document.addEventListener("DOMContentLoaded", () => {
      const ui = new UI();

      ui.setupApp();

      cartBtn.addEventListener("click", () => {
        cartContent.classList.add("showCart");
        cartOverlay.classList.add("backDrop");
      });
      closeCartBtn.addEventListener("click", () => {
        cartContent.classList.remove("showCart");
        cartOverlay.classList.remove("backDrop");
      });
      cartWrap.addEventListener("click", () => {
        if ((cartOverlay.opacity = "100%")) {
          cartContent.classList.remove("showCart");
          cartOverlay.classList.remove("backDrop");
        }
      });
      const products = new Products();

      products
        .getProducts()
        .then((products) => {
          ui.displayProducts(products);
          Storage.saveProducts(products);
        })
        .then(() => {
          ui.getBagButtons();
          ui.cartLogic();
        });
    });
  }
}
