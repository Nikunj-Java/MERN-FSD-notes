
const {createContext,useState,useContext}=require("react");

const AuthContext=createContext();

export const AuthProvide= ({children})=>{
    const [user,setUser]=useState(null);
    const login=async (userData)=>{
        console.log(userData);

        setUser(userData);
    }

    const logout=()=>{
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuthContext=()=>{
    return useContext(AuthContext);
}