import { createContext, useEffect, useState } from "react";
import { app } from "../../../Firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const Authorization = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);

  // Google login
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  // GitHub login
  const gitHubProvider = new GithubAuthProvider();
  const gitHubSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  // Register new user
  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
//user profile update
const UpdateUserProfile=(updateData)=>{
  return updateProfile(auth.currentUser,updateData)
}
  // Sign out
  const userSignOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  // Track auth state
  useEffect(() => {
    const unSubscribeUser = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser); 
      setLoader(false);
    });
    return () => unSubscribeUser();
  }, [auth]);

  const authInfo = {
    userSignOut,
    setUsers,
    users,
    GoogleLogin,
    registerUser,
    gitHubSignIn,
    loader,
    UpdateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authorization;
