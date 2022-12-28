import { useState } from "react";

const Login =()=>{
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredEmail,setEnteredEmail]=useState('');
    const [enteredNumber,setEnteredNumber]=useState('');
    const [enteredPassword,setEnteredPassword]=useState('');

    const submitHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredEmail.trim().length === 0){
            // console.log("error")
            return;
        }
        if(+enteredNumber<1){
            return;
        }
        console.log(enteredUsername,enteredEmail,enteredNumber,enteredPassword);
        setEnteredUsername('');
        setEnteredEmail('');
    }
    const usernameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value);
    }
    const emailChangeHandler=(event)=>{
        setEnteredEmail(event.target.value);
    }
    const numberChangeHandler=(event)=>{
        setEnteredNumber(event.target.value);
    }
    const passwordChangeHandler=(event)=>{
        setEnteredPassword(event.target.value);
    }
    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="username">username</label>
            <input id="username" type='text' value={enteredUsername} onChange={usernameChangeHandler}></input>
            <label htmlFor="email">email</label>
            <input id="email" type='email' value={enteredEmail} onChange={emailChangeHandler}></input>
            <label htmlFor="phonenumber">phonenumber</label>
            <input id="number" type='number' value={enteredNumber} onChange={numberChangeHandler}></input>
            <label htmlFor="password">password</label>
            <input id="password" type='password' value={enteredPassword} onChange={passwordChangeHandler}></input>
            <button type='submit'>submit</button>
        </form>
    )
}
export default Login;