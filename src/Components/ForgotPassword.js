import React, { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import './CSS/forgotpass.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Firebase/Connection';

function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const reset = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Reset link send to your email address");
            setEmail('');
            navigate('/');
          })
          .catch((error) => {
            alert(error.message);
            // ..
          });
    }
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
                <form onSubmit={reset}>
                    <div className="form-child">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
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