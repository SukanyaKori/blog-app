
import Sidebar from './components/sidebar/Sidebar';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/home/single/Single';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import Write from './pages/write/Write';
import Register from './pages/register/Register';
import {Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Post from './components/post/Post';
import Posts from './components/posts/Posts';






function App() {

  const user=true;

  return (
   
    <>
  <TopBar/>
  
 
  <Routes>


        <Route path="/" element={<Header/>} />

        <Route path="/home" element={<Header/>} />

        <Route path="/register" element={ <Register/>} />

        <Route path="/login" element={ <Login/>} />

        <Route path="/write" element={user? <Write/>: <Register/>} />

        <Route path="/settings" element={user? <Settings/>: <Register/>} />

        <Route path="/sidebar" element={<Sidebar/>} />

        <Route path="/posts" element={<Posts/>} />

        

        



      </Routes>
  
    
</>



// {/*         
//         <Route path='/register'>
//           <Register />
//         </Route>
//         <Route path='/login'>
//           <Login />
//         </Route>
//         <Route path='/write'>
//           <Write />
//         </Route>
//         <Route path='/settings'>
//           <Settings />
//         </Route>

//       </Router> */}


  );
    }
export default App;













































































