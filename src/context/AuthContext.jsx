import { createContext } from "react";

export const AuthContext = createContext(null);

const user ={
    email:'raihanbogra@12.com'
}

const AuthProvider = ({children}) =>{


    userInfo = {
        user,
    }


    return <AuthContext value={userInfo}>{children}</AuthContext>
}

export default AuthProvider