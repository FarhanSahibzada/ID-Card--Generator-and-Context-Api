import { useContext , createContext } from "react";

export const  themeContext = createContext({
    thememode : 'light',
    darkmode : ()=> {},
    lightmode : ()=> {}
})

export const Themeprovider =  themeContext.Provider;

export default function Usetheme(){
    return useContext(themeContext)
}