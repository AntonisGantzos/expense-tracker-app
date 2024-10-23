import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import {auth, provider} from '../../config/firebase-config'
function Authentication() {
  const signInWithGoogle = async () => {
     await signInWithPopup(auth, provider)
  }
  return (
    <div className='login-page'>
      <p>Sign in with google to continue</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}></button>
    </div>
  )
}

export default Authentication