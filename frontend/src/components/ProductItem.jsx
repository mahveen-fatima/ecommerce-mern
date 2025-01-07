import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id, image, name, price, category}) => {
    const {currency} = useContext(ShopContext)

  return (
    <Link className='cursor-pointer' to={`/product/${id}`}>
        
        
        
          <div className="min-w-[250px] flex-shrink-0 rounded-lg p-4 px-0 w-[100px] lg:w-[450px] gap-0">
          
            <img
              src={image[0]}
              className="w-[600px] lg:h-[450px] object-cover rounded-lg bg-[#f5f5f5]"
            />
            
            
            <h3 className="mt-4 text-lg font-semibold roboto-regular poppins-regular">{name}</h3>
            <p className="text-base text-gray-500 roboto-regular poppins-regular">{category}</p>
            <p className="mt-2 text-lg font-semibold roboto-regular poppins-regular">MRP : {currency} {price}</p>
            
          </div>
        
      
    </Link>
  )
}

export default ProductItem