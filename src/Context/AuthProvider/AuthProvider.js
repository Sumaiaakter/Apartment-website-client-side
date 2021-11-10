import { createContext } from "react";
import useFirebase from "../../Hooks/useFirebase.js";
// import useCart from "../../Hooks/useCart.js";
// import useApartments from "../../Hooks/useApartments.js";




export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // hooks
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;