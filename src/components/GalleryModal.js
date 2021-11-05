import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

import img1 from '../images/image-product-1.jpg'
import img2 from '../images/image-product-2.jpg'
import img3 from '../images/image-product-3.jpg'
import img4 from '../images/image-product-4.jpg'

const getImg = (number) => {
    let images = [img1, img2, img3, img4];
    return images[number];
}


const GalleryModal = ({ imgShow, handleImg, setImgShow, modalProduct, handleProduct }) => {

    const [number, setNumber] = useState(0);

    const handleNext = () => {
        if (number < 3) {
            setNumber(number + 1)
        } else {
            setNumber(0)
        }
        setImgShow(getImg(number))
    }

    const handlePrevious = () => {
        if (number >= 1) {
            setNumber(number - 1)
        } else {
            setNumber(3)
        }
        setImgShow(getImg(number))
    }

    return (
        <div className={`modal-product-carrousel ${modalProduct ? 'active' : ''}`} >
            <div className="modal-product">
                <button className="btn-close" onClick={handleProduct}>
                    <AiOutlineClose />
                </button>
                <div className="product-show">
                    <GrFormPrevious onClick={handlePrevious} />
                    <img src={imgShow} alt="imagen a mostrar" />
                    <GrFormNext onClick={handleNext} />
                </div>
                <div className="mini-gallery">
                    <img src={img1} alt="imagen 1" className={imgShow === img1 ? 'active' : ''} onClick={() => handleImg(img1)} />
                    <img src={img2} alt="imagen 2" className={imgShow === img2 ? 'active' : ''} onClick={() => handleImg(img2)} />
                    <img src={img3} alt="imagen 3" className={imgShow === img3 ? 'active' : ''} onClick={() => handleImg(img3)} />
                    <img src={img4} alt="imagen 4" className={imgShow === img4 ? 'active' : ''} onClick={() => handleImg(img4)} />
                </div>
            </div>
        </div>
    )
}

export default GalleryModal
