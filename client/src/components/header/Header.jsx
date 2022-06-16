import React from 'react'
import Posts from '../posts/Posts';
import Sidebar from '../sidebar/Sidebar';
import './header.css';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div className='header'>
    <div className='headerTitles'>
        <span className='headerTitleSm'>Life & Motivation</span>
        <span className='headerTitleLg'>BLOG </span>
    </div>
    <img className='headerImg'
     src='bg.jpg' 
     alt=''>

     </img>
    
    <Posts/>
    <Sidebar/>
    </div>
    
  )
}
