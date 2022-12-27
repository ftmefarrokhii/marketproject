import { useState } from "react";

const Login =()=>{
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredEmail,setEnteredEmail]=useState('');
    const [enteredNumber,setEnteredNumber]=useState('');
    const [enteredPassword,setEnteredPassword]=useState('');

    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(enteredUsername,enteredEmail,enteredNumber,enteredPassword)
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
            <label>username</label>
            <input type='text' onChange={usernameChangeHandler}></input>
            <label>email</label>
            <input type='email' onChange={emailChangeHandler}></input>
            <label>phonenumber</label>
            <input type='number' onChange={numberChangeHandler}></input>
            <label>password</label>
            <input type='password' onChange={passwordChangeHandler}></input>
            <button type='submit'>submit</button>
        </form>
    )
}
export default Login;