"use strict";
// export interface IOrder {
//   calculateTotal(): number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTotalAmount(order) {
    let total = order.calculateTotal();
    const discount = total * 0.1;
    total -= discount;
    const tax = total * 0.2;
    total += tax;
    return total;
}
exports.calculateTotalAmount = calculateTotalAmount;
