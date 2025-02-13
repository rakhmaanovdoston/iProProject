import { createContext , useContext , useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);

    const login = (userData) => {
        setUser(userData)
    };

    const logOut = () => {
        setUser(null)
    };

    return (
        <AuthContext.Provider value={{user , login , logOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);