import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../Firebase/FirebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { loginUser, signUpUser, logoutUser } from '../Firebase/authService'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      const displayName =
        firebaseUser.displayName ||
        firebaseUser.email.split('@')[0].replace(/\./g, ' ');
      setUser({ ...firebaseUser, displayName });
    } else {
      setUser(null);
    }
    setLoading(false);
  });
  return () => unsubscribe();
}, []);

const register = async (email, password, name) => {
  const newUser = await signUpUser(email, password, name);
  const displayName =
    newUser.displayName ||
    newUser.email.split('@')[0].replace(/\./g, ' ');
  setUser({ ...newUser, displayName });
  return newUser;
};

const login = async (email, password) => {
  const loggedinUser = await loginUser(email, password);
  const displayName =
    loggedinUser.displayName ||
    loggedinUser.email.split('@')[0].replace(/\./g, ' ');
  setUser({ ...loggedinUser, displayName });
  return loggedinUser;
};

  const logout = async () => {
    await logoutUser()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)