import { ProductCardContainerDiv, FooterDiv, FooterNameSpan, FooterPriceSpan} from './product-card.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart/cart.context';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)
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