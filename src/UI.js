import { Storage } from "./Storage.js";
let cart = [];
const cartTotal = document.querySelector(".cart-total");
const cartItems = document.querySelector(".fa-square span");

const clearCartBtn = document.querySelector(".clear-cart");
const cartOverlay = document.querySelector(".cart-overlay");
// eslint-disable-next-line no-unused-vars
const cartItemPlace = document.querySelector(".cart-item");

const cartContent = document.querySelector(".cart-content");
// eslint-disable-next-line no-unused-vars
const cartDOM = document.querySelector(".cart");
const productsDOM = document.querySelector(".items");
// eslint-disable-next-line no-unused-vars
const rightArrow = document.querySelector(".fa-arrow-right");
const leftArrow = document.querySelector(".fa-arrow-left");

let buttonsDOM = [];
let removeButtonsDOM = [];

export class UI {
  displayProducts(products) {
    let result = "";

    products.forEach((product) => {
      result += ` <div class="item1">
        
        <img src="${product.image}" alt="" class="image1" />
        <h4 class='productTitle my-1'> ${product.title} <h4>
        <p class="my-1 price1">$${product.price}</p>
        <button class="btn-add add1" id="add1" data-id="${product.id}">
          Add to cart
        </button>
      </div>`;
    });

    productsDOM.innerHTML = result;
  }

  getBagButtons() {
    const buttons = [...document.querySelectorAll(".add1")];
    buttonsDOM = buttons;
    buttons.forEach((button) => {
      let id = button.dataset.id;
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        button.innerText = "In Cart";
        button.disabled = true;
      }
      button.addEventListener("click", (e) => {
        e.target.innerText = "In Cart";
        e.target.disabled = true;
        let cartItem = { ...Storage.getProducts(id), amount: 1 };
        cart = [...cart, cartItem];
        Storage.saveCart(cart);
        this.setCartValue(cart);
        this.addCartItem(cartItem);
      });
    });
  }

  setCartValue(cart) {
    let tempTotal = 0;
    let tempItemsTotal = 0;
    cart.map((item) => {
      tempTotal += item.price * item.amount;
      tempItemsTotal += item.amount;
    });
    cartTotal.innerText = tempTotal;
    cartItems.innerText = tempItemsTotal;
  }
  addCartItem(item) {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `<img src="${item.image}" alt="" />
    
        <h4>${item.title}</h4>
        <h5>$${item.price}</h5>
        <span class="remove-item" data-id = '${item.id}'>remove</span>  <div>
        <i class="fas fa-chevron-up" data-id = '${item.id}'> </i>
        <p class="item-amount"  >${item.amount}</p>
        <i class="fas fa-chevron-down" data-id = '${item.id}'> </i>
      </div>`;

    cartContent.appendChild(div);
  }

  setupApp() {
    cart = Storage.getCart();
    this.setCartValue(cart);
    this.populate(cart);
  }
  removeItems(id) {
    cart = cart.filter((item) => item.id != id);

    this.setCartValue(cart);
    Storage.saveCart(cart);
  }
  populate(cart) {
    cart.forEach((item) => {
      this.addCartItem(item);
    });
  }
  cartLogic() {
    clearCartBtn.addEventListener("click", () => {
      while (cartContent.children.length > 0) {
        Storage.clearCart();
        this.setupApp();
        buttonsDOM.forEach((button) => {
          button.innerText = "Add to cart";
          button.disabled = false;
        });
        cartContent.innerHTML = "";
      }
    });
    cartContent.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-item")) {
        let removeItem = e.target;
        let id = removeItem.dataset.id;
        cartContent.removeChild(removeItem.parentElement);
        this.removeItems(id);
        let button = buttonsDOM.find((btn) => btn.dataset.id === id);
        button.innerText = "Add to cart";
        button.disabled = false;
      } else if (e.target.classList.contains("fa-chevron-up")) {
        let addAmount = e.target;
        let id = addAmount.dataset.id;
        let tempItem = cart.find((item) => item.id === id);
        tempItem.amount = tempItem.amount + 1;
        Storage.saveCart(cart);
        this.setCartValue(cart);
        addAmount.nextElementSibling.innerText = tempItem.amount;
      } else if (e.target.classList.contains("fa-chevron-down")) {
        let removeAmount = e.target;
        let id = removeAmount.dataset.id;
        let tempItem = cart.find((item) => item.id === id);
        if (tempItem.amount > 1) {
          tempItem.amount = tempItem.amount - 1;
          removeAmount.previousElementSibling.innerText = tempItem.amount;
        } else {
          tempItem.amount = 1;
          removeAmount.previousElementSibling.innerText = tempItem.amount;
        }

        Storage.saveCart(cart);
        this.setCartValue(cart);
      }
    });
  }
}
