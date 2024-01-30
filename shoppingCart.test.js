const {
    createShoppingCart,
    addProduct,
    calculateSubtotal,
    calculateTax,
    calculateTotal,
  } = require('./shoppingCart');
  
  describe('Shopping Cart Tests', () => {
    let cart;
  
    beforeEach(() => {
      cart = createShoppingCart();
    });
  
    test('Add product to the cart', async () => {
      await addProduct(cart, 'cornflakes', 2);
      expect(cart.length).toBe(1);
      expect(cart[0].productName).toBe('cornflakes');
      expect(cart[0].quantity).toBe(2);
      // Add more assertions as needed
    });
  
    test('Calculate subtotal', () => {
      const subtotal = calculateSubtotal([
        { productName: 'cornflakes', quantity: 2, price: 2.5 },
        { productName: 'weetabix', quantity: 1, price: 9.98 },
      ]);
      expect(subtotal).toBe(14.98);
    });
  
    test('Calculate tax', () => {
      const tax = calculateTax(14.98);
      expect(tax).toBe(1.8725); // Adjust the expected value based on your calculation
    });
  
    test('Calculate total', () => {
      const total = calculateTotal(14.98, 1.8725);
      expect(total).toBe(17); // Adjust the expected value based on your calculation
    });
  });
  