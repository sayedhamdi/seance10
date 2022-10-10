import data from '../data/products.json'
import ProductCard from './ProductCard'

export default function SearchBar(){
    return (
        <div>
            <input type="text" placeholder="Search" />
            <button>search</button>
            <div style={{display:'flex',flexWrap:'wrap'}}>
            {data.map(product=><ProductCard key={product.id}{...product}/>)}
            </div>
        </div>
    )
}