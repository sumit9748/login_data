import React from 'react'
import "./registerComponent.css"
import { useRef } from 'react'
import axios from "axios"
import { publicRequest } from '../../requestMethod'
const RegisterComponent = ({ toggleHandler }) => {
    const email = useRef();
    const password = useRef();
    const username = useRef();
    const submitForm = async (e) => {
        e.preventDefault();
        const data = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value
        }
        try {
            await publicRequest.post("/auth/register", data);
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <form className="loginBottomLeft" onSubmit={submitForm}>
            <div className="registerTitle">
                <h2 className="registerMainTitle">Welcome User</h2>
                <span className="registerSubtitle">Create your Account to deal it again..</span>
            </div>
            <div className="input">
                <input type="text" placeholder="Email" ref={email} />
                <input type="password" placeholder="Password" ref={password} />
                <input type="password" placeholder="username" ref={username} />
            </div>

            <div className="buttonSection">
                <button className="registerButton" type="submit">register</button>
            </div>
            <div className="otherLinks">
                <a href="#" onClick={toggleHandler}>login</a>
            </div>
        </form>
    )
}

export default RegisterComponent