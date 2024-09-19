'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import product from '@/assets/product.webp'
import style from '@/app/Cart/Cart.module.css'
import { useSearchParams } from 'next/navigation'

export default function page() {

  

    const [proArr, setProArr] = useState([
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
    ])

    const param = useSearchParams()

    const id: any = param.get('bhawana')

    const getData = proArr.filter((el, index) => (
        el.id == id
    ))
    console.log(getData, 'FSGFSGFAGS')

    return (
        <>


            <div className={style.cart_sec}>
                <div className="container">
                    <div className="row">

                        {
                            getData && getData?.length && getData?.map((ele, i) => (
                                <div className="col-lg-8 col-md-8 col-sm-8" key={i}>
                                    <div className={style.box}>
                                        <div className={style.image}>
                                            <Image src={ele?.img} alt='' fill priority />
                                        </div>
                                        <div className={style.content}>
                                            <h1 className={style.heading}>{ele?.pro_name}</h1>
                                            <p className={style.price}>₹{ele?.main_price}</p>
                                            k
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

        </>
    )
}
