import React from 'react';
import {useState,useEffect} from 'react';
import './theme.css'
import { ThemeContext } from './ThemeContext';
import Navbar from './Navbar';
import Content from './Content';
const Theme = () => {
    const light= "#F1F3F4";
    const dark = "#202124";
const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || light;
});
    function handleTheme(){
        if (theme === light) {
          setTheme(dark);
        } else {
          setTheme(light);
        }
    }
      useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
          setTheme(savedTheme);
        }
      }, []);

      useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.style.backgroundColor = theme;
      }, [theme]);
 

  return (
    <div>      
        <ThemeContext.Provider value={{theme,dark,light}}>
            <Navbar/>
        </ThemeContext.Provider>
     <div className = "buttonContainer">
      <span style={{color:(theme === light)?dark:light}}> Theme Changer</span>
      <button style = {{color:theme === light? dark:light}} onClick={handleTheme}>{theme === light ? 'dark':'light'}</button>
     </div>  
  
    </div>
  )
}
export default Theme