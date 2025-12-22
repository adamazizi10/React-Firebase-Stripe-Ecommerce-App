import { useReducer, useEffect } from "react"
import { UserContext } from "./user.context"
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../../utils/firebase.utils'
import { createAction } from "../../utils/reducer/reducer.utils"

const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = { currentUser: null }

const userReducer = (prevState, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...prevState,
                currentUser: payload
            }
        default:
            throw new Error(`Type ${type} not found`)
    }
}



export const UserProvider = ({ children }) => {
    const [currentState, dispatch] = useReducer(userReducer, INITIAL_STATE)
    const { currentUser } = currentState

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    }

    const value = { currentUser, setCurrentUser }


    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            console.log(user)
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
