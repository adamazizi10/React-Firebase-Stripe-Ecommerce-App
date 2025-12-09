import Home from "./routes/home/home.route.jsx";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.routes.jsx";
import SignIn from "./routes/sign-in/sign-in.route.jsx";

const Shop = () => {
  return <div>I am shop</div>
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />}/>
      </Route>
    </Routes>
  )
}

export default App
