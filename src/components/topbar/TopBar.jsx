import React from 'react'
import "./topbar.css"



export default function TopBar() {
  return (
    <div className='top'>

      <div className='topleft'>
        <i className=" topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        <i className="topIcon fa-brands fa-youtube-square"></i>
      </div>
      <div className='topcenter'> 
      <ul className='topList'>
        <li className='topListItems'>HOME</li>
        <li className='topListItems'>ABOUT</li>
        <li className='topListItems'>CONTACT</li>
        <li className='topListItems'>WRITE</li>
        <li className='topListItems'>LOGOUT</li>
      </ul>
      
      </div>

      <div className='topright'> 
      <img className='topImg' src='mommy.jpg' alt=''></img>

      <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      
      </div>



    </div>

  )
}

