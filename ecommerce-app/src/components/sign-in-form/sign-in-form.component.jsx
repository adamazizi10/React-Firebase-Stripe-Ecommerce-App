import { useState } from 'react';
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase.utils.js'
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles.jsx'
import { useDispatch } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action.js';

const defaultFormFields = {
    'email': '',
    'password': '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const dispatch = useDispatch()

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const logInWithGooglePopup = () => dispatch(googleSignInStart())

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            dispatch(emailSignInStart(email, password))
            resetFormFields()
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break

                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break

                case 'auth/invalid-credential':
                    alert('Invalid Credentials entered')
                    break

                default:
                    alert(`error: ${error}. Error Code: ${error.code}`)
            }
            console.log('error signing in: ', error)
        }

    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" onChange={handleChange} type="email" name="email" value={email} required />
                <FormInput label="Password" onChange={handleChange} type="password" name="password" value={password} required />
                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={logInWithGooglePopup}>Google Sign In</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;