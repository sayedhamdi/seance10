import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context/CartContext"
import data from "../data/products.json"
export default function NavBar(){
    const {cart} = useContext(CartContext)
    let cartItems = cart.map(item=> ( {...data.find(p => p.id === item.id),qte : item.qte}))
    let total = cartItems.reduce((acc,curr)=>acc+curr.price*curr.qte,0)
    console.log(cartItems)
    return (
        <nav>
            <ul style={{display:'flex',listStyle:'none',justifyContent:'space-around'}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li>cart : { total }  </li>
            </ul>
        </nav>
    )
}