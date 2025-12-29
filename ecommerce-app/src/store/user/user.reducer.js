import { createSlice } from "@reduxjs/toolkit"


const USER_INITIAL_STATE = { currentUser: null }


export const userSlice = createSlice({
    name: 'user',
    initialState: USER_INITIAL_STATE,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload
        }
    }
})

export const { setCurrentUser } = userSlice.actions

export const userReducer = userSlice.reducer




// import { USER_ACTION_TYPES } from "./user.types";

// export const userReducer = (prevState = USER_INITIAL_STATE, action) => {
//     const { type, payload } = action;

//     switch (type) {
//         case USER_ACTION_TYPES.SET_CURRENT_USER:
//             return {
//                 ...prevState,
//                 currentUser: payload
//             }
//         default:
//             return prevState
//     }
// }