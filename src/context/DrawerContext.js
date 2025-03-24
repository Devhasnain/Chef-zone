import { createContext, useContext, useState } from "react";

export const DrawerContext = createContext();
const DrawerContextProvider = ({children})=>{
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <DrawerContext.Provider value={{isDrawerOpen,setIsDrawerOpen}}>
            {children}
        </DrawerContext.Provider>
    )
};

export const useDrawerContext = ()=>{
    return useContext(DrawerContext);
}

export default DrawerContextProvider;