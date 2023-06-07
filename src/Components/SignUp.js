import React from 'react'
import './CSS/signup.css';
import { Player } from '@lottiefiles/react-lottie-player';
import {NavLink} from "react-router-dom";

function SignUp() {
  return (
    <div className='SignUp'>
        <div className="signup-card">
            <div className="signup-animation">
            <Player
              className='animation'
              autoplay
              loop
              src="https://assets5.lottiefiles.com/packages/lf20_UW8DlCRljO.json"
            />
            <div className="straight-line"></div>
            </div>
            <div className="signup-form">
                <div className="heading">
                    SignUp
                </div>
                <form >
                <div className="form-child">
                        <input type="text" required  placeholder="Name"/>
                    </div>
                    <div className="form-child">
                        <input type="email" required placeholder="Email"/>
                    </div>
                    <div className="form-child">
                        <input type="password" required placeholder="Password"/>
                    </div>
                    <input className='submit-btn' type="submit" value="SignUp" />
                </form>
                <div className="already">
                    <span>Already SignUp? </span>
                    <NavLink className='login' to='/'>Login</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp