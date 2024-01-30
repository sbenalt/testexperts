const axios = require('axios');

// Function to create a new shopping cart
function createShoppingCart() {
    return [];
  }
  
  // Function to add a product to the cart
  async function addProduct(cart, productName, quantity) {
    try {
      const response = await axios.get(`https://equalexperts.github.io/backend-take-home-test-data/${productName}.json`);
      const price = response.data.price;
      const newItem = { productName, quantity, price };
  
      cart.push(newItem);
      console.log(`Added ${quantity} x ${productName} to the cart.`);
    } catch (error) {
      console.error(`Error fetching product information for ${productName}.`);
    }
  }
  
  // Function to calculate subtotal
  function calculateSubtotal(cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  
  // Function to calculate tax
  function calculateTax(subtotal) {
    return subtotal * 0.125; // 12.5% tax
  }
  
  // Function to calculate total
  function calculateTotal(subtotal, tax) {
    return Math.ceil(subtotal + tax);
  }
  
  module.exports = {
    createShoppingCart,
    addProduct,
    calculateSubtotal,
    calculateTax,
    calculateTotal,
  };
  