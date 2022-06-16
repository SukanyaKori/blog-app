import { TextField } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
    return (
        <div className='login'>
                        <span className='loginPageHeading'> Login </span>

            <form className='loginpageInfo'>
                <label  > Email: </label>
                <TextField className='loginPageText' typeof='text' placeholder=' Enter your Email...'> </TextField>
                <label > Password: </label>
                <TextField className='loginPageText' typeof='password' placeholder=' Enter your Password...'> </TextField>

                <button className='loginbutton'> Login</button>

            </form>
            <button className='loginRegisterbutton'> 
            <Link className='link' to='/register'>Register</Link>
            </button>

        </div>
    )
}
