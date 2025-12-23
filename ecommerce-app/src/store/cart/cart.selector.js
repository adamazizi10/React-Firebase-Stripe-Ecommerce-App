import { createSelector } from "reselect"

const selectCartReducer = (state) => state.cart

export const selectIsCartOpen = createSelector([selectCartReducer], (cartSlice) => cartSlice.isCartOpen)

export const selectCartItems = createSelector([selectCartReducer], (cartSlice) => cartSlice.cartItems)

export const selectCartCount = createSelector([selectCartItems], (newCartItems) => newCartItems.reduce((total, item) => total + item.quantity, 0))

export const selectTotalPrice = createSelector([selectCartItems], (newCartItems) => newCartItems.reduce((total, item) => total + item.quantity * item.price, 0))