import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "./../Components/Pages/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  // google sign in handle
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInUsingGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result.user);
    });
  };

  return {
    signInUsingGoogle,
  };
};

export default useFirebase;
