const searchInput = document.getElementById("searchInput");
const listItems = document.querySelectorAll("#items li");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm === "") {
    listItems.forEach((item) => {
      item.style.display = "list-item";
    });
  } else {
    listItems.forEach((item) => {
      const linkHref = item.firstElementChild.getAttribute("href");
      const linkText = item.firstElementChild.textContent.toLowerCase();

      if (linkText.includes(searchTerm)) {
        item.style.display = "list-item";
        window.location.href = linkHref;
      } else {
        item.style.display = "none";
      }
    });
  }
});

document.getElementById("toggle-cart").addEventListener("click", function () {
  const cart = document.querySelector(".shopping-cart");
  cart.style.display = cart.style.display === "none" ? "block" : "none";
});

function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const linkOne = document.getElementById("link1");
const linkTwo = document.getElementById("link2");

linkOne.addEventListener("click", () => {
  scrollToElement(".head");
});

linkTwo.addEventListener("click", () => {
  scrollToElement(".lunch");
});


const items = [
  { id: 'item1', name: 'Cake-Trufado', price: 24.35 },
  { id: 'item2', name: 'Moça-Churros', price: 21.90 },
  { id: 'item3', name: 'Alpes Suíços', price: 49.70 },
  { id: 'item4', name: 'Lá Francesa', price: 51.15 },
  { id: 'item5', name: 'Pastel de 4 Queijos', price: 5.70 },
  { id: 'item6', name: 'Pão de Batata', price: 4.40 },
  { id: 'item7', name: 'Suco de Maracuja natural', price: 10.10 },
  { id: 'item8', name: 'Suco de abacaxi com hortelã', price: 9.10 },
  { id: 'item9', name: 'Limonada Suíça', price: 11.10 },
  { id: 'item10', name: 'Limonada Pink', price: 12.10 },
  { id: 'item11', name: 'Kaiser', price: 21.25 },
  { id: 'item12', name: 'Lancelot', price: 28.75 },
  { id: 'item13', name: 'King-Bacon', price: 26.75 },
  { id: 'item14', name: 'Alter', price: 24.15 },
  { id: 'item15', name: 'Affogato', price: 13.50 },
  { id: 'item16', name: 'Café black', price: 4.50 },
  { id: 'item17', name: 'Mocaccino', price: 11.90 },
  { id: 'item18', name: 'Café Gelado', price: 12.20 },
];

const cart = [];
let totalPrice = 0;


function addToCart(item) {
  cart.push(item);
  totalPrice += item.price;
  updateCart();
}

function calculateTotal() {
  totalPrice = 0;
  for (const item of cart) {
    totalPrice += item.price;
  }
}

function updateCart() {
  calculateTotal();

  const cartElement = document.getElementById('rightSidebar');
  const totalItems = cart.length;
  cartElement.querySelector('#totalItems').textContent = `Tem ${totalItems} item(s) no carrinho`;

  const cartItemsElement = cartElement.querySelector('#cartItems');
  cartItemsElement.innerHTML = '';

  for ( const item of cart ) {
    const cartItemElement = document.createElement('div');
    cartItemElement.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(cartItemElement);
  }

  const totalPriceElement = cartElement.querySelector('#totalPrice');
  totalPriceElement.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
}
document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
      addToCart(items[index]);
    });
});

document.getElementById('check-In').addEventListener('click', () => {
  alert('Seu pedido foi confirmado, logo entraremos em contato');
})

















// document.addEventListener("DOMContentLoaded", function () {
//   const itemElements = document.querySelectorAll("#items li");
//   const addToCartButtons = document.querySelectorAll("#items li .add-to-cart");
//   const sidebar = document.getElementById("rightSidebar");

//   let cart = [];
//   let totalPrice = 0;

//   addToCartButtons.forEach((button, index) => {
//     button.addEventListener("click", () => {
//       const itemName = itemElements[index].querySelector("h1").textContent;
//       const rawItemPrice = itemElements[index].querySelector("p").textContent;
//       const itemPrice = parseFloat(rawItemPrice.slice(2));

//       cart.push({ name: itemName, price: itemPrice });
//       totalPrice += itemPrice;

//       const cartItemElement = document.createElement("div");
//       cartItemElement.textContent = `${itemName} - R$${itemPrice.toFixed(2)}`;
//       sidebar.appendChild(cartItemElement);

//     });
//   });
// });



// const items = [
//   { id: 'item1', name: 'Cake-Trufado', price: 24.35 },
//   { id: 'item2', name: 'Moça-Churros', price: 21.90 },
//   { id: 'item3', name: 'Alpes Suíços', price: 49.70 },
//   { id: 'item4', name: 'Lá Francesa', price: 51.15 },
//   { id: 'item5', name: 'Pastel de 4 Queijos', price: 5.70 },
//   { id: 'item6', name: 'Pão de Batata', price: 4.40 },
//   { id: 'item7', name: 'Suco de Maracuja natural', price: 10.10 },
//   { id: 'item8', name: 'Suco de abacaxi com hortelã', price: 9.10 },
//   { id: 'item9', name: 'Limonada Suíça', price: 11.10 },
//   { id: 'item10', name: 'Limonada Pink', price: 12.10 },
//   { id: 'item11', name: 'Kaiser', price: 21.25 },
//   { id: 'item12', name: 'Lancelot', price: 28.75 },
//   { id: 'item13', name: 'King-Bacon', price: 26.75 },
//   { id: 'item14', name: 'Alter', price: 24.15 },
//   { id: 'item15', name: 'Affogato', price: 13.50 },
//   { id: 'item16', name: 'Café black', price: 4.50 },
//   { id: 'item17', name: 'Mocaccino', price: 11.90 },
//   { id: 'item18', name: 'Café Gelado', price: 12.20 },
// ];

// const cart = [];
// let totalPrice = 0;


// function addToCart(item) {
//   cart.push(item);
//   totalPrice += item.price;
//   updateCart();
// }

// function updateCart() {
//   const cartElement = document.getElementById('rightSidebar');
//   const totalItems = cart.length;
//   cartElement.querySelector('#totalItems').textContent = `Total: ${totalItems} item(s)`;

// }

// document.querySelectorAll('.add-to-cart').forEach((button, index) => {
//     button.addEventListener('click', () => {
//       addToCart(items[index]);
//     });
// });

// document.getElementById('check-In').addEventListener('click', () => {
//   alert('Seu pedido foi confirmado, logo entraremos em contato');
// })