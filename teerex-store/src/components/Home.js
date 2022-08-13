import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';
import Filters from './Filters';
import './styles.css'

const Home = () => {

    const {
        state: { products },
        productState: { searchQuery, byColor }
    } = CartState();

    const transformProducts = () => {
        let sortedProducts = products;
        if (!byColor) {
            sortedProducts = sortedProducts.filter((eachProd) => eachProd.color === "Black")
        }
        if (searchQuery) {
            sortedProducts = sortedProducts.filter((eachProd) => eachProd.name.toLowerCase() === searchQuery.toLowerCase())
        }
        return sortedProducts;
    }

    return (
        <div className="home">
            <Filters />
            <div className="productContainer">
                {
                    transformProducts().map((prod) => {
                        return <SingleProduct prod={prod} key={prod.id}></SingleProduct>
                    })
                }

            </div>
        </div>
    )
}

export default Home