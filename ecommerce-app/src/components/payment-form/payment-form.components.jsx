import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import Button from '../button/button.component'
import { PaymentFormContainer, FormContainer } from './payment-form.styles'

export const PaymentForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    const paymentHandler = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) return


    }


    return (
        <PaymentFormContainer onSubmit={paymentHandler}>
            <h2>Card Payment: </h2>
            <FormContainer>
                <CardElement />
                <Button>Pay Now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm