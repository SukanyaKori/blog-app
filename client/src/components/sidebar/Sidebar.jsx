
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>

      <div className='sidebarItem'>
        <span className='sidebarTitle'> ABOUT ME</span><br />
        <img className='sidebarImg' src='mommy.jpg'></img>
        <p> hello every ,this is my mommy's blogging page,hope you all like it </p>
      </div>
      <span className='sidebarTitle'> FOLLOW ME</span>

      <div className='sidebarSocial'>
  
        <a href='https://www.facebook.com/rekha.kori.351' target="_blank"><i className=" topIcon fa-brands fa-facebook-square"></i></a>
        <a href='' ><i className="topIcon fa-brands fa-instagram-square" target="_blank"></i></a>
        <a href='https://youtube.com/channel/UC37fUVeYdTpiXy6dQ5AmJRg' target="_blank"><i className="topIcon fa-brands fa-youtube-square"></i></a>
        <a href='https://twitter.com/Rekhakori11?s=09' target="_blank"><i className="topIcon fa-brands fa-twitter-square"></i></a>

      </div>
    </div>
  );
}
