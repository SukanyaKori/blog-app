import React from 'react'

import './settings.css'

export default function Settings() {
  return (
   
    <div className='settings'>
    <div className='settingsWrapper'>
    <div className='settingsTitle'>
      <span className='settingsUpdateTitle'>Update your Account</span>
      <span className='settingsDeleteTitle'>Delete your Account</span>
    </div>
    <form className='settingsForm'>
    <label > Profile Picture </label>
    <div className='settingsPP'>

      <img 
      src='bg4.jpg' alt=''></img>
      <label htmlFor='fileInput'>
      <i className='settingsPPIcon fa-solid fa-circle-user'></i>
      </label>

      <input type='file' id='fileInput' style={{display:'none'}}></input>
      </div>
      <label>Username : </label>
      <input type='text' placeholder='(Ex.)  Alia'></input>
      
      <label>Email : </label>
      <input type='Email' placeholder=' (Ex.)  xyz123.gmail.com'></input>

      <label>Password : </label>
      <input type='password'></input>

      <button className='settingsSubmit'>Update</button>

    </form>
    </div>

  
    </div>
  )
}
