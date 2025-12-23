import {CartIconContainer, ItemCount, ShoppingIcon} from  './cart-icon.styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

const CartIcon = () => {
    
    const dispatch = useDispatch()
    
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)
    
    const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

    return (
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;