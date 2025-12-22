import { useContext } from "react"
import { CartContext } from "../../contexts/cart/cart.context"
import { Outlet, Link } from "react-router-dom"
import CrwnLogo from '../../assets/crown.svg?react'
import { signOutUser } from '../../utils/firebase.utils'
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles'
import { useSelector } from 'react-redux'
import { SelectCurrentUser } from "../../store/user/user.selector"

const Navigation = () => {

    const { isCartOpen } = useContext(CartContext)
    
    const currentUser = useSelector(SelectCurrentUser)
    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    ) : (

                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation