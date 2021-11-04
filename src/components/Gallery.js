import { useState } from 'react'

import img1 from '../images/image-product-1.jpg'
import img2 from '../images/image-product-2.jpg'
import img3 from '../images/image-product-3.jpg'
import img4 from '../images/image-product-4.jpg'

const Gallery = () => {

    const [imgShow, setImgShow] = useState(img1);

    const handleImg = (img) => {
        setImgShow(img);
    }

    return (
        <div className="gallery">
            <div className="img-active">
                <img src={imgShow} alt="img" />
            </div>
            <div className="img-thumb">
                <img src={img1} alt="img 1" className={imgShow === img1 ? 'active' : ''} onClick={() => handleImg(img1)} />
                <img src={img2} alt="img 2" className={imgShow === img2 ? 'active' : ''} onClick={() => handleImg(img2)} />
                <img src={img3} alt="img 3" className={imgShow === img3 ? 'active' : ''} onClick={() => handleImg(img3)} />
                <img src={img4} alt="img 4" className={imgShow === img4 ? 'active' : ''} onClick={() => handleImg(img4)} />
            </div>
        </div>
    )
}

export default Gallery
