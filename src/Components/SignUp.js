import React, { useState } from 'react'
import './CSS/signup.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { NavLink, useNavigate } from "react-router-dom";
import { auth, db } from '../Firebase/Connection';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, set } from 'firebase/database';

function SignUp() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (res) => {
                const user = res.user;
                await updateProfile(user, {
                    displayName: name,
                });
                const uuid = user.uid;
                await set(ref(db, 'users/' + uuid), {
                    id: uuid,
                    name: name,
                    email: email
                })
                navigate('/');
            })
            .catch((err) => {
                alert(err.message);
            });

    }
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
                    <form onSubmit={signUp}>
                        <div className="form-child">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Username" />
                        </div>
                        <div className="form-child">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
                        </div>
                        <div className="form-child">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
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