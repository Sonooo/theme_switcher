import React,{useContext} from 'react';
import ThemeContext from '../Context/ThemeContext';
import AppTheme from '../colors';
const HeroSection = () => {
    const theme = useContext(ThemeContext)[0]
    const currectTheme = AppTheme[theme]
    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return(
       <div style={{
        height:"100vh",
        padding:"1rem",
        backgroundColor:`${currectTheme.backgroundColor}`,
        color:`${currectTheme.textColor}`,
        textAlign:"center"
       }}>
        <h1>Context API theme toggler</h1>
        <p> This is a nice paragraph</p>
        <button style={{
            backgroundColor:"#26ae60",
            padding:"10px 150px",
            fontSize:"20px",
            color:"#FFF",
            border: `${currectTheme.border}`

        }} 
        
        onClick={()=>{
            setThemeMode(themeMode==="light"?"dark":"light")
        }}>
            {themeMode==='light'?'Turn Off':'Lights On'}
        </button>
       </div>
    )

}

export default HeroSection;
