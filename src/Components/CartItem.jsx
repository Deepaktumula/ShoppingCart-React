import React from 'react'
import { toast } from 'react-hot-toast';
import {FcDeleteDatabase} from"react-icons/fc"
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/CartSlice';

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.error("Item Removed")
  }

  return (
      <div className='flex border-b-2 border-green-700 gap-16 mt-10 max-w-[700px]' >
        
        <div className='mb-6'>
          <img src={item.image} alt='productImage' className='h-42 w-40'/>
        </div>

          <div>
            <h1 className='text-gray-700 font-semibold text-lg '>{item.title}</h1>
            <h1 >{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
            <div className='flex justify-between mt-4 mb-4'>
              <p className='font-semibold text-green-600'>${item.price}</p>
                <button onClick={removeFromCart}>
                  <FcDeleteDatabase className='h-[30px] w-[30px]'/>
                </button>
            </div>
          </div>

      </div>
          

  )
}

export default CartItem