

async function Isr() {
    let data = await fetch("http://localhost:5000/products?page=1", {cache: "force-cache",
         next: {revalidate: 3600}
});
    let products = (await data.json()).products;

    return (
    
    <div>
        <h1>Isr</h1>
        <ol >
            {products.map((product: any, index: number) => {
                return <li key={index} >{product.id}. {product.title}</li>
            })}
        </ol>
    </div>
)
    
}

export default Isr;