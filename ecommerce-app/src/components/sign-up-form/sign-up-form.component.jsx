import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../assets/utils/firebase.utils';

import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
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

            // resetFormFields()

        } catch (error) {
            console.log('User Creation failed: ', error)
        }

    }
    console.log(formFields)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" onChange={handleChange} type="text" name="displayName" value={displayName} required />
                <FormInput label="Email" onChange={handleChange} type="email" name="email" value={email} required />
                <FormInput label="Password" onChange={handleChange} type="password" name="password" value={password} required />
                <FormInput label="Confirm Password" onChange={handleChange} type="password" name="confirmPassword" value={confirmPassword} required />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;