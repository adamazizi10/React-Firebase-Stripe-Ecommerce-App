import { useState, useEffect } from "react"
import { UserContext } from "./user.context"
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../../utils/firebase.utils'

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
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
