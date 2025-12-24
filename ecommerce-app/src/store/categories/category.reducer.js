import { CATEGORIES_ACTION_TYPES } from './category.types'

const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null
}

export const categoriesReducer = (prevState = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIE_START:
            return { ...prevState, isLoading: true }

        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIE_SUCCESS:
            return { ...prevState, categories: payload, isLoading: false}

        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIE_FAILED:
            return { ...prevState, error: payload, isLoading: false }

        default:
            return prevState
    }
}