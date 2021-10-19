import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "./../Components/Pages/Login/Firebase/Firebase.init";
import { useState, useEffect } from "react";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  // google sign in handle
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInUsingGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unSubscribe;
  }, []);

  // for log out implement
  const logOut = () => {
    signOut(auth).then(() => {});
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
