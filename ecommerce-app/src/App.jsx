import Home from "./routes/home/home.route.jsx";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.route.jsx";
import Authentication from "./routes/authentication/authentication.route.jsx";
import Shop from "./routes/shop/shop.route.jsx";
import Checkout from "./routes/checkout/checkout.route.jsx";

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />}/>
        <Route path='checkout' element={<Checkout />}/>
      </Route>
    </Routes>
  )
}

export default App
