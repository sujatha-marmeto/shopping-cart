const products = [
    { id: 1, name: 'Fjallraven - Foldsack No. 1 Backpack', price: 109.95, image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' },
    { id: 2, name: 'Mens Casual Premium Slim Fit T-Shirts', price: 22.3, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
    {
        "id": 3,
        "name": "Mens Cotton Jacket",
        "price": 55.99,
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "quantity": 0
    },
    {
        "id": 4,
        "name": "Mens Casual Slim Fit",
        "price": 15.99,
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "quantity": 0
    },
    {
        "id": 5,
        "name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "quantity": 0
    },
    {
        "id": 6,
        "name": "Solid Gold Petite Micropave",
        "price": 168,
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "quantity": 0
    },
    {
        "id": 7,
        "name": "White Gold Plated Princess",
        "price": 9.99,
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "quantity": 0
    },
    {
        "id": 8,
        "name": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "quantity": 0
    },
    {
        "id": 9,
        "name": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        "price": 64,
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "quantity": 0
    },
    {
        "id": 10,
        "name": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "quantity": 0
    },
    {
        "id": 11,
        "name": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "quantity": 0
    },
    {
        "id": 12,
        "name": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "quantity": 0
    },
    {
        "id": 13,
        "name": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "quantity": 0
    },
    {
        "id": 14,
        "name": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
        "price": 999.99,
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "quantity": 0
    },
    {
        "id": 15,
        "name": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "quantity": 0
    },
    {
        "id": 16,
        "name": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "quantity": 0
    },
    {
        "id": 17,
        "name": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "quantity": 0
    },
    {
        "id": 18,
        "name": "MBJ Women's Solid Short Sleeve Boat Neck V",
        "price": 9.85,
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "quantity": 0
    },
    {
        "id": 19,
        "name": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "quantity": 0
    },
    {
        "id": 20,
        "name": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "quantity": 0
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentPage = 1;
const itemsPerPage = 10;
let filteredProducts = [...products];

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('product-list')) {
        renderProductList();
    }
    if (document.getElementById('cart-items')) {
        renderCart();
    }
});

function renderProductList() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    const paginatedProducts = paginate(filteredProducts, currentPage, itemsPerPage);
    paginatedProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${truncate(product.name, 20)}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });

    document.getElementById('page-number').innerText = currentPage;
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 50px;">
            <h4>${truncate(item.name, 20)}</h4>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });

    updateCartSummary();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function updateCartSummary() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    const averagePrice = cart.length > 0 ? (cart.reduce((sum, item) => sum + item.price * item.quantity, 0) / cart.reduce((sum, item) => sum + item.quantity, 0)).toFixed(2) : '0.00';

    document.getElementById('cart-summary').innerHTML = `
        <p>Total Price: $${totalPrice}</p>
        <p>Average Price: $${averagePrice}</p>
        <p>Items in Cart: ${totalQuantity}</p>
    `;
}

function paginate(array, page_number, page_size) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

function nextPage() {
    if (currentPage * itemsPerPage < filteredProducts.length) {
        currentPage++;
        renderProductList();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderProductList();
    }
}

function filterProducts() {
    const filterPrice = parseFloat(document.getElementById('filter-price').value);
    if (isNaN(filterPrice)) {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.price >= filterPrice);
    }
    currentPage = 1;
    renderProductList();
}

function resetFilter() {
    filteredProducts = [...products];
    document.getElementById('filter-price').value = '';
    currentPage = 1;
    renderProductList();
}

function truncate(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    }
    return str;
}

function sortCart(order) {
    if (order === 'asc') {
        cart.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
        cart.sort((a, b) => b.price - a.price);
    }
    renderCart();
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    document.getElementById('cart-summary').innerHTML = 'Your cart is empty';
}
