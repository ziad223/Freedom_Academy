import {createContext, useEffect, useState} from 'react';


export const darkContext = createContext();



export const DarkProvider = ({children}) =>{

    const [dark , setDark] = useState(
        localStorage.getItem("dark") ? 
        JSON.parse(localStorage.getItem('dark')) :
        false
    );

    const changeDark = () =>{
        setDark(!dark);
    }

    useEffect(() =>{
        localStorage.setItem("dark" , JSON.stringify(dark))
    } , [dark])

    return(
        <darkContext.Provider value={{changeDark , dark}} >
          {children}
        </darkContext.Provider>
    )
}