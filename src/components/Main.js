import { useEffect, useState } from "react"
import Carrousel from "./Carrousel"
import Gallery from "./Gallery"
import ModalMenu from "./ModalMenu"
import ProductInfo from "./ProductInfo"

const Main = () => {

    const [dimensions, setDimensions] = useState(window.innerWidth);
    const resizeWidth = () => setDimensions(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', resizeWidth);
    }, [])

    return (
        <main className="main">
            <ModalMenu />

            {
                dimensions <= 1024 ?
                    <Carrousel />
                    :
                    <Gallery />
            }

            <ProductInfo />
        </main>
    )
}

export default Main
