import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FirebaseContextProvider from './context/Firebase.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <FirebaseContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseContextProvider>
  
)
