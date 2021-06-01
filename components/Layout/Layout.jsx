import { useState, useEffect } from 'react'
import { commerce } from '../../lib/commerce'
import NavBar from "../NavBar/NavBar";
import MyContext from '../../context'

export default function Layout({ children }) {
    const [cart, setCart] = useState({});

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const emptyCart = async () => {
        await commerce.cart.empty();
    }

    // const handleAddToCart = async (productId, quantity) => {
    //     const item = await commerce.cart.add(productId, quantity);
    //     setCart(item.cart)
    //     console.log(item.cart)
    // };

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <div>
            <MyContext.Provider value='Hello'>
                <NavBar totalItems={cart.total_items} />
                {children}
            </MyContext.Provider>
            
        </div>
    )
}