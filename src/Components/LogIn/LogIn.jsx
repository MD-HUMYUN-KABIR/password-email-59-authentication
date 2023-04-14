import React, { useRef, useState } from 'react';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
const auth = getAuth(app);

const LogIn = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const emailRef = useRef()
    /* 
    ---------------
    // handle submit //
    ---------------
    */
    const handleSubmit = (event) => {
        event.preventDefault(); //reload hobe na
        setSuccess('');
        setError('');
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        console.log(email, password)
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('please add at least one uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('at lest 2 number needed');
            return;
        }
        else if (!/(?=.*[!#$%&])/.test(password)) {
            setError('at lest 1 special caharacter !#$%&');
            return;
        }
        else if (password.length < 8) {
            setError('at least 8 characters needed');
            return;
        }

        /*---------------------
        //SignIn
        ----------------------- 
         */
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                // Signed in 
                const loggedUser = result.user;
                console.log(loggedUser);
                if (!loggedUser.emailVerified) {
                    alert('at first verify your email')
                }
                setSuccess('success')
                setError('')
                // ...
            })
            .catch(error => {
                setError(error.message)
            });
    } // handle submit end //

    /*  -----------------------
     // reset password
     ------------------------ */
    const handlePassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert('at first input email')
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('please check your email')
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }  // reset password end
    return (
        <div >
            <h2>log in</h2>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" id="" placeholder='email' required /> <br />
                <input type="password" name="password" id="" placeholder='password' required /> <br />
                <input type="submit" value="submit" placeholder='submit' />
                <p> <small> new to this website ? please <Link to='/register'>register</Link></small></p>
                <p> <small>forget password <button onClick={handlePassword}>get password</button></small></p>
                <p> {error}</p>
                <p>{success}</p>
            </form>
        </div>
    );
};

export default LogIn;