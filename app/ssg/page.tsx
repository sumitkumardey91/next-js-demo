

async function Ssg() {
    let data = await fetch("http://localhost:5000/products?page=1", {
    cache: "force-cache", 
  });
    let products = (await data.json()).products;

    return (
    
    <div>
        <h1>SSG</h1>
        <ol >
            {products.map((product: any, index: number) => {
                return <li key={index} >{product.id}. {product.title}</li>
            })}
        </ol>
    </div>
)
    
}

export default Ssg;