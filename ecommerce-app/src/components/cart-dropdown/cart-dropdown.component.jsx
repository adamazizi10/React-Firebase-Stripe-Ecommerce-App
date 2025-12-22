import Button from '../button/button.component';
import './cart-dropdown.styles'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart/cart.context';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { CardDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';
import { BaseButton } from '../button/button.styles';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return (
        <CardDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (
                        cartItems.map((cartItem) => (
                            <CartItem key={cartItem.id} cartItem={cartItem} />
                        ))
                    ) : (
                        <EmptyMessage>Your Cart is Empty</EmptyMessage>
                    )
                }
            </CartItems>
            <BaseButton onClick={goToCheckoutHandler}>CHECKOUT</BaseButton>
        </CardDropdownContainer>
    )
}

export default CartDropdown;