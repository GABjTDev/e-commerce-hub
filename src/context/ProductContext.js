import { createContext, useState } from "react";


const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {

    const [count, setCount] = useState(1);
    const [buy, setBuy] = useState(0);
    const [showCart, setShowCart] = useState(false);

    const Add = () => {
        if (count < 10) setCount(count + 1);
    }

    const Subtract = () => {
        if (count > 1) setCount(count - 1);
    }

    const AddCart = () => setBuy(count);

    const Reset = () => {
        setCount(1);
        setBuy(0);
    };

    const handleCart = () => setShowCart(!showCart);

    const Checkout = () => {
        alert('Producto comprado');
        setCount(1);
        setBuy(0);
    };

    const data = {
        count,
        buy,
        Add,
        Subtract,
        AddCart,
        Reset,
        Checkout,
        showCart,
        handleCart
    }

    return (
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    )

}


export default ProductContext;
export { ProductContextProvider }