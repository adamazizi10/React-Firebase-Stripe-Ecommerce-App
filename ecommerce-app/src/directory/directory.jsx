import './directory.scss'
import CategoryItem from '../components/category-item/category-item.jsx'

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => <CategoryItem id={category.id} category={category} />)}
        </div>
    )
}

export default Directory