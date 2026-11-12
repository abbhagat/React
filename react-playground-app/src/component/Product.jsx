import React from 'react';

export const Product = ({title, price, inStock, category}) => {
  return (
    <>
      <h3>{title}</h3>
      <p>Price : ${price}</p>
      <p>In Stock : {inStock ? "Y" : "N"}</p>
      <p>Categories : {category.join(", ")}</p>
    </>
  )
}
