import { useState } from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from "./pages/Home"
import Footer from "./components/Footer"
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />


      
    </>
  )
}

export default App
