import React from "react";
import { useCart } from "../context/Cart";

const Item = ({ title, price }) => {
  const cart = useCart();

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-wrap -m-2">
              <div className="h-80 w-72 border-[4px] border-gray-600 shadow-lg shadow-gray-600 rounded-lg overflow-hidden">
                <img
                  className="lg:h-40 md:h-24 w-full object-cover object-center"
                  src='/images.jpeg'
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-lg title-font font-bold text-gray-500 mb-1">
                    {title}
                  </h2>
                  <h1 className="title-font text-2xl font-medium text-white mb-3">
                    Price: ${price}
                  </h1>
                 
                  <div className="flex items-center flex-wrap ">
                    <button
                      onClick={() =>
                        cart.setItem([...cart.item, { title, price }])
                      }
                      className="flex mx-auto mt-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                      Add to Cart
                    </button>
                </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default Item;
