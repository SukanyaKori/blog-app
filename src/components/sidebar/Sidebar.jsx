
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>

    <div className='sidebarItem'>
        <span className='sidebarTitle'> ABOUT ME</span><br/>
        <img  className='sidebarImg'   src='mommy.jpg'></img>
        <p> hello every ,this is my mommy's blogging page,hope you all like it </p>
    </div>
    <span className='sidebarTitle'> FOLLOW ME</span>

    <div className='sidebarSocial'>
        <i className=" sidebarIcon fa-brands fa-facebook-square"></i>
        <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        <i className="sidebarIcon fa-brands fa-youtube-square"></i>
      </div>
    </div>
  );
}
