import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
)

// first paramater is a collection of selectors and the second argument recieves the return of the selectorsty in your first paramater and results in the end output you want from each of those selectors
// The state is getting filtered from the component that calls the selector, then in this case to selectCart then to through to selectCartItems then to selectCartItemsCount
// this is using Memoization so that our components dont re render if any of the state changes and only if this specific piece of state changes
