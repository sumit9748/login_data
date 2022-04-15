import React, { useState } from 'react'
import "./login.css"
import RegisterComponent from '../../components/register_component/RegisterComponent';
import LoginComponent from '../../components/login_component/LoginComponent';

const Login = () => {
    const [toggle, setToggle] = useState(false);
    function toggleHandler() {
        setToggle(prev => !prev);
    }
    return (
        <div className='login'>
            <div className="loginTop">
                <div className="loginTopLeft">
                    <h1 className="title">ATools.</h1>
                </div>
                <div className="loginTopRight">
                    <button className="loginTopRightButton1">Start Free Trial</button>
                    <button className="loginTopRightButton">Login</button>
                </div>
            </div>
            <div className="loginBottom">
                <div className="loginBottomLeft">
                    {toggle ? (
                        <RegisterComponent toggleHandler={toggleHandler} />
                    ) : (
                        <LoginComponent toggleHandler={toggleHandler} />
                    )}
                </div>


                <div className="loginBottomRight">
                    <img src="https://img.freepik.com/free-vector/man-sitting-desk-unlocking-computer-computer-settings-login-flat-illustration_74855-20645.jpg?t=st=1650039985~exp=1650040585~hmac=dee7d6093a734f96c0ce1c74bc7f60c07338b1d29aaebe3c829ab5ffe58a16ab&w=826" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login