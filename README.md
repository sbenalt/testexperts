# Shopping Cart API

This project provides a simple shopping cart API in JavaScript using Node.js and Axios. The API allows users to add products, fetch product information, and view the shopping cart state.

## Features

1. **Add a Product to the Cart:**
   - Specify the product name and quantity.
   - Fetch the product price from the [Product API](#product-api).
   - Update the cart state with totals.

2. **View Available Products:**
   - Fetch information about available products from the [Product API](#product-api).

3. **View Shopping Cart State:**
   - Fetch information about the current state of the shopping cart.

## Product API

Base URL: `https://equalexperts.github.io/`

View Product: `GET /backend-take-home-test-data/{product}.json`

Available products:
- `cheerios`
- `cornflakes`
- `frosties`
- `shreddies`
- `weetabix`

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/shopping-cart.git

2. Navigate to the project directory:
   cd shopping-cart
3. Install dependencies:
   npm install
4. Run the script to view products and simulate adding to the cart:
   node app.js

Simulate Adding Products to the Cart
Edit the app.js file to modify the userInput variable and simulate adding products to the cart. Run the script again.

Assumptions and Trade-offs
Assumptions:

The Product API is assumed to be available and provide valid product information.
Prices are fetched in the default currency, and no currency conversion is considered in this implementation.
Trade-offs:

This implementation focuses on simplicity and does not include features like user authentication, persistence, or a user interface.
Error handling is minimal for the sake of brevity in this example.