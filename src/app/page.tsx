'use client'

import React, { useCallback, useState } from 'react'
import product from '@/assets/product.webp'
import Image from 'next/image'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useRouter } from 'next/navigation';
import AddCounter from '@/app/components/addCounter'

export default function page() {


  const [proArr, setProArr] = useState<any>([
    {
      id: 1,
      img: product,
      pro_name: 'Heart Necklace',
      main_price: '6,999',
      cut_price: '7,999',
      createAt: '1',
    },
    {
      id: 2,
      img: product,
      pro_name: 'Heart Necklace',
      main_price: '6,999',
      cut_price: '7,999',
      createAt: '2',
    },
    {
      id: 3,
      img: product,
      pro_name: 'Heart Necklace',
      main_price: '6,999',
      cut_price: '7,999',
      createAt: '3',
    },
    {
      id: 3,
      img: product,
      pro_name: 'Heart Necklace',
      main_price: '6,999',
      cut_price: '7,999',
      createAt: '2',
    },
    {
      id: 3,
      img: product,
      pro_name: 'Heart Necklace',
      main_price: '6,999',
      cut_price: '7,999',
      createAt: '3',
    },
    {
      id: 3,
      img: product,
      pro_name: 'Heart Necklace',
      main_price: '6,999',
      cut_price: '7,999',
      createAt: '1',
    },
  ])

  const router = useRouter()

  const handleClick = (id: any) => {
    router.push(`/Cart?bhawana=${id}`)
  }

  const [count, setCount] = useState(1)

  const handleAdd = useCallback(
    () => {
      setCount(count + 1)

      console.log(count, 'count')
    
    }, [count]
  )




  return (

    <div className="product_box">
      <div className="container">
        <div className="row">

          {
            proArr && proArr?.length && proArr?.map((el: any, i: any) => (

              <div className="col-lg-4 col-md-4 col-sm-4" key={i}>
                <div className="content">
                  <div className="image">
                    <Image src={el?.img} alt='' fill priority />
                  </div>
                  <h1 className='heading'>{el?.pro_name}</h1>

                  <div className="price">
                    <span className='main_price'>₹{el?.main_price}</span>
                    <span className='cut_price'>₹{el?.cut_price}</span>
                  </div>

                  <button className='btn' onClick={() => handleClick(el.id)}><MdOutlineAddShoppingCart /></button>
                </div>
              </div>

            ))
          }

          <button onClick={handleAdd}>count:{count}</button>

          <AddCounter  />

        </div>
      </div>
    </div>
  )
}
