import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { PaymentFormContainer, FormContainer, PaymentButton } from './payment-form.styles'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import { selectTotalPrice } from '../../store/cart/cart.selector'
import { useState } from 'react'

export const PaymentForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    const amount = useSelector(selectTotalPrice)
    const currentUser = useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)

    const paymentHandler = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) return

        setIsProcessingPayment(true)

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        })
        const data = await response.json()

        if (!response.ok) {
            console.log('Function error: ', data)
            return
        }
        console.log(data)

        const { paymentIntent: { client_secret }} = data
        console.log('client secret: ', client_secret)

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                    address: '123 street'
                }
            }
        })

        setIsProcessingPayment(false)

        if (paymentResult.error) {
            alert(paymentResult.error)
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful')
            }
        }
    }

    return (
        <PaymentFormContainer onSubmit={paymentHandler}>
            <h2>Card Payment: </h2>
            <FormContainer>
                <CardElement />
                <PaymentButton buttonType={BUTTON_TYPE_CLASSES.inverted} disabled={isProcessingPayment} isLoading={isProcessingPayment}>Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm