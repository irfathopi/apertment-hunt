import React, { useContext, useState } from 'react';
import './Login.css';
import facebook from '../Images/Icon/fb.png';
import google from '../Images/Icon/google.png';
import HeaderTwo from '../HeaderTwo/HeaderTwo';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [newUser, setNewUser] = useState(false);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        firstName: '',
        photo: '',
        error: '',
        success: false
    })
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    // Add firebase here 
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
       

        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            // setLoggedInUser(result.user);
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email };
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
            console.log(user); //see user info
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    //Handle FB Sign In
    const handleFBLogin = () => {
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    ///From submit handlaer
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) { // create new user here
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(response => {
                    const newUserInfo = { ...user }; //do empty error message
                    newUserInfo.success = true; //show success message
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                })
                .catch(function (error) {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false; //hide success message
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) { //sign in with existing email and password
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(response => {
                    const newUserInfo = { ...user }; //do empty error message
                    newUserInfo.success = true; //show success message
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                })
                .catch(function (error) {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false; //hide success message
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    const handleBlur = (e) => {
        let isFieldValid = true;

        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);

        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 5;
            const isPasswordHaveNumber = /\d{1}/.test(e.target.value);
            isFieldValid = (isPasswordValid && isPasswordHaveNumber);
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value; //add new info in state
            setUser(newUserInfo);
        }
    }

    return (
        <div className="container">
            <HeaderTwo></HeaderTwo>

            { !newUser && <div className="loginPanel">
                <h4 className="loginTitle">Login</h4>
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleBlur} className="userName"
                        placeholder="Username or Email" type="text" name="email" id="" /> <br />
                    <input onBlur={handleBlur} className="userName"
                        placeholder="Password" type="password" name="password" id="" /> <br />

                    <div className="footerFrom">
                        <div className="footerFromLeft">
                            <input className="checkbox" type="checkbox" name="rememberMe" id="" />
                            <label className="rememberMe" htmlFor="rememberMe">Remember me</label>
                        </div>
                        <div className="footerFromRight">
                            <p className="forgotPass"> <a href="">Forgot Password</a></p>
                        </div>
                    </div>
                    <input className="bookingBtn" type="submit" value="Login" />
                    <p className="rememberMe footerText">Don’t have an account?
                        <a onClick={() => setNewUser(!newUser)} href="#" className="forgotPass" name="newUser">
                            Create an account </a></p>
                </form>
            </div>}

            {/* ===========Create Accaount========== */}
            {newUser && <div className="loginPanel loginPanelTwo">

                <h4 className="loginTitle">Login</h4>
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleBlur} className="userName userNameTwo"
                        placeholder="First Name" type="text" name="firstName" id="" required /> <br />
                    <input onBlur={handleBlur} className="userName userNameTwo"
                        placeholder="Last Name" type="text" name="lastName" id="" required /> <br />
                    <input onBlur={handleBlur} className="userName userNameTwo"
                        placeholder="Username or Email" type="text" name="email" id="" required /> <br />
                    <input onBlur={handleBlur} className="userName userNameTwo"
                        placeholder="Password" type="password" name="password" id="" required /> <br />
                    <input className="userName userNameTwo"
                        placeholder="Confirm Password" type="password" name="confirmPassword" id="" required /> <br />

                    <input className="bookingBtn" type="submit" value="Create an account" />
                    <p className="rememberMe footerText">Already have an account?
                        <a href="/contacts" className="forgotPass">  Login  </a></p>
                </form>
            </div>}

            <h1 className="StateLine"><span className="stateLine">Or</span></h1>
            <div className="google" onClick ={handleFBLogin}>
                <img src={facebook} alt="" />
                <span>Continue with Facebook</span>
            </div>

            <div className="google" onClick={handleGoogleSignIn}>
                <img src={google} alt="" />
                <span>Continue with Google</span>
            </div>

            <p className="responseMessage" style={{ color: 'red' }}>{user.error}</p>
            {user.success && <p className="responseMessage" style={{ color: 'green' }}>
                User {newUser ? 'Create' : 'Logged In'} Successfully</p>}
        </div>
    );
};

export default Login;