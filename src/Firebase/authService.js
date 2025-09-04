import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebaseConfig'

const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword (auth, email, password)
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}



// function for user sign in
const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword (auth, email, password)
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}


export { signUp, signIn}