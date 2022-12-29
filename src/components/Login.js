import { useEffect, useState } from "react";

const Login =()=>{
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredEmail,setEnteredEmail]=useState('');
    const [enteredNumber,setEnteredNumber]=useState('');
    const [enteredPassword,setEnteredPassword]=useState('');
    const [enteredUsernameTouched,setEnteredUsernameTouched]=useState(false);

    const enteredUsernameIsVaLID = enteredUsername.trim() !== '';
    const nameInputIsInvalid = !enteredUsernameIsVaLID && enteredUsernameTouched;

    let formIsValid = false;

    //bejaye useeffect hamino bzarim kafiye
    if(enteredUsernameIsVaLID){
        formIsValid = true;
    }
    // if(enteredUsernameIsVaLID,enteredEmailIsVaLID,....){
    //     formIsValid = true;
    // }
   
    // useEffect(()=>{
    //     if(enteredUsernameIsVaLID,enteredEmailIsVaLID,...){
    //         setFormIsValid(true);
    //     }else{
    //         setFormIsValid(false)
    //     }
    // },[enteredUsernameIsVaLID,enteredEmailIsVaLID,...]);

    const submitHandler=(event)=>{
        event.preventDefault();
        setEnteredUsernameTouched(true);
        if(!enteredUsernameIsVaLID){
            return;
        }
        if(+enteredNumber<1){
            return;
        }
        console.log(enteredUsername,enteredEmail,enteredNumber,enteredPassword);
        setEnteredUsername('');
        setEnteredUsernameTouched(false);
        //bra baghie input ha moonde
        setEnteredEmail('');
        setEnteredNumber('');
        setEnteredPassword('');
    }
    const usernameonblurHandler=(event)=>{
        setEnteredUsernameTouched(true);
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
            <input id="username" type='text' value={enteredUsername} onBlur={usernameonblurHandler} onChange={usernameChangeHandler}></input>
            {nameInputIsInvalid && <p style={{color:"red"}}>username must not be empty</p>}
            <label htmlFor="email">email</label>
            <input id="email" type='email' value={enteredEmail} onChange={emailChangeHandler}></input>
            <label htmlFor="phonenumber">phonenumber</label>
            <input id="number" type='number' value={enteredNumber} onChange={numberChangeHandler}></input>
            <label htmlFor="password">password</label>
            <input id="password" type='password' value={enteredPassword} onChange={passwordChangeHandler}></input>
            <button type='submit' disabled={!formIsValid}>submit</button>
        </form>
    )
}
export default Login;