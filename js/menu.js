let cart = {};

function addToCart(name, price) {
    if (cart[name]) {
        cart[name].qty++;
    } else {
        cart[name] = {
            price: price,
            qty: 1
        };
    }
    updateCart();
}

function removeFromCart(name) {
    cart[name].qty--;

    if (cart[name].qty <= 0) {
        delete cart[name];
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const totalPriceEl = document.getElementById("totalPrice");

    cartItems.innerHTML = "";
    let totalItems = 0;
    let totalPrice = 0;

    for (let item in cart) {
        const { price, qty } = cart[item];

        totalItems += qty;
        totalPrice += price * qty;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item} ($${price}) x ${qty}</span>
                <div>
                    <button onclick="addToCart('${item}', ${price})">+</button>
                    <button onclick="removeFromCart('${item}')">−</button>
                </div>
            </div>
        `;
    }

    cartCount.textContent = totalItems;
    totalPriceEl.textContent = totalPrice.toFixed(2);
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("open");
}

function payNow() {
    const paymentMessage = document.getElementById("paymentMessage");

    if (Object.keys(cart).length === 0) {
        paymentMessage.style.color = "red";
        paymentMessage.textContent = "Your cart is empty!";
        return;
    }

    paymentMessage.style.color = "black";
    paymentMessage.textContent = "Processing payment...";

    setTimeout(() => {
        paymentMessage.style.color = "green";
        paymentMessage.textContent = "Payment successful! Thank you";

        cart = {};
        updateCart();
    }, 1500);
}

