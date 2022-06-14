import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,
   Routes,
   Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Academic from './pages/Academic';
import Administration from './pages/Administration';
import Professional from './pages/Professional';
import Findajob from './pages/Findajob';
import {FooterContainer} from './containers/footer';


// import Story from './pages/Story';
// import Clients from './pages/Clients'
// import Footer from './components/footer';



function App(){
  return (
    
    
    <Router>
       
    <Navbar />
    
    <Routes>
      <Route path='/Home' exact element={<Home/>} />
      <Route path='/About' exact element={<About/>} />
      <Route path='/Academic' exact element={<Academic/>} />
      <Route path='/Administration' exact element={<Administration/>} />
      <Route path='/Professional' exact element={<Professional/>} />
      <Route path='/Findajob' exact element={<Findajob/>} />
      <Route path='/Login' exact element={<Login/>} />
      
      
    </Routes>
    <FooterContainer/>
    <Routes>
    {/* <Route path='/Story' exact element={<Story/>} />
    <Route path='/Clients' exact element={<Clients/>} />  */}
    </Routes>
    </Router>

    
  );
}

export default App;
