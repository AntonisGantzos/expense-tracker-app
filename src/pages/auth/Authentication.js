import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import {auth, provider} from '../../config/firebase-config'
import { useNavigate } from 'react-router-dom'
import "../../styles/Authentication.css"
function Authentication() {
  const navigate = useNavigate()

  const signInWithGoogle = async () => {
     const results = await signInWithPopup(auth, provider)
     console.log(results)
     //store information relative to the authentication of the user in an object
     const authInfo = {
      userID : results.user.uid,
      name : results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
     }
     //pass this object as a string in localStorage
     localStorage.setItem("auth", JSON.stringify(authInfo))
     navigate("/expense-tracker")
  }
  return (
    <div className='login-page'>
      <p>Sign in with google to continue</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Authentication