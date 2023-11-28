import React,{createContext} from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    onLogout:()=>{}
})

export default AuthContext