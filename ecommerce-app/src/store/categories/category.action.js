import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPES } from "./category.types"

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIE_START)

export const fetchCategoriesSuccess = (categoryArray) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIE_SUCCESS, categoryArray)

export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIE_FAILED, error)
