import { CheckItemContainer, ImageContainer, Image, ItemCell, ArrowDiv, ValueSpan, RemoveButtonDiv, QuantityItemCell } from './checkout-item.styles.jsx'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart/cart.context'

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem

    const { addItemToCart, subtractItemFromCart, deleteItemFromCart } = useContext(CartContext)
    
    const deleteItemFromCartHandler = () => deleteItemFromCart(cartItem)
    const addItemToCartHandler = () => addItemToCart(cartItem)
    const subtractItemFromCartHandler = () => subtractItemFromCart(cartItem)

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