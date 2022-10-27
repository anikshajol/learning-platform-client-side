import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateName = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const gitSignIn = () => {
    return signInWithPopup(auth, gitProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (createUser) => {
      console.log(createUser);
      setUser(createUser);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    gitSignIn,
    logOut,
    createUser,
    setUser,
    signIn,
    updateName,
    verifyEmail,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
