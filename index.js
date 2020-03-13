var cart = [];
var cart_list = {};

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addToCart(item) {
 // write your code here
  cart.push({itemName: item,
             itemPrice: Math.floor(Math.random() * 100)});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  switch (cart.length){
    case 0:

    case 1:

    case 2:

    case 3:
  }
  if (cart.length == 0){
    return "Your shopping cart is empty.";
  } else {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
