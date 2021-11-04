import { BsCart3 } from 'react-icons/bs'
import Avatar from '../images/image-avatar.png'
import Img from '../images/image-product-1.jpg'

import { useContext } from 'react'

//Context
import ProductContext from '../context/ProductContext'

//ICON
import { BsTrashFill } from 'react-icons/bs';

const Cart = () => {

    const { buy, Reset, Checkout, showCart, handleCart } = useContext(ProductContext);

    return (
        <div className="cart">
            <div className="cart-stock">
                {
                    buy !== 0 &&
                    <p>{buy}</p>
                }
                <button onClick={handleCart}>
                    <BsCart3 />
                </button>
            </div>
            <img src={Avatar} alt="Foto del usuario" className="avatar" />
            <div className={`cartModal ${showCart ? 'active' : ''}`}>
                <h3>Cart</h3>
                <hr />

                {
                    buy === 0 ?
                        <div className="cart-empty">
                            <p>Your cart is empty.</p>
                        </div>
                        :
                        <div className="cart-slot">
                            <div className="slot-info">
                                <img src={Img} alt="product 1" />
                                <div>
                                    <h4>Autumn Limited...</h4>
                                    <div className="prices">
                                        <p className="price">$125.00 x {buy}</p>
                                        <p className="total">{`$${125 * buy}.00`}</p>
                                    </div>
                                </div>
                                <button onClick={Reset}>
                                    <BsTrashFill />
                                </button>
                            </div>
                            <button className="check" onClick={Checkout}>Checkout</button>
                        </div>
                }

            </div>
        </div >
    )
}

export default Cart
