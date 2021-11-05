import { useEffect, useState } from "react"

import HooksImages from '../hooks/HooksImages'

//COMPONENTS
import Carrousel from "./Carrousel"
import Gallery from "./Gallery"
import GalleryModal from "./GalleryModal"
import ModalMenu from "./ModalMenu"
import ProductInfo from "./ProductInfo"

const Main = () => {

    const [dimensions, setDimensions] = useState(window.innerWidth);
    const resizeWidth = () => setDimensions(window.innerWidth);

    const { imgShow, handleImg, setImgShow, modalProduct, handleProduct } = HooksImages();

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
                    <>
                        <Gallery imgShow={imgShow} handleImg={handleImg} handleProduct={handleProduct} />
                        <GalleryModal imgShow={imgShow} handleImg={handleImg} setImgShow={setImgShow} handleProduct={handleProduct} modalProduct={modalProduct} />
                    </>
            }

            <ProductInfo />
        </main>
    )
}

export default Main
