import React from 'react'
import { useNavigate } from 'react-router-dom';

function SignIn(props) {
    const navigate = useNavigate();
    let name = "apple";
    return (
        <div>
            
            <button
                onClick={() => {
                    props.setX(name);
                    navigate('/dashboard');
                }}>
                Submit
            </button>
        </div>
    )
}

export default SignIn