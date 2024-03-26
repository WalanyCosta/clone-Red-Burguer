let cart = [];
const modalContainer = document.querySelector(".modal");
const modalWrapper = document.querySelector(".modal-wrapper");
const watchModal = document.querySelector("footer");
const buttonGhost = document.querySelector(".button-ghost");
const productWrapper = document.querySelector(".product__wrapper");
const data = [
  {
    id: 1,
    title: "Cheese Burger Duplo",
    paragraph:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
    price: 35.0,
    url: "../images/hamb-1.png",
  },
  {
    id: 2,
    title: "Cheese Burger",
    paragraph:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
    price: 35.0,
    url: "../images/hamb-2.png",
  },
  {
    id: 3,
    title: "Smash Burger",
    paragraph:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
    price: 35.0,
    url: "../images/hamb-3.png",
  },
  {
    id: 4,
    title: "Cheese Bacon",
    paragraph:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
    price: 35.0,
    url: "../images/hamb-4.png",
  },
  {
    id: 5,
    title: "Cheese Burger Duplo",
    paragraph:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
    price: 35.0,
    url: "../images/hamb-5.png",
  },
  {
    id: 6,
    title: "Cheese Burger Duplo",
    paragraph:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
    price: 35.0,
    url: "../images/hamb-6.png",
  },
  {
    id: 7,
    title: "Cheese Burger Duplo",
    paragraph:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
    price: 35.0,
    url: "../images/hamb-7.png",
  },
  {
    id: 8,
    title: "Cheese Burger Duplo",
    paragraph:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
    price: 35.0,
    url: "../images/hamb-8.png",
  },
  {
    id: 9,
    title: "Cheese Burger Duplo",
    price: 35.0,
    url: "../images/refri-1.png",
  },
  {
    id: 10,
    title: "Cheese Burger Duplo",
    price: 35.0,
    url: "../images/refri-2.png",
  },
];
const updateCart = (newCart) => {
  cart = newCart;
};

function sizeCart() {
  const sum = cart.reduce((sum, product) => {
    return sum + product.amount;
  }, 0);

  watchModal.innerText = `${
    sum === 0 ? "" : "(" + sum + ")"
  } Veja seu carrinho`;
}

function showItemsInCart(carts) {
  let products = "";

  carts.forEach((product) => {
    products += `
      <div class="flex flex-col gap-1 relative">
        <strong>${product.title}</strong>
        <span>(Quantidade: ${product.amount})</span>
        <span>R$ ${product.subtotal}</span>
        <button 
          class="absolute right-8 top-1/3" 
          type="button" 
          onclick='handleRemoveProductInCart(${product.id})'
        >
          Remover
        </button>
      </div>
    `;
  });

  modalWrapper.innerHTML = products;
}

function showProductsInScreen(elements) {
  productWrapper.innerHTML += elements;
}

function loadProducts() {
  data.forEach((product) => {
    const productElement = `
      <div class="product__item">
        <img class="product__image" src=${product.url}>
  
        <div>
          <strong class="product__header">${product.title}</strong>
          <p>${product?.paragraph || ""}<p>
        </div>
  
        <div class="product__footer">
          <strong class="product__footer-price">R$ ${product.price}</strong>
          <button 
            type="button" 
            class="product__footer-buy"
            onclick='handleAddProductInCart(${product.id})'
            >
            buy
          </button>
        </div>
      </div>
    `;
    showProductsInScreen(productElement);
  });
}

function handleRemoveProductInCart(product_id) {
  let newCart = cart.map((product) => {
    if (product.id === product_id) {
      return {
        ...product,
        amount: product.amount - 1,
        subtotal: product.subtotal - product.price,
      };
    }
    return product;
  });

  newCart = newCart.filter((product) => product.amount > 0);

  showItemsInCart(newCart);
  updateCart(newCart);

  sizeCart();
}

function handleAddProductInCart(product_id) {
  let product = cart.find((product) => product.id === product_id);

  if (product) {
    cart = cart.map((product) => {
      if (product.id === product_id) {
        return {
          ...product,
          amount: product.amount + 1,
          subtotal: product.price * (product.amount + 1),
        };
      }
      return product;
    });
  } else {
    data.forEach((product) => {
      if (product.id === product_id) {
        cart.push({
          id: product.id,
          title: product.title,
          amount: 1,
          price: product.price,
          subtotal: product.price,
        });
      }
    });
  }

  sizeCart();
}

watchModal.addEventListener("click", () => {
  modalContainer.setAttribute("data-visible", true);

  showItemsInCart(cart);
});

buttonGhost.addEventListener("click", () => {
  modalContainer.removeAttribute("data-visible");
});

loadProducts();
