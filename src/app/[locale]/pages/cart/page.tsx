'use client'

import {
  useDeleteAllProductMutation,
  useDeleteProductMutation,
  useGetCartProductsQuery,
  useIncreaseProductMutation,
  useReduceProductMutation,
} from '@/store/api'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProductInCart {
  product: any
  id: number
  productName: string
  image: string
  color: string
  price: number
  hasDiscount: boolean
  discountPrice: number
  quantity: number
  productInMyCart: boolean
  categoryId: number
  categoryName: null
  productInfoFromCart: null
}

export interface Carts {
  productsInCart: any
  totalProducts: number
  totalPrice: number
  totalDiscountPrice: number
}

const Cart = () => {
  const { data: cartData } = useGetCartProductsQuery([])
  const [increaseProduct] = useIncreaseProductMutation()
  const [reduceProduct] = useReduceProductMutation()
  const [deleteProduct] = useDeleteProductMutation()
  const [deleteAllProduct] = useDeleteAllProductMutation()

  return (
    <section className='w-[85%] py-[20px] m-auto'>
      <p className='pb-[50px]'>Home / Cart </p>
      {cartData?.data?.map((cart: Carts) => (
        <div key={cart.totalPrice} className='pb-[40px]'>
          {/* MOBILE VIEW */}
          <div className='block sm:hidden'>
            {cart?.productsInCart?.length === 0 ? (
              <div className='text-center flex items-center justify-center h-[200px]'>
                <p className='text-[30px]'>Cart is empty</p>
              </div>
            ) : (
              cart?.productsInCart?.map((product: ProductInCart) => (
                <div
                  key={product.id}
                  className='border-1 border-solid border-gray-300 mb-[20px] px-[20px] py-[10px] rounded-[8px]'
                >
                  <div className='py-[10px]'>
                    <p className='font-bold'>Product</p>
                    <div className='flex gap-[10px] items-center'>
                      <p>{product.product.productName}</p>
                      <Image
                        src={`https://store-api.softclub.tj/images/${product.product.image}`}
                        width={70}
                        height={50}
                        alt='image'
                      />
                    </div>
                  </div>
                  <div className='py-[10px]'>
                    <p className='font-bold'>Price</p>
                    <p>${product.product.price}</p>
                  </div>
                  <div className='py-[10px]'>
                    <p className='font-bold'>Quantity</p>
                    <div className='flex items-center justify-start'>
                      <button
                        className='w-[40px] rounded-[10px] h-[40px] bg-[black] text-white'
                        onClick={() => increaseProduct(product.id)}
                      >
                        +
                      </button>
                      <p className='px-[10px]'>{product.quantity}</p>
                      <button
                        className='w-[40px] rounded-[10px] h-[40px] bg-[black] text-white'
                        onClick={() => reduceProduct(product.id)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className='py-[10px]'>
                    <p className='font-bold'>Subtotal</p>
                    <p>${product.product.price * product.quantity}</p>
                  </div>
                  <div className='py-[10px] text-right'>
                    <button
                      className='bg-[#DB4444] text-white px-[10px] rounded-[50%] py-[5px]'
                      onClick={() => deleteProduct(product.id)}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* DESKTOP VIEW */}
          <table className='hidden sm:table w-full'>
            <thead>
              <tr className='text-[#00000099] text-[16px] '>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Button del</th>
              </tr>
            </thead>
            <tbody>
              {cart?.productsInCart?.length === 0 ? (
                <tr>
                  <td colSpan={5}>
                    <div className='text-center flex items-center justify-center h-[200px]'>
                      <p className='text-[30px]'>Cart is empty</p>
                    </div>
                  </td>
                </tr>
              ) : (
                cart?.productsInCart?.map((product: ProductInCart) => (
                  <tr key={product.id}>
                    <td className='w-[400px] py-[20px] px-[30px]'>
                      <div className='flex gap-[10px] items-center'>
                        <Image
                          src={`https://store-api.softclub.tj/images/${product.product.image}`}
                          width={70}
                          height={50}
                          alt='image'
                        />
                        <p>{product.product.productName}</p>
                      </div>
                    </td>
                    <td className='w-[200px] text-center'>
                      ${product.product.price}
                    </td>
                    <td>
                      <div className='flex items-center justify-center'>
                        <button
                          className='w-[40px] rounded-[10px] h-[40px] bg-[black] text-white'
                          onClick={() => increaseProduct(product.id)}
                        >
                          +
                        </button>
                        <p className='px-[10px]'>{product.quantity}</p>
                        <button
                          className='w-[40px] rounded-[10px] h-[40px] bg-[black] text-white'
                          onClick={() => reduceProduct(product.id)}
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td className='w-[200px] text-center'>
                      ${product.product.price * product.quantity}
                    </td>
                    <td className='w-[200px] text-center'>
                      <button
                        className='bg-[#DB4444] text-white px-[10px] rounded-[50%] py-[5px]'
                        onClick={() => deleteProduct(product.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className='flex flex-col sm:flex-row gap-[30px] sm:gap-[0px] justify-between py-[30px]'>
            <button className='py-[10px] w-[200px] border border-solid border-gray-500'>
              Return To Shop
            </button>
            <div className='flex gap-[20px] items-center'>
              <button className='py-[10px] w-[200px] border border-solid border-gray-500'>
                Update cart
              </button>
              <button
                className='py-[10px] w-[200px] border-2 border-solid border-[#DB4444] text-[#DB4444]'
                onClick={deleteAllProduct}
              >
                Remove all
              </button>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-[40px] sm:gap-[0px] justify-between items-start'>
            <div className='flex flex-col sm:flex-row gap-[20px]'>
              <input
                type='text'
                placeholder='Cauption code'
                className='py-[10px] w-[300px] px-[20px] border-2 border-solid border-gray-600 rounded-[4px]'
              />
              <button className='py-[10px] w-[150px] border-2 border-solid border-[#DB4444] text-[#DB4444] rounded-[4px]'>
                Apply
              </button>
            </div>
            <div className='border-2 flex flex-col gap-[30px] w-[350px] border-solid sm:w-[400px] border-black rounded-[5px] p-[20px]'>
              <p className='text-[20px] font-semibold'>Cart total</p>
              <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{cart.totalPrice}</p>
              </div>
              <div className='flex border-b-2 border-solid border-gray-400 pb-[20px] justify-between'>
                <p>Total product</p>
                <p>{cart.totalProducts}</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-[18px] tracking-[1px]'>Total</p>
                <p>{cart.totalPrice}</p>
              </div>
              <div className='flex items-center justify-center'>
                <Link href={`/pages/checkout`}>
                  <button className='py-[10px] w-[200px] bg-[#DB4444] rounded-[5px] text-white'>
                    Proccess to checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Cart
