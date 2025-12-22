import Home from "./routes/home/home.route.jsx";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.route.jsx";
import Authentication from "./routes/authentication/authentication.route.jsx";
import Shop from "./routes/shop/shop.route.jsx";
import Checkout from "./routes/checkout/checkout.route.jsx";
import { useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase.utils.js";
import { setCurrentUser } from "./store/user/user.action.js";
import { useDispatch } from "react-redux";

const App = () => {

    const dispatch = useDispatch()

      useEffect(() => {
          const unsubscribe = onAuthStateChangedListener((user) => {
              if (user) {
                  createUserDocumentFromAuth(user)
              }
              console.log(user)
              dispatch(setCurrentUser(user))
          })
  
          return unsubscribe
      }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />}/>
        <Route path='checkout' element={<Checkout />}/>
      </Route>
    </Routes>
  )
}

export default App
