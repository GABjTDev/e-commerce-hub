import { useContext } from "react"

import ContextMenuModal from "../context/ContextMenuModal"

const ModalMenu = () => {

    const { handleActive, active } = useContext(ContextMenuModal);

    return (
        <div className={`modal-menu ${active ? 'active' : ''}`}>
            <nav className="modal-nav">
                <button onClick={handleActive}>X</button>
                <ul>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div >
    )
}

export default ModalMenu
