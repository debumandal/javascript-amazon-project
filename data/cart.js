export const cart = [{}];

export function addToCart(productId) {
  const quantity = Number(
    document.querySelector(`.js-quantity-selector-${productId}`).value,
  );
  let matchingItems;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItems = cartItem;
    }
  });

  if (matchingItems) {
    matchingItems.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }
}
