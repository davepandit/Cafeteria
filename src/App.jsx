import { useState } from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from "./pages/Home"
import Footer from "./components/Footer"
import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Cart from './pages/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer />


      
    </>
  )
}

export default App
