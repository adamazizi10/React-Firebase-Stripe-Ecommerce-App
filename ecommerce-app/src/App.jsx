import Home from "./routes/home/home.route.jsx";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.routes.jsx";
import Authentication from "./routes/authentication/authentication.route.jsx";

const Shop = () => {
  return <div>I am shop</div>
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />}/>
      </Route>
    </Routes>
  )
}

export default App
