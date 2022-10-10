import {Routes,Route} from 'react-router-dom';
import {Home,Products} from './pages';
import { useState } from 'react';
import CartContext from './context/CartContext';
export default function MainRouter(){
    const [cart,setCart] = useState([]);
    return (
        <CartContext.Provider value={{cart,setCart}}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={ <Products /> } />
        </Routes>
        </CartContext.Provider>
        )
}