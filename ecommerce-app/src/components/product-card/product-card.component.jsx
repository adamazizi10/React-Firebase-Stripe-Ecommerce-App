import { ProductCardContainerDiv, FooterDiv, FooterNameSpan, FooterPriceSpan} from './product-card.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { setCartItems } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;

    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const addProductToCart = () => dispatch(setCartItems(cartItems, product, 'add'))
    return (
        <ProductCardContainerDiv>
            <img src={imageUrl} alt={`${name}`} />
            <FooterDiv>
                <FooterNameSpan>{name}</FooterNameSpan>
                <FooterPriceSpan>{price}</FooterPriceSpan>
            </FooterDiv>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add To Cart</Button>
        </ProductCardContainerDiv>
    )
}

export default ProductCard