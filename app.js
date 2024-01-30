const axios = require('axios');

async function fetchProducts() {
  const productNames = ['cheerios', 'cornflakes', 'frosties', 'shreddies', 'weetabix'];

  try {
    const products = await Promise.all(productNames.map(async (productName) => {
      const response = await axios.get(`https://equalexperts.github.io/backend-take-home-test-data/${productName}.json`);
      return { name: productName, price: response.data.price };
    }));

    return products;
  } catch (error) {
    console.error('Error fetching product information:', error.message);
    throw error;
  }
}

async function processUserInput(userInput) {
  const products = await fetchProducts();

  const cart = {};
  let subtotal = 0;

  userInput.split('\n').forEach(line => {
    const match = line.match(/(\d+) × (\w+) @ (\d+\.\d+) each/);
    if (match) {
      const quantity = parseInt(match[1]);
      const productName = match[2];
      const price = parseFloat(match[3]);

      const product = products.find(p => p.name === productName);
      if (product) {
        const totalForItem = quantity * price;
        subtotal += totalForItem;

        if (cart[productName]) {
          cart[productName].quantity += quantity;
          cart[productName].total += totalForItem;
        } else {
          cart[productName] = { quantity, total: totalForItem };
        }
      } else {
        console.error(`Product not found: ${productName}`);
      }
    }
  });

  const tax = subtotal * 0.125;
  const total = Math.ceil(subtotal + tax);

  // Display results
  Object.entries(cart).forEach(([productName, { quantity }]) => {
    console.log(`Cart contains ${quantity} x ${productName}`);
  });
  console.log(`Subtotal = ${subtotal.toFixed(2)}`);
  console.log(`Tax = ${tax.toFixed(2)}`);
  console.log(`Total = ${total.toFixed(2)}`);
}

// Example User Input
const userInput = `Add 2 × cornflakes @ 2.52 each
Add another 1 x cornflakes @2.52 each
Add 1 × weetabix @ 9.98 each`;

processUserInput(userInput);
