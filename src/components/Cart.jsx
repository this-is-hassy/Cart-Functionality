import { useCart } from "../context/Cart";


const Cart = () => {
  const cart = useCart();
  const total = cart.item.reduce((a, b) => a + b.price, 0)
  return (
    <>


  <div className="container pt-4 w-full mx-auto">
    <div className="flex flex-wrap -m-4 justify-center">
        <div className="border-[4px] shadow-lg shadow-green-700 border-green-700 border-opacity-75 p-6 rounded-lg">

          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
            <img src="/cartIcon.png" className="w-20 h-12" alt="cart" />
          </div>
            <div className="absolute bottom-[262px] left-[768px] text-4xl font-bold text-white">Cart</div>

          <h2 className="text-xl text-white font-medium title-font my-4 ml-12 ">{
        cart && cart.item.map((items) => (
          <li>{items.title} - ${items.price}</li>
        ))
      }</h2>

          <p className="leading-relaxed text-5xl text-green-500"><h5>Total Bill: ${total}</h5></p>
        </div>
        </div>
        </div>
    </>
  );
};

export default Cart;
