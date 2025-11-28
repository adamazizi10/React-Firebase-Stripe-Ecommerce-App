import './category-item.scss'

const CategoryItem = ({category}) => {
    const { title, imgUrl } = category;
    return (
        <div className="category-container">
            <img className='' src={imgUrl} />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem;