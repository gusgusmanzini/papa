//productos
const products = [
    { id: 1, name: "Bloque1", price: 10, image: "https://www.castro.com.uy/contentimg/7333/1/v/maxwidth=400/CA00054_S.jpg"},
    { id: 2, name: "Bloque2", price: 10, image: "https://www.castro.com.uy/contentimg/7333/1/v/maxwidth=400/CA00054_S.jpg"},
    { id: 3, name: "Bloque3", price: 10, image: "https://www.castro.com.uy/contentimg/7333/1/v/maxwidth=400/CA00054_S.jpg"},
];


const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const emptyCartMessage = document.getElementById("empty-cart");

const cart = [];

function renderProducts() {
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        renderCart();
    }
}

function renderCart() {
    cartItems.innerHTML = ""; // Clear current cart items
    if (cart.length === 0) {
        emptyCartMessage.style.display = "block";
        totalPrice.textContent = "Total: $0";
        return;
    }

    emptyCartMessage.style.display = "none";
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });
    totalPrice.textContent = `Total: $${total}`;
}

// Initial render
renderProducts();