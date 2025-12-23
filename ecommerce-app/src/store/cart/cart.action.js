import { createAction } from "../../utils/reducer/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.type"

const deleteCartItem = (cartItems, productToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToClear.id)
}

const addCartItem = (cartItems, productToAdd) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if (existingItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const subtractCartItem = (cartItems, cartItemToRemove) => {

    const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

    if (existingItem.quantity === 1) {
        return deleteCartItem(cartItems, cartItemToRemove)

    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )


}



export const updateCartItemsReducer = (cartItems, product, action) => {
    let newCartItems

    switch (action) {
        case 'add':
            newCartItems = addCartItem(cartItems, product)
            break

        case 'subtract':
            newCartItems = subtractCartItem(cartItems, product)
            break

        case 'delete':
            newCartItems = deleteCartItem(cartItems, product)
            break

        default:
            throw new Error('wrong action')
    }

    return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, { cartItems: newCartItems })
}


export const setIsCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, { isCartOpen: bool })


