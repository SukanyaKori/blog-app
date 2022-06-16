import React from 'react'
import { Link } from 'react-router-dom';
import "./topbar.css"
import Sidebar from '../sidebar/Sidebar';



export default function TopBar() {

  const user = true;
  return (


    <div className='top'>

      <div className='topleft'>
        <a  href='https://www.facebook.com/rekha.kori.351'  target="_blank"><i className=" topIcon fa-brands fa-facebook-square"></i></a>
        <a href='' target="_blank"><i className="topIcon fa-brands fa-instagram-square"></i></a>
        <a href='https://youtube.com/channel/UC37fUVeYdTpiXy6dQ5AmJRg' target="_blank"><i className="topIcon fa-brands fa-youtube-square"></i></a>
        <a href='https://twitter.com/Rekhakori11?s=09' target="_blank"> <i className="topIcon fa-brands fa-twitter-square"></i></a>

      </div>
      <div className='topcenter'>
        <ul className='topList'>

          <li className='topListItems'><Link className='link' to='/home'>HOME</Link></li>
          <li className='topListItems'><Link className='link' to='/posts'>ABOUT</Link></li>
          <li className='topListItems'><Link className='link' to='/sidebar'>CONTACT</Link></li>
          <li className='topListItems'><Link className='link' to='/write'>WRITE</Link></li>
          <li className='topListItems'> <Link className='link' to='/register'>LOGOUT</Link>    {user && ''} </li>

        </ul>

      </div>

      <div className='topright'>
        {
          user ? (

            <img className='topImg' src='mommy.jpg' alt=''></img>
          ) : (<ul className='topList'>
            <li className='topListItems'>
              <Link className='link' to="/login">LOGIN</Link></li>
            <li className='topListItems'>
              <Link className='link' to="/register">REGISTER</Link></li>
          </ul>
          )
        }

        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
        

      </div>
    




    </div>

  )
}

