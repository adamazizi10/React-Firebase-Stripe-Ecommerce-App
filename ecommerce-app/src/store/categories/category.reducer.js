import { CATEGORIES_ACTION_TYPES } from './category.types'

const CATEGORIES_INITIAL_STATE = {
    categories: []
}

export const categoriesReducer = (prevState = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {
                ...prevState,
                categories: payload
            }
        default:
            return prevState
    }
}