import {CartIconContainer, ItemCount, ShoppingIcon} from  './cart-icon.styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart/cart.context'

const CartIcon = () => {
    
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
    
    const toggleCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;