import React, { useEffect } from 'react'
import { Checkbox } from 'antd';
import "./loginComponent.css"
import { useRef } from 'react';
import { message } from 'antd';
import { publicRequest } from '../../requestMethod';

const LoginComponent = ({ toggleHandler }) => {
    const [check, setCheck] = React.useState(false)
    const email = useRef();
    const password = useRef();
    const onChangeCheckbox = (e) => {
        setCheck(e.target.checked)
    }


    const handleSubmit = async (e) => {

        e.preventDefault();
        const data = {
            email: email.current.value,
            password: password.current.value
        }
        try {
            const res = await publicRequest.post("/auth/login", data);
            console.log(res.data)
            message
                .loading('Action in progress..', 2.5)
                .then(() => message.success('successfully loggedin', 2.5))

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <form className="loginBottomLeft" onSubmit={handleSubmit}>
            <div className="loginTitle">
                <h2 className="loginMainTitle">Welcome Back</h2>
                <span className="loginSubtitle">Get Exciting Deals</span>
            </div>
            <div className="input">
                <input type="text" placeholder="Email" ref={email} />
                <input type="password" placeholder="Password" ref={password} />
            </div>
            <div className="buttonSection">
                <button className="loginButton" type="submit">Login</button>
            </div>
            <div className="otherLinks">
                <Checkbox
                    onChange={onChangeCheckbox}
                >
                    Remember me
                </Checkbox>
                <a href="#" onClick={toggleHandler}>Create Account</a>
            </div>
        </form>
    )
}

export default LoginComponent