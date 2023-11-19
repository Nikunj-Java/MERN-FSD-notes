
const {createContext, useState,useContext}= require("react");

const ThemeContext= createContext();

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState('light');

    const toggleTheme=()=>{
        setTheme((prevTheme)=>prevTheme==='light'?'dark':'light');
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext=()=>{
    return useContext(ThemeContext);
}