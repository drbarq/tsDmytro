import { ShoppingCart } from './lib/shopping-cart';
import { calculateTotalAmount } from './lib/calculate-total-amount';
import { Order } from './lib/order';

// import './Implementing-Interfaces';

const cart = new ShoppingCart();
console.log(`The carts total is ${calculateTotalAmount(cart)}`);

const order = new Order();
console.log(`the order's total is ${calculateTotalAmount(order)}`);
