import React, { useState, useEffect } from "react";
import app from '../../base'
 
import AdminLogin from "./AdminLogin";
import Hero from './Hero'

export const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hashAccount, setHashAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword(" ");
  };

  const clearErrors = () => {
    setEmailError(" ");
    setPasswordError(" ");
  };

  const handleLogin = () => {
    clearErrors();

    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    app.auth().signOut();
  };

  const authListener = () => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
         <Hero handleLogout={handleLogout} />
        </>
      ) : (
        <>
          <AdminLogin
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hashAccount={hashAccount}
            setHashAccount={setHashAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        </>
      )}
    </div>
  );
}

export default Login;
