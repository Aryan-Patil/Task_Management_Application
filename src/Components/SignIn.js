import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import './CSS/login.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Connection';

function SignIn(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(async (res) => {
                props.setX(res.user.uid);
                navigate("/dashboard");
            })
            .catch((err) => {
                alert(err.message);
            });
    }
    return (
        <div className='login-main'>
            <div className="login-card">
                <div className="login-animation">
                    <Player
                        className='animation'
                        autoplay
                        loop
                        src="https://assets8.lottiefiles.com/private_files/lf30_m6j5igxb.json"
                    />
                    <div className="straight-line"></div>
                </div>
                <div className="login-form">
                    <div className="heading">
                        Login
                    </div>
                    <form onSubmit={login} >
                        <div className="form-child">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
                        </div>
                        <div className="form-child">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
                        </div>
                        <input className='submit-btn' type="submit" value="Login" />
                    </form>
                    <div className="forgot-pass">
                        <span>Forgot </span>
                        <NavLink className='color-2' to='/forgotpassword'>Password</NavLink>
                        <span>?</span>
                    </div>
                    <div className="dont">
                        <span>Don't have an account yet? </span>
                        <NavLink className='color-2' to='/signup'>SignUp</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn