export const cart = [];

export function addToCart(productId) {
    let matchingItem;
          cart.forEach((Cartitem) => {
              if(Cartitem.productId === productId) {
                  matchingItem = Cartitem;
              }
          });
          if(matchingItem) {
            matchingItem.quantity += 1;
          } else {
              cart.push({
                  productId: productId,
                  quantity: 1  
              });
          }
  }