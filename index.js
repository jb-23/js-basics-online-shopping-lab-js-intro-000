var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var o = { itemName: item,
            itemPrice: Math.floor(1 + Math.random() * 99.9)
          };
  cart.push(o);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  var s = 'In your cart, you have';
  for (var i = 0; i<cart.length; ++i) {
    s += ` ${cart[i].itemName} at \$${cart[i].itemPrice}`;
    if (i === cart.length - 1)  s += '.';  // final item
    else                        s += ',';  // not final item
    if (i === cart.length - 2)  s += ' and';
  }
  return s;
}

function total() {
  var t = 0;
  for (var i=0; i<cart.length; ++i) {
    t += cart[i].itemPrice;
  }
  return t;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
