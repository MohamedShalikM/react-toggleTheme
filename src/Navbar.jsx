import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; 
import './navbar.css';
const Navbar = () => {
  const { theme,dark,light } = useContext(ThemeContext); 

  return (<>
   <nav
      style={{
        backgroundColor: theme === light ? light : dark,
        color: theme === light ? dark : light}}>
      <h1>Navbar</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>

  </>
   
  );
};

export default Navbar;
