import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../Firebase/FirebaseConfig'

const signUpUser = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  return userCredential.user
}

const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  return userCredential.user
}

const logoutUser = async () => {
  await signOut(auth)
}

export { signUpUser, loginUser, logoutUser }