import { useState } from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from "./pages/Home"
import Footer from "./components/Footer"
import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Cart from './pages/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMenu from './pages/AddMenu'
import Menu from './pages/Menu'
import Details from './pages/Details'
import Orders from './pages/Orders'
import Beverages from './pages/Beverages'
import Snacks from './pages/Snacks'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/menu/cart/:menuId' element={<Cart />}/>
        <Route path='/admin/additems' element={<AddMenu />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/details/view/:menuId' element={<Details />}/>
        <Route path='/buy/orders' element={<Orders />}/>
        <Route path='/beverages' element={<Beverages />}/>
        <Route path='/snacks' element={<Snacks />}/>
      </Routes>
      <Footer />


      
    </>
  )
}

export default App
