import { createContext } from "react";
import useApartments from "../../Hooks/useApartments.js";
import useCart from "../../Hooks/useCart.js";
import useFirebase from "../../Hooks/useFirebase.js";
// import useCart from "../../Hooks/useCart.js";





export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // hooks

    const allContext = useFirebase();
    const { apartments, totalPage, currentPage, setCurrentPage } = useApartments();
    const { addToCart, selectedApartment, remove, setSelectedApartment } = useCart();

    const data = {
        allContext,
        apartments,
        totalPage,
        addToCart,
        selectedApartment,
        remove,
        setSelectedApartment,
        currentPage,
        setCurrentPage
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;