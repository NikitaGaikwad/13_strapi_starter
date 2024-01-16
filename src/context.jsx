import { createContext, useContext, useState } from "react";

const Appcontext = createContext();

export const AppProvider = ({ children }) => {
    let [isSidebarOpen, setIsSidebarOpen] = useState(false);
    let [pageId, setPageId] = useState(null);

    const OpenSidebar = () => {
        setIsSidebarOpen(true);
    }
    const CloseSidebar = () => {
        setIsSidebarOpen(false);
    }
    return <Appcontext.Provider value={{ isSidebarOpen, OpenSidebar, CloseSidebar, pageId, setPageId, }}> {children}</Appcontext.Provider>
}

export const useGlobalContext = () => {
    return useContext(Appcontext);
}