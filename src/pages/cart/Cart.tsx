import React,{useContext} from 'react'
import './cart.css'
import { cartContext } from '../../context/CartContext'
import ProductBox from '../../components/productBox/ProductBox'

export default function Cart() {
  let context = useContext(cartContext)
  return (
    <div className='container border'>
      <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {context.UserCart?.map(product=>(
            <ProductBox key={product.id} {...product}/>
          )
          )}
      </div>
    </div>
  )
}
