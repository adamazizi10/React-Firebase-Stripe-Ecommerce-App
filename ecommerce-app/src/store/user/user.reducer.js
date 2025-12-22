import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = { currentUser: null }

export const userReducer = (prevState = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...prevState,
                currentUser: payload
            }
        default:
            return prevState
    }
}