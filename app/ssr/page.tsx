

async function Ssr() {
    let products;
    try {
        let data = await fetch("http://localhost:5000/products?page=1", {
            cache: "no-store",
        });
        products = (await data.json()).products;
    } catch (e) {
        console.log("err", e)
    }

    return (
    
    <div>
        <h1>SSR</h1>
        <ol >
            {products && products.map((product: any, index: number) => {
                return <li key={index} >{product.id}. {product.title}</li>
            })}
        </ol>
    </div>
)
    
}

export default Ssr;