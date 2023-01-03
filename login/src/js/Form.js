import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {FaBolt as Bolt, FaRegTimesCircle as Wrong, FaCheck as Check, FaCircle as Circle} from 'react-icons/fa';

function MainForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validUser, setValidUser] = useState(false);
    const [validPass, setValidPass] = useState(false);
    const [allValid, setAllValid] = useState(false);
    const [correctLenth, setCorrectLength] = useState(false);
    const [correctUpper, setCorrectUpper] = useState(false);
    const [correctSpecial, setCorrectSpecial] = useState(false);
 
    const speacialChars = /['!@#$%&*-_+?,.~']/
    const hasUpper = p => { return /[A-Z]/.test(p); };
    const hasSpecial = p => {return speacialChars.test(p)}
    const hasLength = p => { return p.length >= 8 };
    const passwordCheck = [hasLength(password), hasSpecial(password), hasUpper(password)];
    const allPass = passwordCheck.every((e) => { return e === true });

    const navigate = useNavigate();

    const PassIcons = (x) => { 
        return x ? <Check id="check" style={{color: "lightgreen"}}/> : <Wrong id="wrong" style={{color: "red"}}/>
    }

    const formStyles = (input, val) => {
        if (input.length == 0){
            return {borderColor: '#f1f1f4'}
        } else {
            if(val) {
                return {borderColor: 'lightgreen'}
            } else {
                return {borderColor: 'lightpink'}
            }
        }
    }

    useEffect(() => {
        hasLength(username) ? setValidUser(true) : setValidUser(false);
        allPass ? setValidPass(true) : setValidPass(false);
        validUser && validPass ? setAllValid(true) : setAllValid(false);
    }, [username, password, allValid, allPass, validPass, validUser]);

    useEffect(() => {
        passwordCheck[0] ? setCorrectLength(true) : setCorrectLength(false);
        passwordCheck[1] ? setCorrectSpecial(true) : setCorrectSpecial(false);
        passwordCheck[2] ? setCorrectUpper(true) : setCorrectUpper(false);
    });

    return (
        <div className="cont">
            <div className="blur"></div>
            <form action="">
                <div className="form__container" id="form__header">
                    <div className="logo"><Bolt id="bolt"/></div>
                    <h1>Welcome Back</h1>
                    <p>Welcome back! Please enter your details below</p>
                </div>
                <hr />
                <div className="form__container inputs" id="form__username">
                    <label htmlFor="" id="username__label">Username*</label>
                    <input
                        type="text"
                        className='user-input'
                        placeholder="Min 8 characters"
                        onChange={(e) => { setUsername(e.target.value) }}
                        style={formStyles(username, validUser)} />
                </div>
                <div className="form__container inputs" id="form__password">
                    <label htmlFor="" className='password__child' id="password__label">Password*</label>
                    <input
                        type="password"
                        className='password__child'
                        placeholder="Min 8 characters, 1 uppercase, 1 special"
                        onChange={(e) => { setPassword(e.target.value) }}
                        style={formStyles(password, validPass)} />
                        <ul className='password__child' id="form__requires">
                            <li><span>{PassIcons(correctLenth)}</span>8 charaters</li>
                            <li><span> {PassIcons(correctUpper)}</span>1 uppercase</li>
                            <li><span>{PassIcons(correctSpecial)}</span>1 special</li>
                        </ul>
                </div>
                <div className="form__container checks" id="password-options">
                    <div id="checks-wrapper">
                        <span id="checkbox-row"><input type="checkbox" id="checkbox" />Remember me</span>
                        <a href="#" id="forget">Forgot Password</a>
                    </div>
                    <button class='login-btn' id="password-btn" onClick={() => { allValid ? navigate('/Accept') : alert("Missing stuff") }}>Login</button>
                </div>
            </form>
        </div>
    );
};

export default MainForm