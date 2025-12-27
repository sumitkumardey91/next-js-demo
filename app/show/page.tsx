import { Product } from "./product";


export default async function Show() {
const res = await fetch("https://dummyjson.com/product");
  const products = await res.json();
  console.log(products)
  return <>{products && products.products.length > 0 ? <Product products={products.products}></Product> : ""}</>

}
