import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from "./firebase"

function Login() {

    const signIn = () => {
        auth.
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt=""/>
                
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
            
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>

        </div>
    )
}

export default Login
