import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = { 
    currentUser: null,
    isLoading: false,
    error: null
 }

export const userReducer = (prevState = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...prevState,
                currentUser: payload
            }
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {
                ...prevState,
                currentUser: null
            }
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
            return {
                ...prevState,
                error: payload
            }
        default:
            return prevState
    }
}