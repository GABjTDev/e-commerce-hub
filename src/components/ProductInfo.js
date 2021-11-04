import Stock from "./Stock"

const ProductInfo = () => {
    return (
        <div className="info">
            <h2>SNEAKER COMPANY</h2>
            <h3>Fall Limited Edition Sneakers</h3>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weater can offer.</p>
            <div className="box-price">
                <div className="price">
                    <p>$125.00</p>
                    <p>50%</p>
                </div>
                <p className="discount">$250.00</p>
            </div>
            <Stock />
        </div>
    )
}

export default ProductInfo
