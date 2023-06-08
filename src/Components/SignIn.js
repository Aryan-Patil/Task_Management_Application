import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import './CSS/login.css';
import { Player } from '@lottiefiles/react-lottie-player';

function SignIn(props) {
    const navigate = useNavigate();
    let name = "apple";
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
                    <form >
                        <div className="form-child">
                            <input type="email" required placeholder="Email" />
                        </div>
                        <div className="form-child">
                            <input type="password" required placeholder="Password" />
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
            {/* <button
                onClick={() => {
                    props.setX(name);
                    navigate('/dashboard');
                }}>
                Submit
            </button> */}
        </div>
    )
}

export default SignIn