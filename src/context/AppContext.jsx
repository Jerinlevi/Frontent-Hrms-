import { createContext,useState} from "react";
export const AppContext = createContext();

export default function AppProvider({children}){
    const [token,setToken]=useState(localStorage.getItem("token"))
    const [username,setName]=useState(useState(localStorage.getItem("username") || ""))
    const login=(token)=>{
        localStorage.setItem("token",token)
        setToken(token)
    }
    const Naming=(name)=>{
        setName(name)
    }
    const logout=(token)=>{
        localStorage.removeItem("token")
        
    }
    return(
        <AppContext.Provider value={{token,login,Naming,username,logout}}>
            {children}
        </AppContext.Provider>

    )
}


