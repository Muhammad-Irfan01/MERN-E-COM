import { createContext } from "react";
import all_Product from '../assets/all_products'


export const shopContext = createContext(null)

const shopContextProvider = (props) =>{
    const contextValue = {all_Product}

return (
    <shopContext.Provider value={contextValue}>
        {props.children}
    </shopContext.Provider>
)
}

export default shopContextProvider;