import { useState } from "react"

import img1 from '../images/image-product-1.jpg'

const HooksImages = () => {

    const [imgShow, setImgShow] = useState(img1);
    const [modalProduct, setModalProduct] = useState(false);

    const handleImg = (img) => {
        setImgShow(img);
    }

    const handleProduct = () => setModalProduct(!modalProduct);

    return {
        imgShow,
        handleImg,
        handleProduct,
        setImgShow,
        modalProduct
    }

}

export default HooksImages
