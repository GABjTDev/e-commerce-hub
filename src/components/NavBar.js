// Components
import Nav from "./Nav"
import Cart from "./Cart"
import LogoMenu from "./LogoMenu"

const NavBar = () => {
    return (
        <header className="container-nav">
            <LogoMenu />
            <Nav />
            <Cart />
        </header>
    )
}

export default NavBar
