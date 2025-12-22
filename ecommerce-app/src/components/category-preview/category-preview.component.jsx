import {CategoryPreviewContainer, Preview, LinkTitle} from './category-preview.styles'
import ProductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                    <LinkTitle to={`${title.toLowerCase()}`}>{title.toUpperCase()}</LinkTitle>
            </h2>
            <Preview>
                {
                    products.map((product, idx) => idx <= 3 ? <ProductCard key={product.id} product={product} /> : '')
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview