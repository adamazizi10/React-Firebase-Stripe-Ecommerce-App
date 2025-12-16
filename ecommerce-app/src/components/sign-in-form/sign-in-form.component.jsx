import { useState } from 'react';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase.utils.js'
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss'

const defaultFormFields = {
    'email': '',
    'password': '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const logInWithGooglePopup = async () => await signInWithGooglePopup()

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            await signInAuthUserWithEmailAndPassword(email, password)
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
        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" onChange={handleChange} type="email" name="email" value={email} required />
                <FormInput label="Password" onChange={handleChange} type="password" name="password" value={password} required />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={logInWithGooglePopup}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;