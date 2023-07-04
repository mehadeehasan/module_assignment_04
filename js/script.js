const products = [
    {
      id: 1,
      name: 'Icon Phone',
      price: 10.99,
      image: './img/icon_phone.jpg',
      buttonLabel: 'Add to Cart'
    },
    {
      id: 2,
      name: 'Lenovo Headphone',
      price: 19.99,
      image: './img/lenovo_Headphone.jpg',
      buttonLabel: 'Add to Cart'
    },
    {
      id: 3,
      name: 'Walton Phone',
      price: 5.99,
      image: './img/walton.jpg',
      buttonLabel: 'Add to Cart'
    },
    {
      id: 4,
      name: 'Smart Belt',
      price: 5.99,
      image: './img/watch.jpg',
      buttonLabel: 'Add to Cart'
    },
    {
      id: 5,
      name: 'Icon Phone',
      price: 10.99,
      image: './img/icon_phone.jpg',
      buttonLabel: 'Add to Cart'
    },
    {
      id: 6,
      name: 'Lenovo Headphone',
      price: 19.99,
      image: './img/lenovo_Headphone.jpg',
      buttonLabel: 'Add to Cart'
    },
    {
      id: 7,
      name: 'Walton Phone',
      price: 5.99,
      image: './img/walton.jpg',
      buttonLabel: 'Add to Cart'
    },
    {
      id: 8,
      name: 'Smart Belt',
      price: 5.99,
      image: './img/watch.jpg',
      buttonLabel: 'Add to Cart'
    },
    {
      id: 10,
      name: 'Icon Phone',
      price: 10.99,
      image: './img/icon_phone.jpg',
      buttonLabel: 'Add to Cart'
    },
    {
      id: 11,
      name: 'Lenovo Headphone',
      price: 19.99,
      image: './img/lenovo_Headphone.jpg',
      buttonLabel: 'Add to Cart'
    },
    {
      id: 12,
      name: 'Walton Phone',
      price: 5.99,
      image: './img/walton.jpg',
      buttonLabel: 'Add to Cart'
    },
    {
      id: 13,
      name: 'Smart Belt',
      price: 5.99,
      image: './img/watch.jpg',
      buttonLabel: 'Add to Cart'
    },
    {
      id: 14,
      name: 'Icon Phone',
      price: 10.99,
      image: './img/icon_phone.jpg',
      buttonLabel: 'Add to Cart'
    },
    {
      id: 15,
      name: 'Lenovo Headphone',
      price: 19.99,
      image: './img/lenovo_Headphone.jpg',
      buttonLabel: 'Add to Cart'
    },
    {
      id: 16,
      name: 'Walton Phone',
      price: 5.99,
      image: './img/walton.jpg',
      buttonLabel: 'Add to Cart'
    },
    {
      id: 17,
      name: 'Smart Belt',
      price: 5.99,
      image: './img/watch.jpg',
      buttonLabel: 'Add to Cart'
    }
  ];


  const productListContainer = document.getElementById('product-list');

  const productHTML = products.map(product => `
    <div class="product">
      <img src="${product.image}" alt="${product.name}" style="width:128px;height:128px;"/>
      <h2>${product.name}</h2>
      <p>Price: ৳${product.price}</p>
      <button onclick="productSelect(${product.id})">${product.buttonLabel}</button>
    </div>
  `);
  
  // Insert the generated HTML into the container element .join('')
  productListContainer.innerHTML = productHTML;
  
  const cartLink = document.getElementById('cart-link');
  const cartImage = document.getElementById('cart-image');
  const cartQuantity = document.getElementById('cart-quantity');
  const cart = [];
  
  const productSelect = (productId) => {
    // Find the clicked product from the products array
    const product = products.find((product) => product.id === productId);
  
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      // If the product already exists, increment the quantity
      existingProduct.quantity++;
    } else {
      // If it's a new product, add it to the cart with a quantity of 1
      cart.push({ ...product, quantity: 1 });
    }
  
    // Update the cart quantity display
    updateCartQuantity();
  
    // Log the updated cart
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  const updateCartQuantity = () => {
    // Calculate the total quantity
    const totalQuantity = cart.reduce((sum, product) => sum + product.quantity, 0);
  
    // Update the cart quantity display
    cartQuantity.textContent = totalQuantity;
  
    // Show/hide the cart image based on the total quantity
    if (totalQuantity > 0) {
      cartImage.style.display = 'inline-block';
      
    } else {
      cartImage.style.display = 'none';
    }
  };

  const clearCartButton = document.getElementById('clear-cart-button');
   clearCartButton.addEventListener('click', function() {
    const cartDataString = localStorage.getItem('cart');
    if (cartDataString) {
        cartData = JSON.parse(cartDataString);
        cartData = [];
        localStorage.setItem('cart', JSON.stringify(cartData));
        cartQuantity.textContent =0;
    }
    //localStorage.setItem('cart', JSON.stringify(ncartData));
  });
