import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile 
} from 'firebase/auth'
import { auth } from '../Firebase/FirebaseConfig'

const signUpUser = async (email, password, name) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  const user = userCredential.user

  // Update display name
  await updateProfile(user, { displayName: name })

  // Force refresh to get updated name
  await user.reload()

  // Return updated current user
  return auth.currentUser
}

const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  return userCredential.user
}

const logoutUser = async () => {
  await signOut(auth)
}

export { signUpUser, loginUser, logoutUser }