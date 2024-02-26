import React, { useContext } from 'react'
import { createContext } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup ,  onAuthStateChanged} from "firebase/auth";
import { useState , useEffect } from 'react';
import { getFirestore , getDocs} from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { getStorage , ref , uploadBytes , getDownloadURL} from "firebase/storage";
import { doc, getDoc , query, where } from "firebase/firestore";


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


//authentication using email
const auth = getAuth(app)


//authorization using google
const provider = new GoogleAuthProvider()

//database 
const db = getFirestore(app)

//storage
const storage = getStorage(app)

//custom hook to create a connenction between the component and the state
const useFirebase = ()=>{
    return(
        useContext(FirebaseContext)
    )
}


//context provider wrapper 
export const FirebaseContextProvider = (props) =>{
    const [user , setUser] = useState(null)

    useEffect(()=>{
        onAuthStateChanged(auth , (user)=>{
            if(user) setUser(user)
            else setUser(null)

        })
    },[])

    //sign up with email and password
    const signupWithEmailAndPassword = (email , password)=>{
        createUserWithEmailAndPassword(auth , email , password)
    }
    //sign in with email and password
    const signinWithEmailAndPassword = (email , password)=>{
        signInWithEmailAndPassword(auth , email , password)
    }

    //sign in with popup
    const signinWithGoogle = ()=>{
        signInWithPopup(auth , provider)
    }

    //check whether user is signed in or not
    const isLoggedIn = user ? true : false

    //a global array
    let array = []

    //add menu to the database
    const addMenus = async(itemName , description , price , category , coverPic)=>{
        const imageRef = ref (storage ,`uploads/images/${Date.now()}-${coverPic.name}`)
        const uploadResult = await uploadBytes(imageRef , coverPic)
        await addDoc(collection(db , "menus") , {
            itemName:itemName,
            description:description,
            price:price,
            imageURL: uploadResult.ref.fullPath,
            userId:user.uid,
            userEmail:user.email,
            displayName:user.displayName,
            photoUrl:user.photoURL,
            category:category,


        })

    }

    //list all the menus
    const listAllMenus = ()=>{
        return getDocs(collection(db , "menus"))
    }
    //get image url
    const getImage = (path)=>{
        return getDownloadURL(ref(storage , path))

    }

    //return the details of the menu proceesed for buying 
    const getMenuById = async(id)=>{
        const docRef = doc(db , "menus" , id)
        const result = await getDoc(docRef) 
        return result
    }

    //function to place order
    const placeOrder = async(menuId)=>{
        const collectionRef = collection(db , "menus" , menuId , "orders")
        const result = await addDoc(collectionRef , {
            userID: user.uid,
            userEmail:user.email,
            displayName:user.displayName,
            photoURL:user.photoURL,
        })
        return result
    }

    

    //for beverages dropdown
    const beverages = async()=>{
        const q = query(collection(db, "menus"), where("category", "==", "bev"));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
    }
    
    //for snacks dropdown 
    const snacks = async()=>{
        const q = query(collection(db, "menus"), where("category", "==", "sna"));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
    }


    return(
        <FirebaseContext.Provider value={{signupWithEmailAndPassword ,  signinWithEmailAndPassword , signinWithGoogle , isLoggedIn , addMenus , listAllMenus , getImage , getMenuById , placeOrder ,  array , beverages , snacks }}>
            {props.children}


        </FirebaseContext.Provider>
        
    )

}

export {app}
export {useFirebase}
export default FirebaseContextProvider

