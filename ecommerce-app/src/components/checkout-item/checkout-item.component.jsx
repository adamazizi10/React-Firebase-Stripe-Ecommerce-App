import { CheckItemContainer, ImageContainer, Image, ItemCell, ArrowDiv, ValueSpan, RemoveButtonDiv, QuantityItemCell } from './checkout-item.styles.jsx'
import { setCartItems } from '../../store/cart/cart.action.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector.js'

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const deleteItemFromCartHandler = () => dispatch(setCartItems(cartItems, cartItem, 'delete'))
    const addItemToCartHandler = () => dispatch(setCartItems(cartItems, cartItem, 'add'))
    const subtractItemFromCartHandler = () => dispatch(setCartItems(cartItems, cartItem, 'subtract'))

    return (
        <CheckItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <ItemCell>{name}</ItemCell>
            <QuantityItemCell>
                <ArrowDiv onClick={subtractItemFromCartHandler}>&#10094;</ArrowDiv>
                <ValueSpan>{quantity}</ValueSpan>
                <ArrowDiv onClick={addItemToCartHandler}>&#10095;</ArrowDiv>
            </QuantityItemCell>
            <ItemCell>{price}</ItemCell>
            <RemoveButtonDiv onClick={deleteItemFromCartHandler}>&#10005;</RemoveButtonDiv>
        </CheckItemContainer>
    )
}   

export default CheckoutItem