import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import './CSS/forgotpass.css'
import { NavLink } from 'react-router-dom';
function ForgotPassword() {
    return (
        <div className='forgot-pass-main'><div className="forgot-pass-card">
            <div className="forgot-pass-animation">
                <Player
                    className='animation'
                    autoplay
                    loop
                    src="https://assets4.lottiefiles.com/packages/lf20_mdhnmscc.json"
                />
                <div className="straight-line"></div>
            </div>
            <div className="login-form">
                <div className="heading">
                    Forgot Password
                </div>
                <form >
                    <div className="form-child">
                        <input type="email"  required placeholder="Email" />
                    </div>
                    <input className='submit-btn' type="submit" value="Reset my Password" />
                </form>
                <div className="go-to-login">
                    <span>Back to </span>
                    <NavLink className='color-2' to='/'>Login</NavLink>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ForgotPassword