import { createSelector } from "reselect"

const selectCategoryReducer = (state) => state.categories

export const selectCategories = createSelector([selectCategoryReducer], (categorySlice) => categorySlice.categories)

export const selectCategoriesMap = createSelector([selectCategories], (categoriesMap) => 
    categoriesMap.reduce((acc, category) => {
        const { title, items } = category
        acc[title.toLowerCase()] = items
        return acc
    }, {})
)