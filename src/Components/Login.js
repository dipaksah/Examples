import React, { Component } from 'react'
import {Container

} from 'reactstrap'



export default class Login extends Component {

    constructor(props) {



        super(props)
        this.state = {
             
        }
    }

    




    render() {

        
        return (
            <div>
            <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
                <div className="container" onClick={this.container} id="container">
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <div className="social-container">
                               
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <div className="social-container">
                               <p>social icons</p>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" onClick={this.signIn} id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" onClick={this.signUp} id="signUp">Sign Up</button>
                            </div>className
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





    //     signUpButton = document.getElementById('signUp');
    // signInButton = document.

    //     signUpButton = document.getElementById('signUp');
    // signInButton = document.getElementById('signIn');
    // container = document.getElementById('container');

    // signUpButton.addEventListener('click', () => {
    //     container.classList.add("right-panel-active");
    // });

    // signInButton.addEventListener('click', () => {
    //     container.classList.remove("right-panel-active");
    // });getElementById('signIn');
    // container = document.getElementById('container');

    // signUpButton.addEventListener('click', () => {
    //     container.classList.add("right-panel-active");
    // });

    // signInButton.addEventListener('click', () => {
    //     container.classList.remove("right-panel-active");
    // });