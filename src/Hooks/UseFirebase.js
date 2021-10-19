import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import initializeAuthentication from "./../Components/Pages/Login/Firebase/Firebase.init";
import { useState, useEffect } from "react";

initializeAuthentication();

const useFirebase = () => {
  // for handle user
  const [user, setUser] = useState({});

  // for handle loading
  const [isLoading, setIsLoading] = useState(true);

  // google sign in handle
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInUsingGoogle = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .finally(() => setIsLoading(false));
  };

  // user state changed
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, []);

  // for log out implement
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
