import { CheckItemContainer, ImageContainer, Image, ItemCell, ArrowDiv, ValueSpan, RemoveButtonDiv, QuantityItemCell } from './checkout-item.styles.jsx'
import { addCartItem, subtractCartItem, deleteCartItem } from '../../store/cart/cart.reducer'
import { useDispatch } from 'react-redux'

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem

    const dispatch = useDispatch()
    const deleteItemFromCartHandler = () => dispatch(deleteCartItem(cartItem))
    const addItemToCartHandler = () => dispatch(addCartItem(cartItem))
    const subtractItemFromCartHandler = () => dispatch(subtractCartItem(cartItem))

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