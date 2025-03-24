let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];


console.log("Item Name               | Quantity | Unit Price | Total Price");
console.log("------------------------------------------------------------");
order.forEach(item => {
  let totalItemCost = (item.quantity * item.unitPricePence) / 100; // Convert to pounds
  console.log(`${item.itemName.padEnd(20)} | ${item.quantity.toString().padStart(8)} | £${(item.unitPricePence / 100).toFixed(2).padStart(10)} | £${totalItemCost.toFixed(2).padStart(10)}`);
});
