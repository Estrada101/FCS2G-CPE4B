const products = [
    {
        name: "Whole Chicken",
        price: "250",
        image: "1.png",
    },
    {
        name: "Half Chicken",
        price: 125,
        image: "2.png",
    },
    {
        name: "Fore Chicken",
        price: "65",
        image: "3.png",
    },
    {
        name: "Chicken Breast",
        price: "50",
        image: "4.png",
    },
    {
        name: "Chicken Backbone",
        price: "45",
        image: "5.png",
    },
    {
        name: "Chicken Leg",
        price: "80",
        image: "6.png",
    },
    {
        name: "Chicken Thigh",
        price: "40",
        image: "7.png",
    },
    {
        name: "Drumstick",
        price: "40",
        image: "8.png",
    },
    {
        name: "Chicken Wings",
        price: "20",
        image: "9.png",
    },
    {
        name: "Chicken Neck",
        price: "10",
        image: "10.png",
    },
    {
        name: "Chicken Feet",
        price: "5",
        image: "11.png",
    },
    {
        name: "Chicken Head",
        price: "7",
        image: "12.png",
    },
];

const cartList = document.querySelector('.cart-list');
const total = document.querySelector('.total');

const cartItems = {};

function addToCart(key) {
    if (cartItems[key] === undefined) {
        cartItems[key] = {
            product: products[key],
            quantity: 1,
        };
    } else {
        cartItems[key].quantity++;
    }
    reloadCart();
}

function reloadCart() {
    cartList.innerHTML = '';
    let totalPrice = 0;
    let totalQuantity = 0;

    for (const key in cartItems) {
        if (cartItems.hasOwnProperty(key)) {
            const cartItem = cartItems[key];
            const product = cartItem.product;
            const quantity = cartItem.quantity;
            const itemTotal = product.price * quantity;

            const cartItemElement = document.createElement('li');
            cartItemElement.innerHTML = `
                <img src="pictures/${product.image}" alt="${product.name}">
                <div>${product.name}</div>
                <div>₱${product.price.toLocaleString()}</div>
                <div class="quantity-buttons">
                    <button class="decrement" onclick="changeQuantity(${key}, ${quantity - 1})">-</button>
                    <div class="count">${quantity}</div>
                    <button class="increment" onclick="changeQuantity(${key}, ${quantity + 1})">+</button>
                </div>
            `;
            cartList.appendChild(cartItemElement);

            totalPrice += itemTotal;
            totalQuantity += quantity;
        }
    }

    total.innerText = `Total: ₱${totalPrice.toLocaleString()}`;
    quantity.innerText = totalQuantity;
}

function changeQuantity(key, newQuantity) {
    if (newQuantity <= 0) {
        delete cartItems[key];
    } else {
        cartItems[key].quantity = newQuantity;
    }
    reloadCart();
}

function placeOrder() {
    if (Object.keys(cartItems).length === 0) {
        alert('Your cart is empty. Add items to your cart before placing an order.');
    } else {
        openLoginForm();
    }
}

function openLoginForm() {
    const modal = document.getElementById("loginForm");
    modal.style.display = "block";
}

function closeLoginForm() {
    const modal = document.getElementById("loginForm");
    modal.style.display = "none";
}

function login() {
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const address = document.getElementById("address").value;

    if (name === "" || number === "" || address === "") {
        alert("Please fill in all the required fields before submitting.");
    } else {
        alert(`${name} your order will be prepared, We will contact you if it is ready and deliver it to ${address}.\n \nPlease prepare the exact amount!`);
        submitButton.disabled = true;
    }
}
