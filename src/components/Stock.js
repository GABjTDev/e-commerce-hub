import { BsCart3 } from 'react-icons/bs'
import { useContext } from 'react'


// CONTEXT
import ProductContext from '../context/ProductContext'

const Stock = () => {

    const { count, Add, Subtract, AddCart } = useContext(ProductContext);

    return (
        <div className="stock-container">
            <div className="count">
                <button onClick={Subtract}>-</button>
                <p>{count}</p>
                <button onClick={Add}>+</button>
            </div>
            <button className="btn-cart" onClick={AddCart}>
                <BsCart3 />
                Add To Cart
            </button>
        </div>
    )
}

export default Stock
