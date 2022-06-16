import { TextField } from '@material-ui/core'
import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'


export default function () {
    return (
        <div className='register'>
            <span className='registerPageHeading'> Register </span>

            <form className='registerpageInfo'>

            <label  > Username: </label>
                <TextField className='registerPageText' typeof='text' placeholder=' Enter your Username...'> </TextField>
                <label  > Email: </label>
                <TextField className='registerPageText' typeof='text' placeholder=' Enter your Email...'> </TextField>
                <label > Password: </label>
                <TextField className='registerPageText' typeof='password' placeholder=' Enter your Password...'> </TextField>

                <button className='registerbutton'>  Register</button>

            </form>
            <button className='registerLoginbutton'>
            <Link className='link' to='/login'>Login</Link>
</button>

        </div>
    )
}
