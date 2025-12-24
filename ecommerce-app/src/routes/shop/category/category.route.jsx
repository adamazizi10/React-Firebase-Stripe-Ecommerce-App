import { CategoryContainer, CategoryTitle } from './category.styles.jsx'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../../components/product-card/product-card.component'
import { useSelector } from 'react-redux'
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../../store/categories/category.selector.js'
import Spinner from '../../../components/spinner/spinner.components.jsx'


const Category = () => {

    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    const { category } = useParams()

    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? <Spinner /> :
                    <CategoryContainer>
                        {
                            products && products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }
                    </CategoryContainer>
            }
        </>

    )
}

export default Category