import { CART_ACTION_TYPES } from './cart.type'

const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    totalPrice: 0,
}

export const cartReducer = (prevState = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...prevState,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...prevState,
                ...payload
            }
        default:
            return prevState
    }
}
