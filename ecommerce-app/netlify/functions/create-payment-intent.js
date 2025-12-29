import dotenv from 'dotenv'
import Stripe from 'stripe'

dotenv.config()

const stripe = new Stripe(import.meta.STRIPE_SECRET_KEY);
