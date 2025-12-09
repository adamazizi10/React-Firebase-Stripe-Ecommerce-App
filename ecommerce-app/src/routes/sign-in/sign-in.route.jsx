import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../assets/utils/firebase.utils";

const signIn = () => {
    const logInWithGooglePopup = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)

    }
    return (
        <div>
            <h1>This is the sign in page</h1>
            <button onClick={logInWithGooglePopup}>Sign in with google popup</button>
        </div>
    )
}

export default signIn;