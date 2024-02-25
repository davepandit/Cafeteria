import React, { useContext } from 'react'
import { createContext } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


//create context
const FirebaseContext = createContext(null)

//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBld36Bcc2xZW7w8F9zPWgDBXjALXRZEBw",
    authDomain: "cafeteria-429ae.firebaseapp.com",
    projectId: "cafeteria-429ae",
    storageBucket: "cafeteria-429ae.appspot.com",
    messagingSenderId: "485209565603",
    appId: "1:485209565603:web:211359c4d3a447adb5d216"
  };

//instance 
const app = initializeApp(firebaseConfig)
//custom hook to create a connenction between the component and the state
const useFirebase = ()=>{
    return(
        useContext(FirebaseContext)
    )
}


//context provider wrapper 
export const FirebaseContextProvider = (props) =>{
    return(
        <FirebaseContext.Provider>
            {props.children}


        </FirebaseContext.Provider>
        
    )

}

export {app}
export {useFirebase}
export default FirebaseContextProvider

