// Retrieve cart data from local storage (if any)
let cartData = [];
var sum = 0;

try {
  const cartDataString = localStorage.getItem('cart');
  if (cartDataString) {
    cartData = JSON.parse(cartDataString);
  }
} catch (error) {
  console.error('Error parsing cart data:', error);
  // Handle the error, such as resetting the cart or displaying an error message
}
// Get the cart items and total elements from the HTML
const cartItemsContainer = document.getElementById('cart-items');
const totalContainer = document.getElementById('total');

// Function to calculate the total cart value
const calculateTotal = () => {
  const total = cartData.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  return total.toFixed(2);
};

// Function to render the cart items
const renderCartItems = () => {
  // Clear the cart items container
  cartItemsContainer.innerHTML = '';

  // Render each cart item
  cartData.forEach((product) => {
    const itemContainer = document.createElement('div');
    //itemContainer.classList.add('cart-item');
    itemContainer.classList.add('feature');  

    const itemName = document.createElement('h3');
    itemName.textContent = product.name;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = `৳ ${product.price.toFixed(2)}`;

    const itemQuantity = document.createElement('p');
    itemQuantity.textContent = `Quantity: ${product.quantity}`;

    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemPrice);
    itemContainer.appendChild(itemQuantity);

    cartItemsContainer.appendChild(itemContainer);
  });
};

// Function to render the total cart value
const renderTotal = () => {
  const total = calculateTotal();
  totalContainer.innerHTML = `Total: ৳${total}`;
};

// Render initial cart items and total
renderCartItems();
renderTotal();

// Event listener for removing items from the cart
cartItemsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-item')) {
    const itemId = parseInt(event.target.dataset.itemId);
    const itemIndex = cartData.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      cartData.splice(itemIndex, 1);
      renderCartItems();
      renderTotal();
      localStorage.setItem('cart', JSON.stringify(cartData));
    }
  }
});

