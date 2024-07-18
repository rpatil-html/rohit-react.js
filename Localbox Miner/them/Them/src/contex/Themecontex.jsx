import { useState } from "react";
import { createContext } from "react";

export const Themecontex=createContext();

export function ThemecontexProvider({children}){
     const [theme,setheme]=useState("light")

     const Togglethem=()=>{
      setheme(theme=="light"?"dark":"light")
     }
   return(
      <Themecontex.Provider value={{theme,Togglethem}}>
       {children}
      </Themecontex.Provider>
   )
}