import Logo from '../images/logo.svg'
import { ImMenu } from 'react-icons/im'

import { useContext } from 'react'

// context
import ContextMenuModal from '../context/ContextMenuModal'

const LogoMenu = () => {

    const { handleActive } = useContext(ContextMenuModal)

    return (
        <div className="LogoMenu">
            <button onClick={handleActive}><ImMenu /></button>
            <img src={Logo} alt="Logo de sneakers" />
        </div>
    )
}

export default LogoMenu
