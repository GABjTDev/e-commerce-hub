import { useState, createContext } from "react";

const ContextMenuModal = createContext();

const ContextMenuModalProvider = ({ children }) => {

    const [active, setActive] = useState(false);

    const handleActive = () => setActive(!active);

    let data = {
        active,
        handleActive
    }

    return (
        <ContextMenuModal.Provider value={data}>
            {children}
        </ContextMenuModal.Provider>
    )
}

export default ContextMenuModal;
export { ContextMenuModalProvider }