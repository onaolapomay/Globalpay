import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from './FirebaseConfig'

// Sign Up function
const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    throw error
  }
}

// Login function
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    throw error
  }
}

const handleLogout = async () => {
  try{
    await signOut(auth)
    alert("User signed out successfully")
  } catch (error) {
    alert("Error signing out")
  }
}

export { signUp, login, handleLogout }