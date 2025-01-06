import React, { useRef, useContext, useEffect, useState } from "react";
import { ShopContext } from '../context/ShopContext'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ProductItem from "./ProductItem.jsx";

const NewArrivals = () => {
    const { products } = useContext(ShopContext)

    // console.log("products: ",products);

    const [newArrival, setNewArrival] = useState([])

  const carouselRef = useRef(null);


  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setNewArrival(products)
  }, [products])



  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[3vw] mt-20">
    <div className="relative w-full p-4">
      <h2 className="text-2xl mb-6 roboto-regular poppins-regular">New Arrivals</h2>

      {/* Navigation Arrows */}
      
      <div className="absolute top-4 right-4 flex space-x-2">
      <p className="text-lg  roboto-regular poppins-regular text-center pt-3">Shop</p>
        <button
          onClick={scrollLeft}
          className="transform bg-gray-100 p-4 rounded-full shadow hover:bg-gray-200"
        >
          <AiOutlineLeft className="text-xl" />
        </button>
        <button
          onClick={scrollRight}
          className="transform bg-gray-100 p-4 rounded-full shadow hover:bg-gray-200"
        >
          <AiOutlineRight className="text-xl" />
        </button>
      </div>

      {/* Product Cards */}
      {/* <div
        ref={carouselRef}
        className="flex overflow-x-scroll space-x-6 scrollbar-hide"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="min-w-[250px] flex-shrink-0 rounded-lg p-4 px-0 lg:w-1/3"
          >
            <img
              src={product.image}
              alt={product.name}
              className=" lg:h-[450px] object-cover rounded-lg bg-[#f5f5f5]"
            />
            
            
            <h3 className="mt-4 text-lg font-semibold roboto-regular poppins-regular">{product.name}</h3>
            <p className="text-base text-gray-500 roboto-regular poppins-regular">{product.category}</p>
            <p className="mt-2 text-lg font-semibold roboto-regular poppins-regular">MRP : {product.price}</p>
            
          </div>
        ))}
      </div> */}

   
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll space-x-6 scrollbar-hide"
      >
        {
            newArrival.map((item, index) => (
                <ProductItem 
                    key={index} 
                    id={item._id} 
                    image={item.image} 
                    name={item.name} 
                    price={item.price} 
                    category={item.category} 
                />
            ))
        }
        </div>
      


    </div>
    </div>
  );
};

export default NewArrivals;


