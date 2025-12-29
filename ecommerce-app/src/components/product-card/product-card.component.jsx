import { ProductCardContainerDiv, FooterDiv, FooterNameSpan, FooterPriceSpan} from './product-card.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { addCartItem } from '../../store/cart/cart.reducer';
import { useDispatch} from 'react-redux';

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;

    const dispatch = useDispatch()
    const addProductToCart = () => dispatch(addCartItem(product))
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