
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
// import Home from './pages/home/home/Home';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/home/single/Single';
import Settings from './pages/settings/Settings';
import Write from './pages/write/Write';





function App() {
  return (
    <>

       
       <TopBar/>
       {/* <Sidebar/>
       <Write/>    */}
       <Settings/>
       


    </>
  );
}

export default App;
