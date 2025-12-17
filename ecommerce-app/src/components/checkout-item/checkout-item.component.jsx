import './checkout-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart/cart.context'

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem

    const { addItemToCart, subtractItemFromCart, deleteItemFromCart } = useContext(CartContext)
    
    const deleteItemFromCartHandler = () => deleteItemFromCart(cartItem)
    const addItemToCartHandler = () => addItemToCart(cartItem)
    const subtractItemFromCartHandler = () => subtractItemFromCart(cartItem)

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={subtractItemFromCartHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemToCartHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={deleteItemFromCartHandler}>&#10005;</div>
        </div>
    )
}   

export default CheckoutItem