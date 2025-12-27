'use client'
import React from 'react';

export const Product = function ({ products }: {products:  any}) {
    React.useEffect(() => {
        console.log(products, "client")
    }, [])


    return (
        <div>
            <ul>
                {products.map((item: any) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}