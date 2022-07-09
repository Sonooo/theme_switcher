import React,{useContext} from 'react';
import ThemeContext from '../Context/ThemeContext';
import AppTheme from '../colors';

const Header = () => {
    const theme = useContext(ThemeContext)[0]
    const currectTheme = AppTheme[theme]
    return (
        <header
        style={{
            padding:"1rem",
            backgroundColor:`${currectTheme.backgroundColor}`,
            color:`${currectTheme.textColor}`,
            textAlign:"center"
        }}
        >
            <h1>
                Theme Toggler
            </h1>
            
        </header>
    );
}

export default Header;
