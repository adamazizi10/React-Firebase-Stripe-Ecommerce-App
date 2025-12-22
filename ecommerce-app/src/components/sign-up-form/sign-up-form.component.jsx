import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils'
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { SignUpContainer } from './sign-up-form.styles'

const defaultFormFields = {
    'displayName': '',
    'email': '',
    'password': '',
    'confirmPassword': ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password != confirmPassword) {
            alert('Passwords do not match')
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)

            await createUserDocumentFromAuth(user, { displayName })

            resetFormFields()

        } catch (error) {
            switch(error.code) {
                case 'auth/email-already-in-use':
                    alert('Cannot create user, email already in use');
                    break

                default:
                    alert(`User Creation Failed: ${error}. Error Code: ${error.code}`)
            }
            console.log('error signing in: ', error)
        }

    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <SignUpContainer>
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" onChange={handleChange} type="text" name="displayName" value={displayName} required />
                <FormInput label="Email" onChange={handleChange} type="email" name="email" value={email} required />
                <FormInput label="Password" onChange={handleChange} type="password" name="password" value={password} required />
                <FormInput label="Confirm Password" onChange={handleChange} type="password" name="confirmPassword" value={confirmPassword} required />
                <Button type='submit'>Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;