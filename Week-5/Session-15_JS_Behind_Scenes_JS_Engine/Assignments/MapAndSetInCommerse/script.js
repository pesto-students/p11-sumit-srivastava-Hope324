// Use descriptive variable and function names
let productViews = new WeakMap();
let cartItems = new WeakSet();

function incrementProductViews(productId) {
 
  if (productViews.has(productId)) {
 
    const viewCount = productViews.get(productId) + 1;
    productViews.set(productId, viewCount);
  } else {

    productViews.set(productId, 1);
  }
}

function addToCart(productId) {

  if (cartItems.has(productId)) {
    return "Product already in cart";
  } else {
    cartItems.add(productId);
    return "Product added to cart";
  }
}
incrementProductViews(123);
incrementProductViews(123);
console.log(productViews.get(123)); // Output: 2

console.log(addToCart(123));
