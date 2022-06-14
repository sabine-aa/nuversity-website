/* eslint-disable react/jsx-no-undef */
import React from 'react'
import {Nav, 
  NavLink,
Bars,
NavMenu,
NavLogo,
 //NavBtn,
NavBtnLink,

//NavMenuActive
} from './NavbarElements'
import { button } from '../../App.css';
import { useState } from 'react';
//import {NavLink } from 'react-router-dom';



const Navbar  = () => {
  //  const [clicked, setClicked] = useState(false);
  //  const changeCounter = () => {

  //       if (clicked === false) {
  //         setClicked(true);
         
           
  //       }
  //       else if (clicked === true) {
  //          <NavMenuActive/>
  //          setClicked(true);
  //       }
  //   }
  return (
    <>
      {" "}
      <Nav>
        {/* <NavLogo> */}
          <img src={require("../../images/logo.png")}></img>
        {/* </NavLogo> */}
        <Bars />
        {/* {
            clicked &&
            NavMenuActive
            
          } */}

        <NavMenu>
          
          <NavLink to="/Home" activeStyle>
            {" "}
            Home
          </NavLink>
          <NavLink to="/Administration" activeStyle>
            {" "}
            Administration
          </NavLink>
          <NavLink to="/Academic" activeStyle>
            {" "}
            Academic
          </NavLink>
          <NavLink to="/Professional" activeStyle>
            {" "}
            Professional
          </NavLink>
          <NavLink to="/Findajob" activeStyle>
            {" "}
            Find a job
          </NavLink>
          <NavLink to="/About" activeStyle>
            {" "}
            About
          </NavLink>
          <NavBtnLink to="/Login">Log In</NavBtnLink>
          
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar 