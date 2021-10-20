import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import initializeAuthentication from "./../Components/Pages/Login/Firebase/Firebase.init";
import { useState, useEffect } from "react";

initializeAuthentication();

const useFirebase = () => {
  // for handle user
  const [user, setUser] = useState({});
  // for handle email
  const [email, setEmail] = useState("");
  // for handle password
  const [password, setPassword] = useState("");
  // for handle error
  const [error, setError] = useState("");

  // for handle loading
  const [isLoading, setIsLoading] = useState(true);

  // google sign in handle
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  // google sign in
  const signInUsingGoogle = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // google sign in
  const signInUsingEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
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

  // email Handle
  const emailHandle = (e) => {
    setEmail(e?.target.value);
  };
  // password Handle
  const passwordHandle = (e) => {
    setPassword(e?.target.value);
  };

  return {
    user,
    error,
    isLoading,
    signInUsingGoogle,
    signInUsingEmail,
    logOut,
    emailHandle,
    passwordHandle,
  };
};

export default useFirebase;
