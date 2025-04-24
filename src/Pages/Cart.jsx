import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from "../Components/CartItem"

const Cart = () => {

  const{cart} = useSelector( (state) =>state );
  const[totalAmount, setTotalAmount] = useState(0);

  useEffect( () =>{
    setTotalAmount( cart.reduce((accumulator, currenValue) => accumulator + currenValue.price,0) );
  },[cart])

  return (
    <div className='max-w-6xl flex items-center justify-center mx-auto mb-4'>
      {
        cart.length > 0 ?
        (<div className='flex gap-x-64'>
          <div>
            {
              cart.map((item,index) =>{
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              } )
            }
          </div>

          <div className='flex flex-col mt-10 justify-between'>
          
            <div>
              <div className='font-semibold'> Your Cart </div>
              <div> Summary </div>
              <p>
                <span>Total Items:<span className='font-semibold'>{cart.length}</span></span>
              </p>
            </div>  

            <div>
              <p className='font-semibold'>Total Amount:<span className='font-semibold text-green-600'>${totalAmount}</span></p>
              <button className='bg-green-600 m-2 p-2 rounded font-semibold text-white'>
                CheckOut Now
              </button>
            </div>

          </div>

        </div>) :
        (<div className='flex flex-col justify-center items-center'>
          <h1 className='text-gray-700 font-semibold text-lg '>Cart Empty</h1>
          <Link to ={"/"}>
            <button className='text-white bg-green-600 m-2 p-2 font-semibold rounded'>
              Shop Now
            </button>
          </Link>
        </div>)
      }
    </div>
  )
}

export default Cart