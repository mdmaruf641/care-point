import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "./../Components/Pages/Login/Firebase/Firebase.init";
import { useState, useEffect } from "react";

initializeAuthentication();

const useFirebase = () => {
  // for handle user
  const [user, setUser] = useState({});
  // for handle name
  const [name, setName] = useState("");
  // for handle email
  const [email, setEmail] = useState("");
  // for handle password
  const [password, setPassword] = useState("");
  // for handle photo
  const [photo, setPhoto] = useState("");
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

  // Email Sign in
  const signInUsingEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // handle Sign Up
  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        handleNameAndPhoto();
        setUser(result.user);
        // for set user name and photo after sign up

        alert("You are successfully signed up");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // handle user name and profile photo
  const handleNameAndPhoto = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
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

  // name Handle
  const nameHandle = (e) => {
    setName(e?.target.value);
  };
  // email Handle
  const emailHandle = (e) => {
    setEmail(e?.target.value);
  };
  // password Handle
  const passwordHandle = (e) => {
    setPassword(e?.target.value);
  };
  // Profile photo Handle
  const photoHandle = (e) => {
    setPhoto(e?.target.value);
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
    handleRegister,
    nameHandle,
    photoHandle,
  };
};

export default useFirebase;
